import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarMenu:EventEmitter<any>= new EventEmitter();
  constructor() { }

  ngOnInit(): void {}


  toggleSidbar(){
   this.toggleSidebarMenu.emit();
   
   setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
      );
    },300);
  }

}
