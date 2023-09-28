/* objetivo: fazer o carregamento da url com filmes 
será usado o coamndo fetch() para localizar 
e carregar os filme e exibir em página  html 
*/

function carregarFilmes() {
    //localize o arquivo 
    fetch("js/apiFilmes.json")
        //receba os dados localizados em json      //guarde os dados na variável dados
        .then((response) => response.json()).then((dados) => {


            //exibe na tela os resultados
            console.log(dados.results);

            var saida = "<div id=filme>"
            dados.results.map((item, i) => {
                saida += `
            <div>
            <a href="${item.link}" target="_blank">

                <img src=https://image.tmdb.org/t/p/w500${item.poster_path}>
                </a>
                <p id=voto>${item.vote_average}</p>
                <h2>${item.title}</h2>
                <p id=data>${item.release_date}</p>
                </div>

                </a>

                `;

            });
            saida += "</div>";
            document.body.innerHTML += saida;
        })
        .catch((erro) => console.log("Erro ao tentar executar a API -> ${erro}"));

}