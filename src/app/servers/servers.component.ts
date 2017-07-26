import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus="No Servers found";
  serverName='server10';
  serverCreated=false;
  servers=['Server1','Server2'];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit() {
  }
  
  onServerCreate(){
    this.serverCreationStatus="Server "+ this.serverName+" Created Successfully!";
    this.serverCreated=true;
    this.servers.push(this.serverName);
  }
}
