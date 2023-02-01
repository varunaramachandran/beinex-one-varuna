import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  toggleKey:boolean = false
  @Output() toggle = new EventEmitter<boolean>();

  toggleClassSide(){
    this.toggleKey=! this.toggleKey
    this.toggle.emit(this.toggleKey)

  }

}
