// const valor = "rojo"

function imprimirColor(valor){
    switch(valor){
        case "rojo":
            return("ROJO")
            break
        case "azul":
            console.log("AZUL")
            break
        case "verde":
            console.log("VERDE")
            break
        default:
            console.log("NO HAY COLOR")
    }
}

console.log("Llamo a la funcion", imprimirColor("rojo"))