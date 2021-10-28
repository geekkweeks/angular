import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  element:{type: string, name: string, content: string}
  constructor() {}

  ngOnInit(): void {}

  onAddServer(){

  }

  onAddBluePrint(){
    
  }

}
