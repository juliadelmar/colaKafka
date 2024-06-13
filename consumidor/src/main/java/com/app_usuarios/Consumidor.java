package com.app_usuarios;
import java.util.ArrayList;
import java.util.List;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class Consumidor {

    UserRepository userRepository;
    private List<User> usuarios  = new ArrayList<>();
    public Consumidor(UserRepository userRepository){
        this.userRepository = userRepository;
    }

   

    @KafkaListener(topics="insertarUsuario", groupId="1")
    public void getClientes(String message) throws JsonProcessingException{
        System.out.println("Cliente: " + message);
       convertirUsuario(message);
       
     }
    private void convertirUsuario(String message) throws JsonProcessingException {
        String[] data = message.split(",");
        User user = new User();
        String id = data[0];
        user.setId(Long.parseLong(id));
        user.setNombre(data[1]);
        user.setApellido(data[2]);
        usuarios.add(user);
        userRepository.save(user);
    	System.out.println("Ha sido insertado correctamente ");
      }
    @KafkaListener(topics="topico2", groupId="1")
    public void borrarCliente(String message) throws JsonProcessingException{
    	borrarUsuario(message);
    }

    public List<User> getUser() {
        return usuarios;
    }

	private void borrarUsuario(String message) throws JsonProcessingException {
    	ObjectMapper mapper = new ObjectMapper();
		String json = mapper.writeValueAsString(message);
    	Long idUsusario = mapper.readValue(json, Long.class);
		userRepository.deleteById(idUsusario);
	}
	
}
    