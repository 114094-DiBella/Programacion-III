package ar.edu.utn.frc.tup.lciii;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class RegistroUsuarios {
    private static RegistroUsuarios intanciaUnica = null;
    private static final String ARCHIVO_REGISTRO = "usuarios_registrados.txt";

    private RegistroUsuarios(){

    }
    public static RegistroUsuarios getInstance(){
        if(intanciaUnica == null){
            intanciaUnica = new RegistroUsuarios();
        }
        return intanciaUnica;
    }

    public void crearUsuario(String usuario) {

        try (BufferedWriter writer = new BufferedWriter(new FileWriter(ARCHIVO_REGISTRO, true))) {

            writer.write(usuario);
            writer.newLine();

            System.out.println("Usuario '" + usuario + "' registrado exitosamente.");
        } catch (IOException e) {
            // Manejamos la excepción de escritura
            System.err.println("Error al registrar el usuario: " + e.getMessage());
        }
    }

}
