package ar.edu.utn.frc.tup.lciii;

public abstract class Bebida {

    public final void preparar(){
        calentarAgua();
        agregarIngredientePrincipal();
        agregarExtras();
        servir();
    }
    public abstract void calentarAgua();
    public abstract void agregarIngredientePrincipal();
    public abstract void agregarExtras();

    public abstract void servir();


}
