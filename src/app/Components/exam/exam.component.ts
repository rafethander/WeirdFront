import { Component, ElementRef, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Exam } from 'src/app/Models/Exam';
import { Question } from 'src/app/Models/Question';
import { Topic } from 'src/app/Models/Topic';
import { ExamService } from 'src/app/Services/exam.service';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit {
  topics: Topic[];
  topicHeader: string;
  selectedTopic: string;
  options: Option[]=[{name:"A"},{name:"B"},{name:"C"},{name:"D"}];
 
  
  Question1: Question={} as Question;
  Question2: Question={} as Question;
  Question3: Question={} as Question;
  Question4: Question={} as Question;
  Questions: Question[]=[];
  
  

 valueScrollPanel: string;

  constructor(private examService: ExamService,private messageService: MessageService) { 
    
  }

  ngOnInit(): void {
    this.TopicGet();
  }

  TopicGet(){
    this.examService.TopicGet().subscribe(sonuc=>{
      this.topics=sonuc;
    })
  }


  ContentAdd(event){
    this.valueScrollPanel=event.value.content;
    this.topicHeader=event.value.header;
  }

  
  SinavOlustur(selectedOption1: string,selectedOption2: string,selectedOption3: string,selectedOption4: string,soru1: string,soru2: string,soru3: string,soru4: string,cevap11: string,cevap12: string,cevap13: string,cevap14: string,cevap21: string,cevap22: string,cevap23: string,cevap24: string,cevap31: string,cevap32: string,cevap33: string,cevap34: string,cevap41: string,cevap42: string,cevap43: string,cevap44: string){

  
    this.Question1.questionSentence=soru1;
    this.Question1.correctAnswer=selectedOption1['name'];
    this.Question1.answerA=cevap11;
    this.Question1.answerB=cevap12;
    this.Question1.answerC=cevap13;
    this.Question1.answerD=cevap14;

    
    this.Question2.questionSentence=soru2;
    this.Question2.correctAnswer=selectedOption2['name'];
    this.Question2.answerA=cevap21;
    this.Question2.answerB=cevap22;
    this.Question2.answerC=cevap23;
    this.Question2.answerD=cevap24;

   
    this.Question3.questionSentence=soru3;
    this.Question3.correctAnswer=selectedOption3['name'];
    this.Question3.answerA=cevap31;
    this.Question3.answerB=cevap32;
    this.Question3.answerC=cevap33;
    this.Question3.answerD=cevap34;

    
    this.Question4.questionSentence=soru4;
    this.Question4.correctAnswer=selectedOption4['name'];
    this.Question4.answerA=cevap41;
    this.Question4.answerB=cevap42;
    this.Question4.answerC=cevap43;
    this.Question4.answerD=cevap44;
  
    this.Questions.push(this.Question1,this.Question2,this.Question3,this.Question4);
    
    
    let name=this.topicHeader;
    let questions=this.Questions;
    this.examService.Add({name,questions} as Exam).subscribe(sonuc=>{
      if(sonuc.message=='Ok'){
        this.showSuccess('Sınav Başarıyla Kaydedildi.');
        window.location.href='http://localhost:4200/examList';
      }else{
        this.showError('Beklenmedik Bir Hata Oluştu.');
      }
    });
  
  }




  showSuccess(messageDetail: string) {
    this.messageService.add({severity:'success', summary: 'Başarılı ', detail:`${messageDetail}`});
  }
  showError(messageDetail: string) {
    this.messageService.add({severity:'error', summary: 'Hata', detail:`${messageDetail}`});
  }
}


interface Option {
  name: string
}
