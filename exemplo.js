
// INSTANCIA DA CLASSE 'readline' PARA LEITURA DE INPUT DE DADOS NO 'CLI'
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// FUNÇÃO PARA IMPRIMIR UM TEXTO POR 'X' VEZEZ
function imprimir_texto(x_vezez){    
    for(cont = 0;cont < x_vezez; cont++){
        console.log(cont + 'º vez');
    } 

    console.log('TOTAL DE IMPRESSÕES: ' + x_vezez);
}

// INPUT DOS DADOS PELO 'CLI'
readline.question(`Qual o primeiro numero -> `, num1 => {
    readline.question(`Qual o segundo numero ->`, num2 => {
        let res = Number(num1)+Number(num2);
        console.log(`a soma entre ${num1} e ${num2} é = ${res}`);

        imprimir_texto(num1);
    });
});

// PARA TESTE, NÃO FUNCIONOU COM ESSE TIPO DE CHAMADA, E NECESSARIO UM ESTAR DENTRO DO OUTRO
// readline.question(`Qual o segundo numero -> `, num2 => {
//     console.log('NUMERO 02: ' + num2);
// });

// OPERADOR TERNARIO - javascript
// textoConsole = (idadeUsuario >= 65) ? "MAIOR OU IGUAL A 65" : "MENOR QUE 65";
// console.log(textoConsole);

// console.log('textoConsole');