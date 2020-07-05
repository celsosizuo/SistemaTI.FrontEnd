import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF} from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { rootRouterConfig } from './app.routes';
import { DepartamentoService } from './cadastros/departamentos.service';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { DepartamentosComponent } from './cadastros/departamentos/departamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    DepartamentosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    [RouterModule.forRoot(rootRouterConfig, { useHash: false})],
  ],
  providers: [
    DepartamentoService,
    {provide: APP_BASE_HREF, useValue: '/'},
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
