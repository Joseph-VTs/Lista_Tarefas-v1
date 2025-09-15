## Pasta Public
Arquivos Básico
- public
    index.html
    style.css
    script.js

{
    Funções =>
    Excluir -> Botão Esquerdo
    Editar -> Um Click Botão Direito
    Marcar e Desmarcar -> Duplo Click Botão Direito
}

server.js -> Será rodado no servidor Node
serve.js recebe chamadas do Cliente "index.html"
NPM ou (Node Package Manager)

Rodar servidor server.js -> node server.js -> ctrl + c = parar de rodar o server.js
Rodar em tempo Real o server.js -> Biblioteca Nodemon -> Instalação de forma global
    - npm install -g nodemon
Acessar no Google -> localhost: Número da Porta
Acessar servidor em outra máquina -> IP da máquina: Número da Porta

Instalar bibliotecas
1°- Começar a Usar o Node JS 
    - npm init -y
2°- Preparando para usar o Express, ele irá gerenciar a comunicação entre o servidor eo cliente
    - npm install express
3°- Trabalhar com o Banco de Dados
    - npm install mysql2 

{
    Banco de Dados{
        Nome: DB_Produtos_v1

        Tabela{
            id int
            Nome Varchar(100)
            Produto_Sell Boolean Default False
        }

    }
}

Fazer Coneções Diferentes 😎