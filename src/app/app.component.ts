import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beinex';
  initial:boolean =false


  toggleClass(event:boolean){
    this.initial=event

  }


}
