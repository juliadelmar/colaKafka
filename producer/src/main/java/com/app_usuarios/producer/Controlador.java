package com.app_usuarios.producer;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class Controlador {

    private final Productor productor;

    public Controlador(Productor productor) {
        this.productor = productor;
    }

    @PostMapping("/publicar")
    public void writeMessageToTopic(@RequestParam String mensaje){
        this.productor.escribirMensaje(mensaje);

    }
    @PostMapping("/usuario/add")
    public void addUsuario(@RequestParam String nombre,@RequestParam String apellido,@RequestParam String id){
        this.productor.escribirUsuario(nombre,apellido,id);

    }
   
    
 

}