import promptSync from 'prompt-sync';
const prompt = promptSync();

const width = Number(prompt('Digite a largura do terreno: '));
const length = Number(prompt('Digite o comprimento do terreno: '));
const pricePerSquareMeter = Number(prompt('Digite o valor do metro quadrado: '));

const area = width * length;
const totalPrice = area * pricePerSquareMeter;

console.log(`Area do terreno = ${area.toFixed(2)}`);
console.log(`Preco do terreno = ${totalPrice.toFixed(2)}`);
