import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarUsuariosComponent } from './listar-usuarios/listar-usuarios.component';
import { InsertarUsuarioComponent } from './insertar-usuarios/insertar-usuarios.component';
import { ActualizarUsuarioComponent } from './actualizar-usuarios/actualizar-usuarios.component';
import { UsuariosRecientesComponent } from './usuarios-recientes/usuarios-recientes.component';

const routes: Routes = [
  { path: 'all', component: ListarUsuariosComponent },
  { path: 'add', component: InsertarUsuarioComponent },
  { path: 'update/:id', component: ActualizarUsuarioComponent },
  { path: 'get', component: UsuariosRecientesComponent },
  { path: '', redirectTo: '/all', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
