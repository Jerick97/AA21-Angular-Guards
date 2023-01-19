import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    ContactoComponent
  ]
})
export class PagesModule { }
