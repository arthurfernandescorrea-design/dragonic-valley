
    const button = document. querySelectorAll("button");
    
    button.forEach(function(botao){
        botao.addEventListener("click", buttonClicado);

        function buttonClicado () {
            console.log("fui clicado")
            let texto = button.querySelector("span");
            texto.textContent++;
    }    
    });