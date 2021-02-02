import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Order } from '../Shared/Order';
@Injectable({
  providedIn: 'root'
})
export class SalesDataServiceService {

  constructor(private http: HttpClient) { }


GetOrders(PageNumber:number,PageSize:number)/*Observable<Order[]>*/{

return this.http.get('http://localhost:1713/api/Order/' + PageNumber + PageSize)
.pipe(map(res => res as any),
catchError(this.handleError))

};

handleError(error: any){
  const errMsg = (error.Message) ? error.Message: error.Status ? `${error.Status} - ${error.StatusText}`: `Server Error`;
  console.log(errMsg);
  return throwError(errMsg);
  
}
}