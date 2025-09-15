// Permanecerá até o final do Projeto | Não mudará\variar
const 
    Express = require('express'),
    Path = require('path'),

    // Estância do Express
    App_Express = Express(),

    // Portas Default 80 ou 8080
    Porta = 3001,

    // Banco de Dados -> DB_Produtos_v1
    My_SQL = require('mysql2')
;

// Para poder Acessar "Servir" de forma Statica, arquivos da Pasta Public
App_Express.use(Express.static(Path.join(__dirname, 'Public')));
App_Express.use(Express.json());

// Rotas e Caminhos
App_Express.get('/', (req, res) =>{
    res.sendFile(Path.join(__dirname, 'Public', 'index.html'));
});



// Código do Projeto Começa Aqui
// const
//     Tabela_Teste = Banco_Dados.query('SELECT TABLE Produtos')
// ;

const Banco_Dados = My_SQL.createConnection({
    // Conjunto de Valores | Atributos para a configurar a coneção
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_produtos_v1'
});

Banco_Dados.connect(err => {
    if(err) throw err;
    console.log("Conectado ao Banco de Dados ✅");
});

// Rotas
App_Express.get('/Produtos', (req, res) =>{
    //Devolve o que têm dentro da Tabela "Produtos"
    Banco_Dados.query(
        'SELECT * FROM produtos', (Erro_DB, Table_Produtos) => { // Consulta no Banco de Dados
        if(Erro_DB) throw Erro_DB;
        res.json(Table_Produtos);
    }); 
});

App_Express.post('/Adicionar', (req, res) =>{ //Botão Adicionar do Formulário
    let Nome_Produto = req.body.Limpar_Input_Produto;
    Banco_Dados.query(
        'INSERT INTO produtos (Nome, Produto_Sell) VALUES (?, false)', /*? = Baind*/[Nome_Produto], Erro_DB => {
        if(Erro_DB) throw Erro_DB;
        res.json("Ok ✅, Conecção com a Tabela Produtos!");
    });
});

App_Express.post('/Editar', (req, res) => {
    const
        Nome_Antigo = req.body.Nome_Antigo,
        Nome_Novo = req.body.Nome_Novo
    ;

    Banco_Dados.query(
        'UPDATE produtos SET Nome = ? WHERE Nome = ?',
        [Nome_Novo, Nome_Antigo], Erro_DB =>{
            if(Erro_DB) throw Erro_DB;
            res.sendStatus(200);
        });
});

App_Express.post('/Mudar_Status', (req, res) => {
    const
        Nome_Produto = req.body.Nome_Produto
    ;

    Banco_Dados.query(
        'UPDATE produtos SET Produto_Sell = Not Produto_Sell WHERE Nome = ?',
        [Nome_Produto], Erro_DB =>{
            if(Erro_DB) throw Erro_DB;
            res.sendStatus(200);
        });
});

App_Express.post('/Excluir', (req, res) =>{
    const
        Nome_Produto = req.body.Nome_Produto
    ;

    Banco_Dados.query(
        'DELETE FROM produtos WHERE Nome = ?',
        [Nome_Produto], Erro_DB =>{
            if(Erro_DB) throw Erro_DB;
            res.sendStatus(200);
        });
});

// Código do Projeto Termina Aqui



// Escuta a Porta!
App_Express.listen(
    Porta, () =>{
        console.log("Servidor Conectado ✅" + "\nLink: http://127.0.0.1:3001/");
    }
);