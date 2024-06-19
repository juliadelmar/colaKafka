import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario} from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private crudUrl = 'http://localhost:8098/crud';
  private consumidorUrl = 'http://localhost:8091';

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.crudUrl}/all`);
  }
  getUsuarioCola(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.consumidorUrl}/get`)
  }
  getUsuario(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.crudUrl}/${id}`);
  }

  crearUsuario(usuario: Usuario): Observable<string> {
    return this.http.post<string>(`${this.crudUrl}/add`, usuario);
  }

  actualizarUsuario(id: number, usuario: Usuario): Observable<string> {
    return this.http.put<string>(`${this.crudUrl}/update/${id}`, usuario);
  }

  borrarUsuario(id: number): Observable<string> {
    return this.http.delete<string>(`${this.crudUrl}/delete/${id}`);
  }
}

