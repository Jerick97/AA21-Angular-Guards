import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'


@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {
  correcto: boolean = false;
  public formLogin!: FormGroup;
  constructor(private loginService:UsersService, private formBuilder:FormBuilder, private router:Router) { } //inyectamos nuestro servicio

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      user: ['',[
        Validators.required,
        Validators.minLength(8)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(5)
      ]]
    });
  }
  //Solo si el usuario ingreso información en el formulario
  send():any{
    if(this.loginService.Login(this.formLogin.get('user')?.value,this.formLogin.get('password')?.value)){ //le pasamos al método del servicio el usuario y contraseña
      this.router.navigate(['/home']); //solo si el servicio retorna True, redireccionar al Home
      this.correcto = true;
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Usuario y/o Contraseña Incorrectas'
      })
      this.formLogin.reset()
    }
  }

}
