import promptSync from 'prompt-sync';
const prompt = promptSync({ sigint: true });

const n = Number(prompt('Quantos numeros voce vai digitar? '));

const numeros: number[] = [];

for (let i = 0; i < n; i++) {
  const valor = Number(prompt('Digite um numero: '));
  numeros.push(valor);
}

console.log('NUMEROS NEGATIVOS:');
for (const num of numeros) {
  if (num < 0) {
    console.log(num);
  }
}
