package com.app_usuarios;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity(name = "usuario")
public class User {

	@Id
	private Long id;
    private String nombre;
    private String apellido;

    public User(){
        

    }

	public void setId(Long id) {
		this.id = id;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public Long getId() {
		
		return id;
	}
	public String getNombre() {
		return nombre;
	}
	public String getApellido() {
		return apellido;
	}
}
