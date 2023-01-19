import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  icono:boolean=true;
  constructor(private usuarioService:UsersService, private router:Router) { }

  ngOnInit(): void {
  }
  Menu(){
    this.icono=!this.icono;
  }

  cerrarSesion(){
    this.usuarioService.logout(); //llamamos al método cerrar Sesión
    this.router.navigate(['/']); //redirige al login
  }
}
