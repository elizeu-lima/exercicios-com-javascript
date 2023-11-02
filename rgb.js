/*A função rgb está incompleta. Complete-o para que a passagem de valores decimais RGB resulte em uma representação hexadecimal sendo retornada. Os valores decimais válidos para RGB são 0 - 255. Quaisquer valores que caem fora desse intervalo devem ser arredondados para o valor válido mais próximo.

Nota: Sua resposta deve ter sempre 6 caracteres, a abreviatura com 3 não funcionará aqui.

Exemplos (entrada --> saída):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"*/

const randomNumbers = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256)
];

const hexadecimalColor = rgb(randomNumbers[0], randomNumbers[1], randomNumbers[2]);

function rgb(r, g, b) {
    // Garanta que os valores estejam no intervalo de 0 a 255
   r = Math.max(0, Math.min(255, r));
   g = Math.max(0, Math.min(255, g));
   b = Math.max(0, Math.min(255, b));

   // Converte os valores em representação hexadecimal
   return (
       (r < 16 ? '0' : '') + r.toString(16) +
       (g < 16 ? '0' : '') + g.toString(16) +
       (b < 16 ? '0' : '') + b.toString(16)
   ).toUpperCase();
   
}


console.log(hexadecimalColor);