import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DatosComponent } from './components/datos/datos.component';
import { TablaComponent } from './components/tabla/tabla.component';

const routes: Routes = [{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent},
{ path: 'datos', component: DatosComponent }, 
{ path: 'tabla', component: TablaComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

