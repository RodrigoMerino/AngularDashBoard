import { Injectable } from '@angular/core';
//import {Http} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Server } from '../Shared/Server';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  GetServers():Observable<Server[]>{

    return this.http.get('http://localhost:1713/api/server')
  .pipe(map(res => res as any),
  catchError(this.handleError))
 
  
  }

  handleError(error: any){
const errMsg = (error.Message) ? error.Message: error.Status ? `${error.Status} - ${error.StatusText}`: `Server Error`;
console.log(errMsg);
return throwError(errMsg);


  }
  
}
