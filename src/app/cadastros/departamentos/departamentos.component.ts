import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../departamentos.service';
import { Departamento } from './departamento';
import { AplicaCss } from 'src/app/utils/aplicaCss.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})



export class DepartamentosComponent implements OnInit {
  formulario: FormGroup;
  
  constructor(
    private departamentoService : DepartamentoService,
    public _aplicaCss: AplicaCss,
    private formBuilder: FormBuilder
    ) { 

    }

  public departamentos : Departamento[];
  _departamentoSelecionado: Departamento;

  ngOnInit(): void {
    this.departamentoService.obterDepartamentos()
      .subscribe(
        departamentos => {
          this.departamentos = departamentos;
          // console.log(departamentos);
        },
        error => console.log(error)
      );

       this.formulario = new FormGroup({
         id: new FormControl(),
         nome: new FormControl(),
       })

      this.formulario = this.formBuilder.group({
        id: [''],
        nome: [''],
        codCentroCusto: [''],
        nomeCentroCusto: [''],
      });
  }

  onSelecionarDepartamento(departamentos, depto){
    departamentos.map(d => {
      if( d.id === depto.id) {
        d.active = !d.active;
      } else {
        d.active = false;
      }
      return d;
    });
    this._departamentoSelecionado = departamentos.find( d => d.id === depto.id && d.active );
    // console.log(this._departamentoSelecionado);
    this.formulario.get('id').setValue(this._departamentoSelecionado.id);
    this.formulario.get('nome').setValue(this._departamentoSelecionado.nome);

  }

  onLimparDadosTela(){
    this.formulario.get('id').setValue('');
    this.formulario.get('nome').setValue('');
  }
}
