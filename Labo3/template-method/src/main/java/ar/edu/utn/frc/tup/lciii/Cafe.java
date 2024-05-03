package ar.edu.utn.frc.tup.lciii;

import java.util.List;

public class Cafe extends Bebida {

    List<Ingredientes> ingredientesExtras;

    @Override
    public void calentarAgua() {
        System.out.println("Calentando agua para el cafe...");

    }

    @Override
    public void agregarIngredientePrincipal() {

        System.out.println("Agregando cafe a la taza");

    }

    @Override
    public void agregarExtras() {

        System.out.println("Agregando azucar al cafe");

    }

    @Override
    public void servir() {
    System.out.println("Sirviendo el cafe en la taza..");
    }

}
