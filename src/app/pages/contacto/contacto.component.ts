import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { onExit } from 'src/app/Guard/contact-guard.guard'; //importamos el método de nuestro guardian
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  correcto : boolean = false;
  public formContact!:FormGroup;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.formContact = this.formBuilder.group({
      name: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
      ]],
      message: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(300)
      ]],
    });
  }

  send(): any{
    Swal.fire(
      'Good job!',
      'Se envió el Mensaje Correctamente!',
      'success'
    )
    this.formContact.reset();
    this.correcto = true;
  }

  onExit(){
    if(this.formContact.dirty){ //Solo si los campos fueron manipulados
      return Swal.fire({
        title: '¿Estás seguro de que deseas salir?',
        text: 'Perderás los cambios no guardados.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, salir',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.value) {
          return true;
        } else {
          return false;
        }
      });
    } else {
      return true;
    }
  }

}
