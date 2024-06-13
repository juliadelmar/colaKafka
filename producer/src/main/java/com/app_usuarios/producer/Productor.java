package com.app_usuarios.producer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;

@Service
public class Productor {

    private static final String TOPIC= "texto";
    private static final String TOPIC1= "insertarUsuario";
   
    @Autowired
    private KafkaTemplate<String, String> kafkaTemplate;
   
    
    public void escribirMensaje(String mensaje){

        this.kafkaTemplate.send(TOPIC, mensaje);
    }

	public void escribirUsuario(String nombre,String apellido, String id) {
		String datosUsuario =   id + "," + nombre + "," + apellido ;
		
		this.kafkaTemplate.send(TOPIC1,datosUsuario);
	}


	

}