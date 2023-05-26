import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { Separador1Component } from './components/separadores/separador1/separador1.component';
import { FaltaPocoComponent } from './falta-poco/falta-poco.component';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Separador2Component } from './components/separadores/separador2/separador2.component';
import { Separador3Component } from './components/separadores/separador3/separador3.component';
import { Separador4Component } from './components/separadores/separador4/separador4.component';
import { Separador5Component } from './components/separadores/separador5/separador5.component';
import { HoraYLugarComponent } from './hora-y-lugar/hora-y-lugar.component';
import { RegalosComponent } from './regalos/regalos.component';
import { ConfirmarComponent } from './confirmar/confirmar.component';
import { Error404Component } from './error404/error404.component';
import { MsjEnviadoComponent } from './components/msj-enviado/msj-enviado.component';
import { Separador6Component } from './components/separadores/separador6/separador6.component';
import { CuentaRegreComponent } from './components/cuenta-regre/cuenta-regre.component';
import { CuentaRegresivaNuevaComponent } from './components/cuenta-regresiva-nueva/cuenta-regresiva-nueva.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarouselComponent,
    Separador1Component,
    FaltaPocoComponent,
    HomeComponent,
    Separador2Component,
    Separador3Component,
    Separador4Component,
    Separador5Component,
    HoraYLugarComponent,
    RegalosComponent,
    ConfirmarComponent,
    Error404Component,
    MsjEnviadoComponent,
    Separador6Component,
    CuentaRegreComponent,
    CuentaRegresivaNuevaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot ([
    {path: '', component:HomeComponent},
    {path: 'falta-poco', component:FaltaPocoComponent},
    {path: 'hora-y-lugar', component:HoraYLugarComponent},
    {path: 'confirmar', component:ConfirmarComponent},
    {path: 'regalos', component:RegalosComponent},
    {path: 'msj-enviado',component:MsjEnviadoComponent},
    {path: 'cuenta-regre',component:CuentaRegreComponent},
    {path: '**',component:Error404Component},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
