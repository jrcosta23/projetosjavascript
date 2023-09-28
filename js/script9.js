/* funções em javascript */

/*
exixtem 2 tipos de funções:
- reservadas pelas linguagem, é necessário apenas chamar a função para que
seja executada
alert()
prompt()
console.log()

- persolizadas
criadas  pelo usuário, é  necessário que sejam construir 
utilizando a estrutura:
function nomeDaFuncao() {

}
e em seguidas chamadas para serem executadas

em cada função há presença dos parenteses ()  que podem esta vazio ou não
os parenteses  recebem um argumento. quando esta argumento é uma variável, dizemos
que ele recebe um parãmetro.

//função personalizada sem argumento, já o comando
// console.log("olá mundo!") possui um  argumento do tipo string

*/

function saudacao(){
console.log("olá mundo!");
}

saudacao();

// função personlizada com PARÃMETRO,  pois se trata de uma variável 
//previamente declarada  e que será utilizada no  bloco de código
var nome;
 function despediada (nome) {
    console.log("tchau, + nome ");

 }

 despediada("joão");

 //função persolizda com PARÃMETRO, pois há duas variáveis nos parenteses 
 // que foram previamente declaradas e que foram utilizadas no bloco código
 
 function soma(a,b){
    return a + b;

 }

 var resultado = soma (5, 3);
     console.log(resultado)

 saudacao();