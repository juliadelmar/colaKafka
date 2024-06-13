import { Component, OnInit } from '@angular/core';
import { Kafka } from "kafkajs";
import { UserModel } from '../shared/user.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsumerEndBatchProcessEvent } from 'kafkajs';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-kafka-example',
  standalone: true,
  imports: [ CommonModule, FormsModule, RouterModule],
  templateUrl: './kafka.component.html',
})
export class KafkaExampleComponent implements OnInit {
  private kafka: Kafka;
  private consumer: any;
  public nombreUser: String;
  public apellidoUser: String;
  public idUser: String;
  public mensajeconsumido: Boolean;
  usuarios: UserModel[] = [];
  
  constructor() {
    this.kafka = new Kafka({
      brokers: ['localhost:9092'],
    });
    this.consumer = this.kafka.consumer({
      groupId: '2',
      
    });
  

    this.nombreUser= '';
    this.apellidoUser= '';
    this.idUser=''
    this.mensajeconsumido= false;
  }

  ngOnInit(): void {

      this.consumeMessage('insertarUsuario'); 

  }
  

  consumeMessage(topic: string) {
    this.consumer.subscribe({topic,fromBeginning: true });

    
    const { END_BATCH_PROCESS } = this.consumer.events;
    const rmov = this.consumer.on(END_BATCH_PROCESS, (e: { timestamp: number }) => {
      this.consumer.disconnect()
    })
      this.consumer.run({
      eachMessage: async ({ message }: { message: { value: Buffer } }) => {  
        console.log("1")
      
        await this.processMessage(message);
        console.log("2")
        await this.consumer.commitOffsets([
          { topic: 'insertarUsuario', partition: 0, offset: 1 }
        ]);

      },
    
    });
    console.log("3")
   

  }
  
  
  private async processMessage(message: { value: Buffer }) {
          
    this.mensajeconsumido = true
    const usuario: UserModel = new UserModel();
    const messageValue = message.value.toString('utf8');
    const values = messageValue.split(',');
    const idUser = values[0];
    const nombreUser = values[1];
    const apellidoUser = values[2];
    console.log(`ID: ${idUser}, Nombre: ${nombreUser}, Apellido: ${apellidoUser}`);
    usuario.id = parseInt(idUser),
    usuario.nombre = nombreUser,
    usuario.apellido = apellidoUser,
    this.usuarios.push(usuario)
    

  
  }
  }




