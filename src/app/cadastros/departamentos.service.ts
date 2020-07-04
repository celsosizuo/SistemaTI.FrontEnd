import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departamento } from './departamentos/departamento';
import { Observable } from 'rxjs';

@Injectable()

export class DepartamentoService{
    protected UrlService1: string = "http://localhost:59199/api/"

    constructor(private http: HttpClient){ }

    obterDepartamentos() : Observable<Departamento[]> {
        return this.http.get<Departamento[]>(this.UrlService1 + "Departamento");
    }
}