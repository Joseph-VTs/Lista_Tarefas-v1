// Permanecerá até o final do Projeto | Não mudará\variar
const 
    Express = require('express'),
    Path = require('path'),
    App = Express(), // Estância do Express
    Porta = 3000 // Portas Default 80 ou 8080
;

// Para poder Acessar "Servir" de forma Statica, arquivos da Pasta Public
App.use(Express.static(Path.join(__dirname, 'Public')))

// Rotas e Caminhos
App.get('/', (req, res) =>{
    res.sendFile(Path.join(__dirname, 'Public', 'index.html'));
});



// Código do Projeto Começa Aqui



// Código do Projeto Termina Aqui



// Escuta a Porta!
App.listen(
    Porta, () =>{
        console.log("Servidor Conectado ✅");
    }
);