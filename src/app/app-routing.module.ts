import { RegistroScreenComponent } from './screens/registro-screen/registro-screen.component';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { JuegoTerminadoScreensComponent } from './screens/juego-terminado-screens/juego-terminado-screens.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { JuegoScreenComponent } from './screens/juego-screen/juego-screen.component';
import { JuegoDosScreenComponent } from './screens/juego-dos-screen/juego-dos-screen.component';
import { TerminosCondicionesScreenComponent } from './screens/terminos-condiciones-screen/terminos-condiciones-screen.component';
import { AvisoDePrivacidadScreenComponent } from './screens/aviso-de-privacidad-screen/aviso-de-privacidad-screen.component';
import { PerfilScreenComponent } from './screens/perfil-screen/perfil-screen.component';
const routes: Routes = [
  { path: '', component: LoginScreenComponent, pathMatch: 'full'},
  { path: 'registro', component: RegistroScreenComponent, pathMatch: 'full'},
  { path: 'home', component: HomeScreenComponent, pathMatch: 'full'},
  { path: 'juego-terminado', component: JuegoTerminadoScreensComponent, pathMatch: 'full'},
  { path: 'bases-promocion', component: BasesPromocionScreenComponent, pathMatch: 'full'},
  { path: 'instrucciones', component: InstruccionesScreenComponent, pathMatch: 'full'},
  { path: 'juego', component:  JuegoScreenComponent, pathMatch: 'full'},
  { path: 'juego-dos', component:  JuegoDosScreenComponent, pathMatch: 'full'},
  { path: 'terminos-y-condiciones', component:  TerminosCondicionesScreenComponent, pathMatch: 'full'},
  { path: 'aviso-de-privacidad', component:  AvisoDePrivacidadScreenComponent, pathMatch: 'full'},
  { path: 'perfil', component:  PerfilScreenComponent, pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
