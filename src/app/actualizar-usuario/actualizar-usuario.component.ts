import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-actualizar-usuario',
  templateUrl: './actualizar-usuario.component.html'
})
export class ActualizarUsuarioComponent implements OnInit{
  
  id: number;
  usuario: Usuario = new Usuario();
  constructor(private usuarioService: UsuarioService,
              private router: Router,
              private route: ActivatedRoute){}

  ngOnInit(): void{
    console.log(this.usuario);
    this.id = this.route.snapshot.params['id'];
    this.usuarioService.obtenerUsuarioId(this.id)
    .subscribe(dato=>{
      this.usuario = dato;
    }, error => console.error(error));
    
  }

 editarUsuario(){
    this.usuarioService.actualizarUsuario(this.id, this.usuario)
    .subscribe(dato=>{
      console.log(dato);
      this.listaUsuarios();
    }, error => console.log(error));
  }

  listaUsuarios(){
    this.router.navigate(['/usuarios']);
    swal('Usuario Actualizado', `El usuario ${this.usuario.nombre} ha sido actualizado`);
  }

  onSubmit(){
    this.editarUsuario(); 
  }
}
