import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html'
})
export class RegistrarUsuarioComponent implements OnInit{

  usuario: Usuario = new Usuario();
  constructor(private usuarioService: UsuarioService,
              private router: Router){}

  ngOnInit(): void{
    console.log(this.usuario);
  }

  guardarUsuario(){
    this.usuarioService.registrarUsuario(this.usuario)
    .subscribe(dato=>{
      console.log(dato);
      this.listaUsuarios();
    }, error => console.log(error));
    if(this.usuario.cedula){
      swal('Usuario en sistema', 'El usuario ya se encuentra registrado', 'error');
      this.listaUsuarios();
    }
    
  }

  listaUsuarios(){
    this.router.navigate(['/usuarios']);
  }

  onSubmit(){
    this.guardarUsuario(); 
  }

}
