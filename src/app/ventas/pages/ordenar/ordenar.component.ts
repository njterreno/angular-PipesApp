import { Component} from '@angular/core';
import { Heroe, Color } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent{

estado:boolean=true;
ordenarPor:string='';


heroes: Heroe[] = [
  {
    nombre:'Superman',
    vuela:true,
    color:Color.azul
  },
  {
    nombre:'Batman',
    vuela:false,
    color:Color.negro
  },
  {
    nombre:'Robin',
    vuela:false,
    color:Color.verde
  },
  {
    nombre:'Daredevil',
    vuela:false,
    color:Color.rojo
  },
  {
    nombre:'Linterna Verde',
    vuela:true,
    color:Color.verde
  },

]

//enMayusculas
cambiarEstado(){
  this.estado = !this.estado;
}

cambiarOrden(valor:string){
this.ordenarPor = valor;
}

}
