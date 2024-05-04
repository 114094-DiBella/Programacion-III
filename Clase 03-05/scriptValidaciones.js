function validateForm(){
    console.log("Validando formulario...");
    const denominacion = document.forms['formLoginEquipos']['Denominacion'].value.trim();
    const password = document.forms['formLoginEquipos']['Password'].value.trim();
    if(denominacion == "")
    {
      alert("La denominacion del club es necesaria!");
      return false; 
    }
    if(password.length < 8)
    {
     alert("La contraseña debe tener al menos 8 caracteres");
     return false;   
    }
    return true;
} 