import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Header, MessageService } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Exam } from '../Models/Exam';
import { GetResults } from '../Models/GetResults';
import { Topic } from '../Models/Topic';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  constructor(private http: HttpClient,private messageService: MessageService) { }



  private url='http://localhost:63981/api/';

  httpOptions={headers:new HttpHeaders({'Content-type':'application/json'})}


  TopicGet(): Observable<Topic[]>{
    return this.http.get(`${this.url+'Topic/Get'}`,this.httpOptions).pipe(catchError(this.hataYakala<any>('TopicGet')));
  }

  Add(exam: Exam): Observable<GetResults>{
    return this.http.post<Exam>(`${this.url+'Exam/Add'}`,exam,this.httpOptions).pipe(catchError(this.hataYakala<any>('ExamAdd')));
  }

  Get(): Observable<Exam[]>{
    return this.http.get(`${this.url+'Exam/Get'}`,this.httpOptions).pipe(catchError(this.hataYakala<any>('ExamGet')));
  }

  Delete(id: string): Observable<GetResults>{
    return this.http.delete(`${this.url+`Exam/Delete/${id}`}`,this.httpOptions).pipe(catchError(this.hataYakala<any>('ExamDelete')));
  }


  GetWithId(id: string): Observable<Topic>{
    return this.http.get(`${this.url+`Exam/Get/${id}`}`,this.httpOptions).pipe(catchError(this.hataYakala<any>('GetWithId')));
  }








  showError(messageDetail: string) {
    this.messageService.add({severity:'error', summary: 'Hata', detail:`${messageDetail}`});
  }

   /**
   * Http operasyonları hata verdiğinde çalışacak metot
   * @param operasyon - hata nerde oluştu? metodun ismi
   * @param sonuc - hata oluştuğunda dönülecek varsayılan değer (isteğe bağlı)
   */
  private hataYakala<T>(operasyon='operasyon', sonuc?: T)
  {
    return (hata: any):Observable<T> => {
      
      this.showError("Beklenmedik Servis Hatası");
      

      
      
      //todo: hatayı depolayacak uzak bir servise gönder
      //console.error(`Beklenmedik servis hatası: ${JSON.stringify(hata)}`);
      

      //todo: kullanıcıya gösterebilmek  için hatayı uygun formata çevir
      //this.log(`${operasyon} metodunda hata: ${JSON.stringify(hata)}`);

      //Uygulamanın çalışmayı kesmeden devam edebilmesi için boş bir değer dönüyoruz.
      return of(sonuc as T);

    }
  }
}
