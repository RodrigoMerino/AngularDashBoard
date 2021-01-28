import { SafeMethodCall } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import{Server} from  '../../Shared/Server';
import{ServicesService} from '../../ServerService/services.service'

const  DUMMY_SERVERS =[
{ServerId:1,Name:'naa',IsOnline:true},
{ServerId:2,Name:'naa',IsOnline:false},
{ServerId:3,Name:'naa',IsOnline:true},
{ServerId:5,Name:'naa',IsOnline:true}

]
@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private _serverServices: ServicesService) {}
servers: Server[]= DUMMY_SERVERS;
  ngOnInit(): void {
    this._serverServices.GetServers().subscribe(res => {console.log(res)});
  }

}
