import { Observable } from "rxjs";

export interface IWrite<T>{
    create(data: T): Observable<boolean>;
    update(id:number, data:T): Observable<boolean>
    delete(id:number):Observable<boolean>;
}