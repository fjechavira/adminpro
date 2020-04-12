import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line: import-blacklist
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservable()
    .pipe(
      retry(2)
    )
    .subscribe(
      numero => console.log('Subs', numero),
      error => console.log('Error en el Obs', error),
      () => console.log('El Observador Termino')
    );

   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    console.log('La pagina se va cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      const intervalo = setInterval(
        () => {
          contador ++;

          const salida = {
            valor: contador
          };

          observer.next( salida );

          // if ( contador === 3 ) {
          //   clearInterval( intervalo );
          //   observer.complete();
          // }

          // if ( contador === 2) {
          //   // clearInterval( intervalo );
          //   observer.error('Auxilio, Socoroo !!');
          // }

        }, 1000 );

    }).pipe(
      map( resp => resp.valor),
      filter((valor, index) => {
        if ( (valor % 2) === 1 ) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })
    );
  }

}
