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


function isPangram(str){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let lowerCaseStr = str.toLowerCase().replace(/[^a-z]/g, "");

    for (let char of alphabet){
        if(!lowerCaseStr.includes(char)){
            return false;
        }
    }

    return true;
}

//algoritimo que retorna se na farse tem todas as letras do alfabeto
function isPangram(string){
    //...
      let alphabet = "abcdefghijklmnopqrstuvwxyz";
      let lowerCaseStr = string.toLowerCase().replace(/[^a-z]/g, "");
  
      for (let char of alphabet){
          if(!lowerCaseStr.includes(char)){
              return false;
          }
      }
  
      return true;
  }

  //Bem-vindo.

//Neste kata você é obrigado a, dada uma string, substituir cada letra com a sua posição no alfabeto.

//Se alguma coisa no texto não for uma letra, ignore-a e não a devolva.

//"a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
    let charCode = text.toUpperCase().charCodeAt(i);
    if (charCode > 64 && charCode < 91) {
      result += (charCode - 64) + " ";
    }
  }
  // Remover o último espaço em branco
  return result.trim();
  
}

