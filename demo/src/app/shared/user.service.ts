import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  BASE_URL = "http://localhost:8098/crud"

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.BASE_URL+'/all');
  }

  obtenerUsuario(id: string) {
    return this.http.get<UserModel[]>(`${this.BASE_URL}/get/${id}`);
  }

  agregarUsuario(usuario: UserModel) {
    return this.http.post<string>(`${this.BASE_URL}/add`, usuario);
  }

  actualizarUsuario(usuario: UserModel) {
    return this.http.put<string>(`${this.BASE_URL}/update/${usuario.id}`, usuario)
  }


 
  borrarUsuario(id: number) {
  console.log('Llamando al método borrarUsuario en el servicio');

    return this.http.delete(`${this.BASE_URL}/delete/${id}`)
  }
}