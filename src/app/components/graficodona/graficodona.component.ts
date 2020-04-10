import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html'
})
export class GraficodonaComponent implements OnInit {

  @Input() dataGrafica: number[];
  @Input() labelsGrafica: string[];
  @Input() charTypeGrafica: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
