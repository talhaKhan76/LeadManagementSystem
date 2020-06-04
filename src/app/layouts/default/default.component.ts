import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sidebarOpen:boolean=true;

  constructor() { }

  ngOnInit(): void { }

  sidebarToggle(){
    this.sidebarOpen = !this.sidebarOpen;
  }

}
