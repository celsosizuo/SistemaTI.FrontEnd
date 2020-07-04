import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../departamentos.service';
import { Departamento } from './departamento';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})



export class DepartamentosComponent implements OnInit {

  constructor(private departamentoService : DepartamentoService) { }

  public departamentos : Departamento[];

  ngOnInit(): void {
    this.departamentoService.obterDepartamentos()
      .subscribe(
        departamentos => {
          this.departamentos = departamentos;
          console.log(departamentos);
        },
        error => console.log(error)
      );
  }
}
