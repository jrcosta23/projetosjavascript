var altura = 5;

for (var contador = 1; contador <= altura; contador = contador +1) {
    var linha = " ";

    for (var asterisco = 5; asterisco >= contador; asterisco = asterisco -1){
        linha += "*";
        //linha + linha +"*";
    }
    
    //alert(linha);
    console. log(linha); 
}