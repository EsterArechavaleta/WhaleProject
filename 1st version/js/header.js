
//event on click  botó
//Mostrar class = menu-content


    const botoMenu = document.querySelector(".menu");//boton menu 
    const menuContent = document.querySelector(".menu-content");//boton menu 
    
    botoMenu.addEventListener("click", () => { 
        menuContent.style.display = "flex";
    });//desplegar el menu
    



