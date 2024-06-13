package com.app_usuarios;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    UserRepository userRepository;
   
    

    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @GetMapping("/test")
    public void test(){
        System.out.println(userRepository.findAll());
    }
    @GetMapping(path="/e")
    public @ResponseBody Iterable<User> getAllUsers(){
    	return userRepository.findAll();
    }
    @DeleteMapping(path="/delete/{id}")
    public @ResponseBody String deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return "Usuario eliminado";
    }
}
