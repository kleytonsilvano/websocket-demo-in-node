//Criando um web api com express js
const express = require("express");
const app = express();
const port = 3000;
const http = require("http");
const webSocket = require("ws");
const funcoes = require("./functions/funcoes");

//Inicializa um servidor HTTP orquestrado pelo express
const server = http.createServer(app);

//Inicializa uma instancia de servidor websocket a partir do servidor http
const wss = new webSocket.Server({ server });

//Função responsável por manusear a conexão websocket
wss.on("connection", (ws) => {
    //Função que trata as mensagens recebidas pelo servidor
    ws.on("message", (message) => {
        console.log("Mensagem recebida: ", message)
        const messageSplit = message.split(' ');
        const numero1 = messageSplit[0];
        const operacao = messageSplit[1];
        const numero2 = messageSplit[2];
        var resultado = 0;
        switch(operacao) {
            case '+':
                resultado = funcoes.adicionar(numero1,numero2);
                console.log(resultado);
                break;
            case '-':
                resultado = funcoes.subtrair(numero1,numero2);
                console.log(resultado);
                break;
            case '*':
                resultado = funcoes.multiplicar(numero1,numero2);
                console.log(resultado);
                break;
            case '/':
                resultado = funcoes.dividir(numero1,numero2);
                console.log(resultado);
                break;
            default:
                resultado = "Operação Inválida";
        }

        ws.send(resultado);
    });


    
});

app.use(express.static("./site"));

server.listen(port, () => 
    console.log(`App listening at http://localhost:${port}`)
);