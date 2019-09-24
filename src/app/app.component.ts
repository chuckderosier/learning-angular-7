import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'seven-angular';
  servers = [];   // If not declared an array push will come back undefined
  OnAddServer() {
    this.servers.push('Another Server Added');
  }
  onRemoveServer(id: number) {
    const position = id + 1;
    this.servers.splice(position, 1);
  }
}

