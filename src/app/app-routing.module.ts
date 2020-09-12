import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ExamComponent } from './Components/exam/exam.component';
import { ExamListComponent } from './Components/exam-list/exam-list.component';
import { ExamEnterComponent } from './Components/exam-enter/exam-enter.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'exam', component: ExamComponent },
  { path: 'examList', component: ExamListComponent },
  { path: 'examList/:examId', component: ExamEnterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
