import { Pipe,PipeTransform } from "@angular/core";
import { pipe } from "rxjs";
import { Order } from "./Shared/Order";

@Pipe({
    name:'ObjToArray'
})

 export class ObjToArrayPipe implements PipeTransform{
transform(object:Order):any{
    return Object.values(object);
}
    
 }