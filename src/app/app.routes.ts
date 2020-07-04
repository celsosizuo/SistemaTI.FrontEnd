import { Routes } from '@angular/router';
import { DepartamentosComponent } from './cadastros/departamentos/departamentos.component';

export const rootRouterConfig: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'departamentos', component: DepartamentosComponent},
];
