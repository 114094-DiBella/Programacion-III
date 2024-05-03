package ar.edu.utn.frc.tup.lciii;

import java.util.List;

public class Te extends Bebida {

    List<Ingredientes> ingredientesExtras;


    @Override
    public void calentarAgua() {
        System.out.println("Calentando agua para el te...");

    }

    @Override
    public void agregarIngredientePrincipal() {

        System.out.println("Agregando saquito a la taza");

    }

    @Override
    public void agregarExtras() {

        System.out.println("Agregando azucar a la taza");

    }

    @Override
    public void servir() {
    System.out.println("Sirviendo el agua en la taza..");
    }

}
