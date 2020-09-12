import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { ExamComponent } from './Components/exam/exam.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { ExamListComponent } from './Components/exam-list/exam-list.component';
import {TableModule} from 'primeng/table';
import { ExamEnterComponent } from './Components/exam-enter/exam-enter.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {RadioButtonModule} from 'primeng/radiobutton';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExamComponent,
    ExamListComponent,
    ExamEnterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    DropdownModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    SelectButtonModule,
    ScrollPanelModule,
    ToastModule,
    ConfirmDialogModule,
    RadioButtonModule
  ],
  providers: [
    MessageService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
