import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service'; 
import { Route, Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { UserModel } from '../shared/user.model';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [FormsModule,RouterModule
  ],
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

  id = ''
  usuario = new UserModel();

  constructor(
    private usuarioService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    if(this.id) {
      console.log("EDITAR");
      this.usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.usuario = data[0]
      }, error => {
        console.log(error);
      })
    } else {
      console.log("CREAR");
    }
  }

  onSubmit() {
    console.log('onSubmit');

    
      console.log('crear');
      this.usuarioService.agregarUsuario(this.usuario).subscribe(data => {
        alert(data)
      })
    
  }
}