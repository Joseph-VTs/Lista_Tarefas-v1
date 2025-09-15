// Async para arquivos grandes "Assim que terminar a Função devolve, sem travar o sistema"
async function Carregar_Produtos(){
    const
        Resposta = await fetch('/Produtos'),
        Lista = await Resposta.json(),
        Div_Yes_Sell = document.getElementById('Div-Yes-Sell'),
        Div_Not_Sell = document.getElementById('Div-Not-Sell')
    ;

    // Percorre o Array Lista e Joga dentro da variável Produto
    for(let Produto of Lista){
        let New_Paragrafo = document.createElement("p");
        New_Paragrafo.textContent = Produto.Nome;
        
        if(Produto.Produto_Sell == true){
            Div_Yes_Sell.appendChild(New_Paragrafo);
        } else{
            Div_Not_Sell.appendChild(New_Paragrafo);
        }
    }
}