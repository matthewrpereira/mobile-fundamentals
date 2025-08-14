import promptSync from 'prompt-sync';
const prompt = promptSync();

while (true) {
  console.log('Digite dois numeros:');
  const x = Number(prompt(''));
  const y = Number(prompt(''));

  if (x === y) {
    break; // encerra quando forem iguais
  }

  if (x < y) {
    console.log('CRESCENTE!');
  } else {
    console.log('DECRESCENTE!');
  }
}
