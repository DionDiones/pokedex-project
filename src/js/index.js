const botaoAlternarTema = document.getElementById("botao-alternar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlternarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    console.log(modoEscuroEstaAtivo);

    body.classList.toggle("modo-escuro") //substitui "add" e "remove"

    if(modoEscuroEstaAtivo){
        //body.classList.remove("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "imagens/sun.png");
    } else {

        //body.classList.add("modo-escuro");
        imagemBotaoTrocaDeTema.setAttribute("src", "imagens/moon.png");
    }
    

    
});