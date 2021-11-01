import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  //generic object with EventEmiiter
  //using  decorator @Output to listenable from outside class
  // Sharing data between child and parent directives and components
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  //since using local reference 
  //we dont need these variables anymore
  // newServerName = '';
  
  newServerContent = '';

  constructor() {}

  ngOnInit(): void {}

  // onAddServer(nameInput){
  //   console.log(nameInput);
  //   console.log(nameInput.value);
  //   this.serverCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   })
  // }  

  // onAddBluePrint(){
  //   this.blueprintCreated.emit({
  //     serverName: this.newServerName,
  //     serverContent: this.newServerContent
  //   })
  // }


  //pass param HTMLInputElement
  onAddServer(nameInput: HTMLInputElement){
    console.log(nameInput);
    console.log(nameInput.value);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    })
  }

   //pass param HTMLInputElement
  onAddBluePrint(nameInput: HTMLInputElement) {
    console.log(nameInput);
    console.log(nameInput.value);
    this.blueprintCreated.emit({      
      serverName: nameInput.value,
      serverContent: this.newServerContent
    })
  }


}
