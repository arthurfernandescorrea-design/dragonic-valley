const botoes = document.querySelectorAll("button");

    botoes.forEach(function(button){
        button.addEventListener("click", botaoClicado);
         
        function botaoClicado () {
            console.log("fui clicado");
            let texto = button.querySelector("span");
            texto.textContent++;
    }
    });