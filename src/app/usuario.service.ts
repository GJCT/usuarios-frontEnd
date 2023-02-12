import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private baseUrl = "http://localhost:8080/api/v1/usuarios";

  constructor(private httpClient: HttpClient) { }


  obtenerListaUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get<Usuario[]>(`${this.baseUrl}`);
  }
  
  registrarUsuario(usuario: Usuario): Observable<object>{
    return this.httpClient.post(`${this.baseUrl}`, usuario);
  }

  actualizarUsuario(id: number, usuario: Usuario): Observable<Usuario>{
    return this.httpClient.put<Usuario>(`${this.baseUrl}/${id}`, usuario);
  }

  obtenerUsuarioId(id: number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.baseUrl}/${id}`);
  }

  eliminarUsuario(id: number): Observable<Usuario>{
    return this.httpClient.delete<Usuario>(`${this.baseUrl}/${id}`);
  }
}
