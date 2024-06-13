
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../shared/user.model'; 
import { UserService } from '../shared/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-lista-usuarios',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  usuarios: UserModel[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.obtenerUsuarios().subscribe((data: UserModel[]) => {
      this.usuarios = data;
    });
  }

  borrarUsuario(id: number) {
    this.userService.borrarUsuario(id).subscribe(
      (data) => {
        console.log(data);
        alert("Usuario eliminado con éxito");
      },
      (error) => {
        console.error(error);
        alert("Error al eliminar el usuario");
      }
    );
window.location.reload();
  }
}
