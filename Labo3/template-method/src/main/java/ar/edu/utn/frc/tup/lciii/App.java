package ar.edu.utn.frc.tup.lciii;

/**
 * Template Method Pattern
 */
public class App 
{
    public static void main( String[] args )
    {

        Bebida cafe = new Cafe();
        Bebida te = new Te();
        Bebida chocolateCalliente = new ChocolateCaliente();

        System.out.println("\nPreparando cafe: ");
        cafe.preparar();

        System.out.println("\nPreparando el Te: ");
        te.preparar();

        System.out.println("\nPreparando el chocolota caliente: ");
        chocolateCalliente.preparar();
    }
}
