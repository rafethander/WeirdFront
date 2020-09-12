import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Exam } from 'src/app/Models/Exam';
import { ExamService } from 'src/app/Services/exam.service';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.css']
})
export class ExamListComponent implements OnInit {


  examList: Exam[];
  
  constructor(private examService: ExamService,private messageService: MessageService,private confirmationService: ConfirmationService,private rota: ActivatedRoute) { }

  ngOnInit(): void {
    this.ExamGet();
    
  }


  ExamGet(){

    this.examService.Get().subscribe(
      sonuc=>this.examList=sonuc
      );
  }




  Delete(examId: string) {
    this.confirmationService.confirm({
        message: 'Silme İşlemini Onaylıyor musunuz?',
        header: 'Confirmation',
        icon: 'pi pi-exclamation-triangle',
        key:'exam',
        accept: () => {
         
          let id=examId;
            this.ExamDelete(id);
        },
        reject: () => {
            
        }
    });
  }
  ExamDelete(examId: string){
    this.examService.Delete(examId).subscribe(
      sonuc=>{
        if(sonuc.message=='Ok'){
          this.showSuccess('Silme İşlemi Başarılı.');
          this.ExamGet();
        }else{
          this.showError('Beklenmedik Bir Hata Oluştu.');
        }
  }
    );
  }

  

  showSuccess(messageDetail: string) {
    this.messageService.add({severity:'success', summary: 'Başarılı ', detail:`${messageDetail}`});
  }
  showError(messageDetail: string) {
    this.messageService.add({severity:'error', summary: 'Hata', detail:`${messageDetail}`});
  }
}
