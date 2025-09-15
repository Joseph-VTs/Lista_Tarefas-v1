// Async para arquivos grandes "Assim que terminar a Função devolve, sem travar o sistema"
async function Carregar_Produtos(){
    const
        Resposta = await fetch('/Produtos'),
        Lista = await Resposta.json(),
        UL_Yes_Sell = document.getElementById('UL-Yes-Sell'),
        UL_Not_Sell = document.getElementById('UL-Not-Sell')
    ;

    UL_Yes_Sell.innerHTML = '';
    UL_Not_Sell.innerHTML = '';

    // Percorre o Array Lista e Joga dentro da variável Produto
    for(let Produto of Lista){
        let New_Li = document.createElement("li");
        New_Li.textContent = Produto.Nome;
        
        if(Produto.Produto_Sell == true){
            UL_Yes_Sell.appendChild(New_Li);
        } else{
            UL_Not_Sell.appendChild(New_Li);
        }
    }
}

// Detecta a Tecla Enter no Campo de Texto
document.getElementById("Input-Produto").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        btn_Adicionar();
    }
});

async function btn_Adicionar(){
    let 
        Input_Produto = document.getElementById("Input-Produto"),
        Limpar_Input_Produto = Input_Produto.value.trim();
    ;

    if(Limpar_Input_Produto === '') return; //Evitar Envios Vazios

    await fetch('/Adicionar', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify({Limpar_Input_Produto}) // Transforma em Arquivos .json
    });

    Input_Produto.value = ''; // Limpa o Campo após Adicionar
    Carregar_Produtos();
}