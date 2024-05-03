package ar.edu.utn.frc.tup.lciii;


/**
 * Singleton Pattern
 */
public class App 
{
    public static void main( String[] args )
    {

        RegistroUsuarios registrar = RegistroUsuarios.getInstance();

        registrar.crearUsuario("Juan");
        registrar.crearUsuario("Agus");
        registrar.crearUsuario("Vale");
        registrar.crearUsuario("Ebaristo");

        RegistroUsuarios otroRegistrar = RegistroUsuarios.getInstance();

        System.out.println("Las instancias son iguales? " + (registrar == otroRegistrar));

    }
}
