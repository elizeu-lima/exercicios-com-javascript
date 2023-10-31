//const ordenar = [4, 2, 9, 1, 5, 8];
//ordenar.sort((a, b) => b - a);
//console.log(ordenar);



//const letters = ['c', 'a', 'd', 'b', 'f', 'e'];
//letters.sort();
//console.log(letters);

// função que retorna a soma dos numeros dentro de uma array
const array = [1, 2, 3, 4, 5, 10, 25, 11];

function somarNumeros(array){
    let soma = 0;
    for(let  i = 0; i < array.length; i++){
        soma += array[i];
    }
    return soma;
}

const recebeSoma = (somarNumeros(array));
console.log(recebeSoma);

//função que faz a ordenação de um array de string

//const letras = ['c', 'a', 'd', 'b', 'f', 'e'];

//function ordenarLetras(letras){
    // letras.sort();
//}

//const arrayOrdenada = ordenarLetras(letras);
//console.log(arrayOrdenada);

const letras = ['c', 'a', 'd', 'b', 'f', 'e'];

const ordenada = letras.sort();

console.log(ordenada);

//função que identifica palindromo

function palindromo(str){
    //tira os espaços e caracteres e torna toda a string minuscula.
    const strLimpa = str.replace(/\ s/g, '').toLowerCase();
    
    //recebe a string modificada anteriormente divide inverte e junta as partes
    const strInvertida = strLimpa.split('').reverse().join('');

    //faz a comparação para saber se é um plindromo.
    return strLimpa === strInvertida;
}

const string1 = "arara";
const string2 = "javascript";
const string3 = "A man, a plan, a canal, Panama";

console.log(palindromo(string1)); 
console.log(palindromo(string2)); 
console.log(palindromo(string3));