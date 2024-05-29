import { Component } from '@angular/core';
import { iPost } from '../../Models/i-post';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

  postArr:iPost[] = [
    {
      "id": 1,
      "title": "His mother had always taught him",
      "body": "His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.",
      "userId": 9,
      "tags": ["history", "american", "crime"],
      "active": true
    },
  ]

  cambiaStatus(post:iPost){
    post.active = !post.active
  }
}
