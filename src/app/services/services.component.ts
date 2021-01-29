import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Server } from '../Shared/Server';
import { ServerMessage } from '../Shared/ServerMessage';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }
  color: string;
  buttonText:String;
  isLoading: boolean;
  serverStatus: string;

  @Input() serverInput: Server;
@Output() serverData = new EventEmitter<ServerMessage>();
  ngOnInit() {
    this.setServerStatus(this.serverInput.isOnline);
  }

  setServerStatus(isOnline:boolean){
if(isOnline){
this.serverInput.isOnline = true;
this.serverStatus ='online';
this.color ='#677cf0';
this.buttonText = 'Shut Down'

}else{
  this.serverInput.isOnline = false;
  this.color ='#e8a758';
this.serverStatus ='offline';
  this.buttonText = "Start"
  
}
  }
makeLoading(){
  this.color ="#a31a81";
  this.isLoading = true;
this.buttonText ="pending..."
this.serverStatus ="Loading..."
console.log("working")
}
  
  sendServerAction(isOnline:boolean){
    this.makeLoading();

    //le pasamos el opuesto
const payload = this.buildPayload(isOnline);
this.serverData.emit(payload)

//this.setServerStatus(!isOnline);

console.log("sending serve action",payload)

  }
  buildPayload(isOnline:boolean): ServerMessage{

    if (isOnline) {
      return {
        id: this.serverInput.serverId,
        payLoad:'deactivated'
      };
    } else {
      return{
      id: this.serverInput.serverId,
      payLoad:'activated'
      };
    }
  }
}
