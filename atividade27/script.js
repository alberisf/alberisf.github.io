function raizQuadrada(valor) 
{
    const raiz = Math.sqrt(valor);
    return raiz;
}

const raiz = raizQuadrada(36);

raizElement = document.querySelector('#raiz');
raizElement.innerText = raiz;

function escreveNumeros() 
{
    var qtd = prompt("Digite um número");
    const div = document.querySelector('#numeros');
    
    for (let i=1; i<=qtd; i++) {
        div.innerHTML += ' ' + i;
    }
}

escreveNumeros();