import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent {
//   title = 'seven-angular';
//   servers = [];   // If not declared an array push will come back undefined
//   OnAddServer() {
//     this.servers.push('Another Server Added');
//   }
//   onRemoveServer(id: number) {
//     const position = id + 1;
//     this.servers.splice(position, 1);
//   }
// }
@Component({
  selector: 'app-sever-2',
  templateUrl: './server2/server2.component.html',
  styleUrls: ['./server2/server2.component.css']
})
export class Server2Component {
  allowNewServer = false;
  serverCreationStatus = 'No server is created';
  serverName = 'TestServer';
  serverCreated = false;
  /*constructor() {
    setTimeout (() => {
      this.allwNewServer = true;
    }, 5000);
  }*/
  ngOnInit () {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server is created. Name: ' + this.serverName;
  }
  OnUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}