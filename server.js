// Permanecerá até o final do Projeto | Não mudará\variar
const 
    Express = require('express'),
    Path = require('path'),
    App = Express(), // Estância do Express
    Porta = 3001 // Portas Default 80 ou 8080
;

// Para poder Acessar "Servir" de forma Statica, arquivos da Pasta Public
App.use(Express.static(Path.join(__dirname, 'Public')))
App.use(Express.json())

// Rotas e Caminhos
App.get('/', (req, res) =>{
    res.sendFile(Path.join(__dirname, 'Public', 'index.html'));
});



// Código do Projeto Começa Aqui

let Produtos = [
    {Nome: "Banana", Produto_Sell: false},
    {Nome: "Maça", Produto_Sell: true},
    {Nome: "Bergamota", Produto_Sell: false},
    {Nome: "Alface", Produto_Sell: true},
    {Nome: "Uva", Produto_Sell: true}
];

// Rotas
App.get('/Produtos', (req, res) =>{
    //Devolve o que têm dentro de "Produtos"
    res.json(Produtos);
});

App.post('/Adicionar', (req, res) =>{ //Botão Adicionar do Formulário
    let Nome_Produto = req.body.Limpar_Input_Produto;
    Produtos.push({Nome: Nome_Produto, Produto_Sell: false});
    res.json(Produtos);
});

// Código do Projeto Termina Aqui



// Escuta a Porta!
App.listen(
    Porta, () =>{
        console.log("Servidor Conectado ✅");
    }
);