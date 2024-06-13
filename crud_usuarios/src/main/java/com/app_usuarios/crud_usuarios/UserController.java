package com.app_usuarios.crud_usuarios;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;




@Controller
@RequestMapping(path="/crud")
public class UserController {

    @Autowired
    private IUserRepository userRepository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewUser (@RequestBody User user) {
    	User n = new User();
    	n.setNombre(user.getNombre());
    	n.setApellido(user.getApellido());
    	n.setId(user.getId());
    	userRepository.save(n);
    	return "Guardado";
    	
    }
    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers(){
    	return userRepository.findAll();
    }
    @GetMapping(path="/get/{id}")
    public @ResponseBody Optional<User> getAllUser(@PathVariable Long id){
    	return userRepository.findById(id);
    }
    @DeleteMapping(path="/delete/{id}")
    public @ResponseBody String deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
        return "Usuario eliminado";
    }
 
    @PutMapping(path="/update/{id}")
    public @ResponseBody String updateUser(@PathVariable Long id, @RequestBody User user) {
        User n = userRepository.findById(id).orElseThrow();
        n.setNombre(user.getNombre());
    	n.setApellido(user.getApellido());
    	n.setId(user.getId());
    	userRepository.save(n);
        return "Usuario actualizado";
    }

}