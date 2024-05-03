package ar.edu.utn.frc.tup.lciii;

import java.util.List;

public class ChocolateCaliente extends Bebida {

    List<Ingredientes> ingredientesExtras;


    @Override
    public void calentarAgua() {
        System.out.println("Calentando leche para el chocolate caliente ...");

    }

    @Override
    public void agregarIngredientePrincipal() {

        System.out.println("Agregando chocolate a la taza");

    }

    @Override
    public void agregarExtras() {

        System.out.println("Agregando azucar a la taza");

    }

    @Override
    public void servir() {
    System.out.println("Sirviendo la leche en la taza..");
    }

}
