function loading(){
    if (document.readyState === "complete") {
        setTimeout(function() {
            document.getElementById('code-loader').style.display = 'none'
            document.getElementById('max').style.display = 'block'
        }, 2000);
        }
}
const frases = [
    { autor: "Sócrates", frase: "Conhece-te a ti mesmo." },
    { autor: "Sócrates", frase: "A vida sem reflexão não vale a pena ser vivida." },
    { autor: "Heráclito", frase: "Nada é permanente, exceto a mudança." },
    { autor: "Aristóteles", frase: "Somos aquilo que fazemos repetidamente. A excelência, portanto, não é um ato, mas um hábito." },
    { autor: "Nelson Mandela", frase: "A educação é a arma mais poderosa que você pode usar para mudar o mundo." },
    { autor: "Jean-Paul Sartre", frase: "O homem é aquilo que ele faz de si mesmo." },
    { autor: "Epicteto", frase: "Não é o que acontece com você, mas como você reage a isso que importa." },
    { autor: "Teofrasto", frase: "O tempo é a coisa mais valiosa que uma pessoa pode gastar." },
    { autor: "Albert Einstein", frase: "A criatividade é a inteligência se divertindo." },
    { autor: "Marcel Proust", frase: "A verdadeira viagem de descoberta não consiste em procurar novas paisagens, mas em ter novos olhos." }
  ];

  // Função para gerar uma frase aleatória
  function gerarFraseAleatoria() {
    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    return frases[indiceAleatorio];
  }

  // Exibindo a frase aleatória na página
  const fraseAleatoria = gerarFraseAleatoria();
  document.getElementById("frase").innerHTML = `"${fraseAleatoria.frase}" - <strong>${fraseAleatoria.autor}</strong>`;