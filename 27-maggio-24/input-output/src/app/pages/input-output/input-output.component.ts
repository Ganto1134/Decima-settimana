import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.scss'
})
export class InputOutputComponent {

  post:{title:string, body:string, active:boolean} = {
    title: 'mi piace',
    body: 'va bene',
    active: true
  }

  stringArray:string[] = [];

  gestisciDato(dato:any) {
    this.stringArray.push(dato);
  }
}
