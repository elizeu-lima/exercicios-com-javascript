/*
    Complete o método/função para que ele converta palavras delimitadas traço/underscore em caixa de camelo. A primeira palavra dentro da saída deve ser capitalizada apenas se a palavra original foi capitalizada (conhecida como Caso do Camelo Superior, também muitas vezes referida como caso Pascal). As próximas palavras devem ser sempre capitalizadas.

Exemplos
"the-stealth-warrior"é convertido para "theStealthWarrior"

"The_Stealth_Warrior"é convertido para "TheStealthWarrior"

"The_Stealth-Warrior"é convertido para "TheStealthWarrior"
*/
const wordsArray = [
    "the-stealth-warrior",
    "The_Stealth_Warrior",
    "The_Stealth-Warrior"
];

function toCamelCase(str){
    // Divide a string em palavras usando hífens ou underscores como delimitadores
       const words = str.split(/-|_/);
   
       // Converte a primeira letra de todas as palavras em minúsculas, exceto a primeira palavra
       const camelCaseWords = words.map((word, index) => {
           if (index === 0) {
               return word;
           } else {
               // Converte a primeira letra de cada palavra, exceto a primeira, para maiúscula
               return word.charAt(0).toUpperCase() + word.slice(1);
           }
       });
   
       // Junta as palavras para formar a string de saída
       const camelCaseStr = camelCaseWords.join('');
   
       return camelCaseStr;
   }



for (const word of wordsArray) {
    console.log(toCamelCase(word));
}
