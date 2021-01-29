import { Injectable } from '@angular/core';
//import {Http} from '@angular/http';
import { HttpClient,HttpResponse,HttpHeaders,HttpRequest, } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Server } from '../Shared/Server';
import { map } from 'rxjs/operators';
import { ServerMessage } from '../Shared/ServerMessage';
import { RequestOptions } from 'https';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) {
this.headers = new HttpHeaders({
'Content-Type':'application/json',
'Accept':'q=0.8;application/json;q=0.9'
});
   }

   headers: HttpHeaders;
  GetServers():Observable<Server[]>{

    return this.http.get('http://localhost:1713/api/server' )
  .pipe(map(res => res as any),
  catchError(this.handleError))
 
  
  }

  handleError(error: any){
const errMsg = (error.Message) ? error.Message: error.Status ? `${error.Status} - ${error.StatusText}`: `Server Error`;
console.log(errMsg);
return throwError(errMsg);


  }
  handleServerMessage(msg: ServerMessage): Observable<Response>{
    const url ='http://localhost:1713/api/server/' + msg.id;
    return this.http.put(url,msg).pipe(map(res=> res as any)) 
  }
}
