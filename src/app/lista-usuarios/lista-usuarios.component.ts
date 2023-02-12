import { Component } from '@angular/core';
import { OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html'
})
export class ListaUsuariosComponent implements OnInit{
  
  usuarios: Usuario[];

  constructor(private usuarioService: UsuarioService,
              private router: Router){

  }
  ngOnInit(): void {
    this.obtenerUsuario();
  }

  actualizarUsuario(id: number){
    this.router.navigate(['actualizar-usuario', id]);
  }

  eliminarUsuario(id: number){
    // this.usuarioService.eliminarUsuario(id)
    // .subscribe(dato => {
    //   console.log(dato);
    //   this.obtenerUsuario();
    // });
    swal({
      title: '¿Seguro de eliminar este usuario?',
      text: "Confirmar si deseas eliminar este usuario",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.usuarioService.eliminarUsuario(id).subscribe(
          dato => {
            this.obtenerUsuario();
            console.log(dato);
            swal('Usuario eliminado', 'El usuario ha sido eliminado exitosamente', 'success');
          });
      }
    })
  }

  verUsuario(id: number){
    this.router.navigate(['usuario-detalles', id]);
  }

  private obtenerUsuario(){
    this.usuarioService.obtenerListaUsuarios()
    .subscribe(dato => {
      this.usuarios = dato;
    })
  }
}
