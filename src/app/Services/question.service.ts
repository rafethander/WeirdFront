import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Question } from '../Models/Question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient,private messageService: MessageService) { }

  private url='http://localhost:63981/api/Question/';

  httpOption={headers:new HttpHeaders({'Content-type':'application/json'})}

  QuestionGet(id: string): Observable<Question[]>{
    return this.http.get(`${this.url+`Get/${id}`}`,this.httpOption).pipe(catchError(this.hataYakala<any>('GetQuestion')));
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
