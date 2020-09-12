import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from 'src/app/Services/login.service';
import { Login } from 'src/app/Models/Login';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginServiceService,private messageService: MessageService,private rota: ActivatedRoute) { }

  ngOnInit(): void {
  }

  Login(kullaniciAdi: string,sifre: string){

    let username=kullaniciAdi;
    let password=sifre;
    this.loginService.Login({username,password} as Login).subscribe(sonuc=>{
      if(sonuc.message=='Ok'){
        this.showSuccess('Hoşgeldiniz.');
        window.location.href='http://localhost:4200/exam';
      }
      else{
        this.showError('Beklenmedik Bir Hata Oluştu');
      }
    })
  }





  showSuccess(messageDetail: string) {
    this.messageService.add({severity:'success', summary: 'Başarılı ', detail:`${messageDetail}`});
  }
  showError(messageDetail: string) {
    this.messageService.add({severity:'error', summary: 'Hata', detail:`${messageDetail}`});
  }
}
