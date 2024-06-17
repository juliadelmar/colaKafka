import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './user.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  CRUD_URL = "http://localhost:8098/crud"
  CONUSMIDOR_URL = 'http://localhost:8081';


  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.CRUD_URL+'/all');
  }

  obtenerUsuario(id: string) {
    return this.http.get<UserModel[]>(`${this.CRUD_URL}/get/${id}`);
  }

  agregarUsuario(usuario: UserModel) {
    return this.http.post<string>(`${this.CRUD_URL}/add`, usuario);
  }

  actualizarUsuario(usuario: UserModel) {
    return this.http.put<string>(`${this.CRUD_URL}/update/${usuario.id}`, usuario)
  }
  getUsuarioCola(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.CONUSMIDOR_URL}/usuarios`)
  }

 
  borrarUsuario(id: number) {
  console.log('Llamando al método borrarUsuario en el servicio');

    return this.http.delete(`${this.CRUD_URL}/delete/${id}`)
  }
}