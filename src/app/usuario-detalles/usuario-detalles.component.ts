import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-detalles',
  templateUrl: './usuario-detalles.component.html'
})
export class UsuarioDetallesComponent implements OnInit{
  id: number;
  usuario: Usuario;

  constructor(private route: ActivatedRoute,
              private usuarioService: UsuarioService){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.usuario = new Usuario();
    this.usuarioService.obtenerUsuarioId(this.id)
    .subscribe(dato => {
      this.usuario = dato;
      swal(`Detalles del Usuario ${this.usuario.nombre}`);
    });
  }

}
