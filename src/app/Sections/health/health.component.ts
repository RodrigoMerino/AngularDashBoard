import { SafeMethodCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{Server} from  '../../Shared/Server';
import{ServicesService} from '../../ServerService/services.service'
import{ Subscription,timer} from 'rxjs/';
import{Observable} from 'rxjs';
import { ServerMessage } from 'src/app/Shared/ServerMessage';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private _serverServices: ServicesService) {}
servers: Server[];
 timerSubscription: Subscription;

ngOnInit(): void {
  //me estoy suscribiendo al observable para poder llamarlo
  this.refresData();
  }
  ngOnDestroy(){
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }
refresData(){
  this._serverServices.GetServers().subscribe(res => {this.servers = res});

  this.subscribeToData();
}
subscribeToData(){
  const time = timer(5000);
  this.timerSubscription = time.subscribe(() => this.refresData());
}
sendMessage(msg: ServerMessage){
this._serverServices.handleServerMessage(msg).subscribe(res => console.log(res),err => console.log(err))

}
}
