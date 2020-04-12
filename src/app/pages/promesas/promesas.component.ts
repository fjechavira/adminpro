import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.contar3Segundos().then( 
      mensaje => console.log('Ok !', mensaje)
    )
    .catch(
      error => console.log('Ocurrio un error ', error)
    );

   }

  ngOnInit(): void {
  }

  contar3Segundos(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      
      let contador = 0;

      let intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);
        if ( contador === 3) {
          resolve(true);
          clearInterval(intervalo);
        }
      }, 1000 );
    });

  }

}
