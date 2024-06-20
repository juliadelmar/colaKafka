package com.app_usuarios;
import java.util.ArrayList;
import java.util.List;

import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

@Service
public class Consumidor {

    UserRepository userRepository;
    private List<User> usuarios  = new ArrayList<>();
    public Consumidor(UserRepository userRepository){
        this.userRepository = userRepository;
    }

   

    @KafkaListener(topics="insertarUsuario", groupId="1")
    public void getClientes(String message){
       convertirUsuario(message);
       
     }
    private void convertirUsuario(String message){
        String[] data = message.split(",");
        User user = new User();
        String id = data[0];
        user.setId(Long.parseLong(id));
        user.setNombre(data[1]);
        user.setApellido(data[2]);
        usuarios.add(user);
        userRepository.save(user);
      }

    public List<User> getUser() {
        return usuarios;
    }


}
    
