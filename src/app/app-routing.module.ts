import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import { RegistrarUsuarioComponent } from './registrar-usuario/registrar-usuario.component';
import { UsuarioDetallesComponent } from './usuario-detalles/usuario-detalles.component';

const routes: Routes = [
  {
    path: 'usuarios',
    component: ListaUsuariosComponent
  },
  {
    path: 'registrar',
    component: RegistrarUsuarioComponent
  },
  {
    path: 'actualizar-usuario/:id',
    component: ActualizarUsuarioComponent
  },
  {
    path: 'usuario-detalles/:id',
    component: UsuarioDetallesComponent
  },
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
