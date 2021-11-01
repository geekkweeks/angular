import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // styles: [`
  //   h3 {
  //     color: dodgerblue;
  //   }
  // `]
})
export class AppComponent {
  showSecret = false;
  logs = [];

  //JS Object
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'for testing only' }
  ];

  onServerAdded(serverData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBluePrintAdded(blueprintData: {serverName: string, serverContent: string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent,
    });
  }

  onToggleDetails() {
    this.showSecret = !this.showSecret;
    // this.logs.push(this.logs.length + 1);
    this.logs.push(new Date());
  }
}
