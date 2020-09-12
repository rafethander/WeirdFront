import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/api';
import { Exam } from 'src/app/Models/Exam';
import { Question } from 'src/app/Models/Question';
import { Topic } from 'src/app/Models/Topic';
import { ExamService } from 'src/app/Services/exam.service';
import { QuestionService } from 'src/app/Services/question.service';

@Component({
  selector: 'app-exam-enter',
  templateUrl: './exam-enter.component.html',
  styleUrls: ['./exam-enter.component.css']
})
export class ExamEnterComponent implements OnInit {

  questionsList: Question[]=[];
  topic={} as Topic;
  types: SelectItem[];

  selectedType: string;

  selectedTypes: string[] = ['Apartment','Studio'];
  
  constructor(private rota: ActivatedRoute,private questionService: QuestionService,private examService: ExamService) {
    this.types = [
      {label: 'Apartment', value: 'Apartment'}
  ];
   }

  ngOnInit(): void {
    this.GetQuestion();
    this.GetTopicWithId();
  }



  GetQuestion(){
    const rota=this.rota.snapshot.paramMap.get('examId');

    this.questionService.QuestionGet(rota).subscribe(sonuc=>{
      this.questionsList=sonuc;
      console.log(this.questionsList);
    })
  }


  GetTopicWithId(){
    const rota=this.rota.snapshot.paramMap.get('examId');

    this.examService.GetWithId(rota).subscribe(sonuc=>{
      this.topic=sonuc;
      
    }
      );
  }
}
