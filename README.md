# 📱 Mobile Basics with TypeScript

Este repositório contém exercícios introdutórios de programação usando **TypeScript no terminal**, como preparação para o desenvolvimento mobile com **React Native**.  
Os exemplos cobrem estruturas básicas de programação: **sequencial, condicional, repetição, vetores e matrizes**.

---

## 📂 Estrutura de Pastas

```
mobile-dev/
├── mobile-basics-ts/
│   └── src/
│       ├── 01-sequential/   # Exercícios de estrutura sequencial
│       ├── 02-conditional/  # Exercícios com estruturas condicionais
│       ├── 03-loops/        # Exercícios com laços de repetição
│       └── 04-arrays/       # Exercícios com vetores e matrizes
├── node_modules/            # Dependências instaladas pelo npm
├── package.json             # Configurações e scripts do projeto
├── package-lock.json        # Lockfile do npm
└── tsconfig.json            # Configuração do TypeScript
```

---

## 🛠️ Requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm (vem junto com o Node.js)

---

## 📦 Instalação

1. **Clonar o repositório**
```bash
git clone https://github.com/seu-usuario/mobile-dev.git
cd mobile-dev
```

2. **Instalar dependências**
```bash
npm install
```

---

## 📜 package.json explicado

```json
{
  "dependencies": {
    "prompt-sync": "^4.2.0"
  },
  "devDependencies": {
    "@types/node": "^24.2.1",
    "@types/prompt-sync": "^4.2.3",
    "ts-node": "^10.9.2",
    "typescript": "^5.9.2"
  },
  "scripts": {
    "start": "ts-node"
  }
}
```

**Dependências**:
- **prompt-sync** → Biblioteca que permite ler dados digitados no terminal (similar ao `Console.ReadLine()` do C#).

**Dependências de desenvolvimento**:
- **typescript** → Linguagem usada no projeto.
- **ts-node** → Permite executar arquivos `.ts` diretamente no terminal sem precisar compilar antes.
- **@types/node** → Tipos do Node.js para o TypeScript reconhecer funções e objetos nativos do Node.
- **@types/prompt-sync** → Tipos para a biblioteca `prompt-sync`.

**Scripts**:
- `"start": "ts-node"` → Permite rodar qualquer arquivo TypeScript passando o caminho como argumento.  
  Exemplo:
  ```bash
  npm start mobile-basics-ts/src/01-sequential/terreno.ts
  ```

---

## ▶️ Executando os exercícios

Rodar qualquer exercício:
```bash
npm start caminho/do/arquivo.ts
```

Exemplo:
```bash
npm start mobile-basics-ts/src/01-sequential/terreno.ts
```

---

## 📝 Observações

- Todos os exercícios utilizam entrada de dados via terminal usando a biblioteca [`prompt-sync`](https://www.npmjs.com/package/prompt-sync).
- Os arquivos são independentes — você pode rodar qualquer um sem seguir uma ordem fixa.
- Caso queira executar sem `npm start`, instale o `ts-node` globalmente:
```bash
npm install -g ts-node typescript
ts-node caminho/do/arquivo.ts
```

---

## 📚 Próximos Passos

Após concluir esta etapa, passaremos para a implementação prática no **React Native**, aplicando os conceitos aprendidos aqui no desenvolvimento mobile real.
