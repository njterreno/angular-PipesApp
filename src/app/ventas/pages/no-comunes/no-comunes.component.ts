import { Component} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent{

  // i18nSelect
    nombre : string = "Susana";
    genero : string = "femenino";

    invitacionMap = {
      'masculino': 'invitarlo',
      'femenino': 'invitarla'
    }

    // i18nPlural
    clientes: string[] = ['Maria','Juan', 'Liliana', 'Eduardo'];
    clientesMap = {
      '=0':'no tenemos ningún cliente esperando.',
      '=1':'tenemos un cliente esperando.',
      'other': 'tenemos # clientes esperando.'
    }

    cambiarPersona(){
      if (this.nombre === "Susana") {
        this.nombre = "Fernando"
        this.genero = "masculino"
      } else {
        this.nombre = "Susana"
        this.genero = "femenino"
      }
    }

    borrarCliente(){
      if(this.clientes.length !== 0){
        this.clientes.pop();
      }else{
        this.clientes = ['Maria','Juan', 'Liliana', 'Eduardo'];
      }
    }

    //Key Value Pipe
    persona={
      nombre:"Natanael",
      edad:28,
      direccion:"calle Salta, Villa María"
    }

    //Json Pipe
    heroes=[
      {
        nombre: 'Superman',
        vuela:true
      },
      {
        nombre: 'Robin',
        vuela:false
      },
      {
        nombre: 'Aquaman',
        vuela:false
      }
    ]

    //Async Pipe
    miObservable = interval(2000);

    valorPromesa = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve('Tenemos data de promesa');
      }, 3500);
    })

}
