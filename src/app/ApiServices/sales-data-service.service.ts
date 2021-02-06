import { Injectable } from '@angular/core';
import{HttpClient, HttpParams} from '@angular/common/http'
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Order } from '../Shared/Order';


export interface orderData{
 data: Order[],
 meta:{
totalCount:number
 pageSize :number
  currentPage :number
    totalPages :number
}
};

@Injectable({
  providedIn: 'root'
})

export class SalesDataServiceService {
  constructor(private http: HttpClient) { }

GetOrders(currentPage:number,totalperPage:number ):Observable<orderData>{
  
  let params = new HttpParams();
  params = params.append('PageNumber',String(currentPage));
  params = params.append('PageSize',String(totalperPage));

return this.http.get<orderData[]>('http://localhost:1713/api/Order',{params} )
.pipe(map(res => res as any),
catchError(this.handleError))

};
GetOrdersByState():Observable<orderData>{

return this.http.get<orderData[]>('http://localhost:1713/api/Order/ByState')
.pipe(map(res => res as any),
catchError(this.handleError))

};
GetOrdersByCustomer(n:number):Observable<orderData>{

return this.http.get<orderData[]>('http://localhost:1713/api/Order/ByCustomer/ ' + n)
.pipe(map(res => res as any),
catchError(this.handleError))

};

handleError(error: any){
  const errMsg = (error.Message) ? error.Message: error.Status ? `${error.Status} - ${error.StatusText}`: `Server Error`;
  console.log(errMsg);
  return throwError(errMsg);
  
}
}