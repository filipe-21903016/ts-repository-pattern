import { Observable } from "rxjs";
import { IRead } from "./IRead";
import { IWrite } from "./IWrite";

export abstract class BaseRepo<T> implements IWrite<T>, IRead<T>{
    abstract create(data: T): Observable<boolean>;
    abstract update(id: number, data: T): Observable<boolean>;
    abstract delete(id: number): Observable<boolean>;
    abstract all(): Observable<T[]>;
    abstract find(id: number): Observable<T>;    
}