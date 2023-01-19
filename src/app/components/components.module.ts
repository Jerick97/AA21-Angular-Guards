import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import { BodyHomeComponent } from './body-home/body-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormLoginComponent,
    BodyHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormLoginComponent,
    BodyHomeComponent
  ]
})
export class ComponentsModule { }
