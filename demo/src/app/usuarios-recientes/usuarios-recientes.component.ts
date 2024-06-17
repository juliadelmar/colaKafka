import { Component } from '@angular/core';
import { UserModel } from '../shared/user.model';
import { OnInit } from '@angular/core';
import { Router } from 'express';
import { UserService } from '../shared/user.service';
@Component({
  selector: 'app-usuarios-recientes',
  templateUrl: './usuarios-recientes.component.html',
  styleUrl: './usuarios-recientes.component.css'
})
export class UsuariosRecientesComponent implements OnInit {
  usuarios: UserModel[] = [];

  constructor(private usuarioService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.getUsuarioCola().subscribe(data => {
      this.usuarios = data;
    });
  }
 
}