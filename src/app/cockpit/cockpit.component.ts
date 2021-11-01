import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

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
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  //since using local reference 
  //we dont need these variables anymore
  // newServerName = '';  
  // newServerContent = '';

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


  // //pass param HTMLInputElement
  // onAddServer(nameInput: HTMLInputElement){
  //   console.log(this.serverContentInput);
  //   // console.log(nameInput);
  //   // console.log(nameInput.value);
  //   // this.serverCreated.emit({
  //   //   serverName: nameInput.value,
  //   //   serverContent: this.newServerContent
  //   // })
  // }

  //  //pass param HTMLInputElement
  // onAddBluePrint(nameInput: HTMLInputElement) {
  //   // console.log(nameInput);
  //   // console.log(nameInput.value);
  //   // this.blueprintCreated.emit({      
  //   //   serverName: nameInput.value,
  //   //   serverContent: this.newServerContent
  //   // })
  // }

  //getting access to the template & DOM using @ViewChild
  onAddServer(nameInput: HTMLInputElement){
    console.log(this.serverContentInput);
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }

  //getting access to the template & DOM using @ViewChild
  onAddBluePrint(nameInput: HTMLInputElement) {
    console.log(this.serverContentInput);
    this.blueprintCreated.emit({      
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    })
  }


}
