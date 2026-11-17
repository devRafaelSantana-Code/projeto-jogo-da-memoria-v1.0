# 🧠 Jogo da Memória — O Desafio das Três Stacks

<p align="center">
  <img src="https://img.shields.io/badge/Vers%C3%A3o-1.0-2EA44F?style=for-the-badge" alt="Versão 1.0">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&amp;logo=html5&amp;logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&amp;logo=css3&amp;logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&amp;logo=javascript&amp;logoColor=black" alt="JavaScript">
</p>

<p align="center">
  <a href="#-sobre-o-projeto"><img src="https://img.shields.io/badge/Sobre-263238?style=for-the-badge" alt="Sobre"></a>
  <a href="#-demonstração-visual"><img src="https://img.shields.io/badge/Demonstra%C3%A7%C3%A3o-37474F?style=for-the-badge" alt="Demonstração"></a>
  <a href="#-funcionalidades"><img src="https://img.shields.io/badge/Funcionalidades-263238?style=for-the-badge" alt="Funcionalidades"></a>
  <a href="#-arquitetura-e-tecnologias"><img src="https://img.shields.io/badge/Tecnologias-37474F?style=for-the-badge" alt="Tecnologias"></a>
  <a href="#-roadmap-de-desenvolvimento"><img src="https://img.shields.io/badge/Roadmap-263238?style=for-the-badge" alt="Roadmap"></a>
  <a href="#-estrutura-do-projeto"><img src="https://img.shields.io/badge/Estrutura-37474F?style=for-the-badge" alt="Estrutura"></a>
  <a href="#-como-executar"><img src="https://img.shields.io/badge/Execu%C3%A7%C3%A3o-263238?style=for-the-badge" alt="Execução"></a>
  <a href="#-aprendizados"><img src="https://img.shields.io/badge/Aprendizados-37474F?style=for-the-badge" alt="Aprendizados"></a>
</p>

---

## 📌 Sobre o Projeto

O **Jogo da Memória — O Desafio das Três Stacks** é um projeto desenvolvido com o objetivo de explorar diferentes tecnologias e arquiteturas utilizadas no desenvolvimento front-end, implementando a mesma aplicação em três etapas evolutivas.

A proposta consiste em desenvolver um jogo da memória inicialmente com tecnologias fundamentais da web e, posteriormente, evoluí-lo utilizando bibliotecas e frameworks modernos.

Atualmente, o projeto encontra-se na **versão 1.0**, desenvolvida exclusivamente com HTML5, CSS3 e JavaScript puro (Vanilla JS), sem utilização de frameworks ou bibliotecas externas.

As próximas versões estão planejadas para explorar diferentes abordagens de desenvolvimento, permitindo comparar paradigmas de programação, manipulação do DOM, gerenciamento de estado e organização de componentes.

**Objetivo de engenharia:** Demonstrar a evolução de uma aplicação por meio de diferentes stacks tecnológicas, mantendo a consistência das regras de negócio e explorando novas arquiteturas a cada versão.

---

## 🖼️ Demonstração Visual

Acesse a versão online do projeto:

<p align="center">
  <a href="https://projeto-jogo-da-memoria-v10.vercel.app/">
    <img src="https://img.shields.io/badge/Acessar_Jogo_da_Mem%C3%B3ria-2EA44F?style=for-the-badge&amp;logo=vercel&amp;logoColor=white" alt="Acessar Jogo da Memória — Versão 1.0">
  </a>
</p>

---

## 🎮 Funcionalidades

- Embaralhamento aleatório das cartas.
- Identificação e validação de pares correspondentes.
- Animações tridimensionais para revelar e ocultar cartas.
- Controle de tentativas e interações.
- Bloqueio de cliques simultâneos durante a validação dos pares.
- Identificação dos pares encontrados.
- Verificação de conclusão da partida.
- Interface visual desenvolvida com CSS3.

---

## 🛠️ Arquitetura e Tecnologias

### Versão 1.0 — JavaScript Vanilla

**Tecnologias utilizadas:**

- HTML5
- CSS3
- JavaScript ES6+

**Características técnicas:**

- Manipulação direta do DOM utilizando Web APIs.
- Gerenciamento de estado com objetos JavaScript.
- Implementação do algoritmo Fisher-Yates para embaralhamento das cartas.
- Controle de eventos e interações utilizando JavaScript puro.
- Animações tridimensionais com `transform-style: preserve-3d` e `backface-visibility`.
- Separação entre lógica do jogo e manipulação da interface.

**Destaque técnico:** Desenvolvimento sem dependências externas, explorando os fundamentos da linguagem JavaScript e os recursos nativos do navegador.

---

## 🚀 Roadmap de Desenvolvimento

O projeto foi planejado em três versões independentes, cada uma explorando uma abordagem diferente de desenvolvimento front-end.

### 1.0 — JavaScript Vanilla

<p><img src="https://img.shields.io/badge/Implementada-2EA44F?style=flat-square" alt="Implementada"></p>

**Stack:** HTML5 + CSS3 + JavaScript ES6+

- Estrutura semântica com HTML5.
- Estilização e animações com CSS3.
- Manipulação direta do DOM.
- Lógica de funcionamento desenvolvida com JavaScript puro.
- Gerenciamento de eventos e estado sem bibliotecas externas.

### 2.0 — jQuery + Bootstrap 5

<p><img src="https://img.shields.io/badge/Implementada-2EA44F?style=flat-square" alt="Implementada"></p>

**Stack:** HTML5 + CSS3 + jQuery + Bootstrap 5

- Manipulação do DOM utilizando jQuery.
- Gerenciamento de eventos com métodos da biblioteca.
- Construção de interfaces responsivas com Bootstrap 5.
- Utilização de componentes e classes utilitárias do framework.
- Integração entre bibliotecas e JavaScript.
- Reorganização da implementação para utilização das novas tecnologias.

### 3.0 — React + Vite + Tailwind CSS

<p><img src="https://img.shields.io/badge/Planejada-FFA726?style=flat-square" alt="Planejada"></p>

**Stack:** React + Vite + Tailwind CSS

Evolução planejada:

- Arquitetura baseada em componentes reutilizáveis.
- Gerenciamento de estado com React Hooks.
- Controle de efeitos colaterais com `useEffect`.
- Renderização declarativa da interface.
- Estilização responsiva com Tailwind CSS.
- Ambiente de desenvolvimento e build com Vite.

---

## 📊 Comparativo das Arquiteturas

| Critério                    | Versão 1.0       | Versão 2.0                | Versão 3.0             |
| :-------------------------- | :--------------- | :------------------------ | :--------------------- |
| **Tecnologias**             | HTML, CSS e JS   | jQuery e Bootstrap        | React, Vite e Tailwind |
| **Paradigma**               | Imperativo       | Imperativo com abstrações | Declarativo            |
| **Manipulação do DOM**      | Web APIs         | jQuery                    | React                  |
| **Gerenciamento de estado** | JavaScript puro  | JavaScript e jQuery       | React Hooks            |
| **Componentização**         | Estrutura manual | Elementos reutilizáveis   | Componentes React      |
| **Estilização**             | CSS3 puro        | Bootstrap + CSS3          | Tailwind CSS           |
| **Responsividade**          | CSS3             | Bootstrap 5               | Tailwind CSS           |

---

## 📂 Estrutura do Projeto

```text
📦 projeto-jogo-da-memoria-v1.0
│
├── 📁 assets/
│   ├── 📁 css/
│   ├── 📁 images/
│   └── 📁 js/
│
├── 📄 index.html
└── 📄 README.md
```

---

## 💻 Como Executar

### 1. Clonar o repositório

```bash
git clone URL-DO-REPOSITORIO.git
```

### 2. Acessar a pasta do projeto

```bash
cd projeto-jogo-da-memoria-v1.0
```

### 3. Executar a aplicação

Abra o arquivo `index.html` diretamente no navegador ou utilize a extensão **Live Server** no Visual Studio Code.

Não é necessário instalar dependências ou configurar um ambiente de execução.

---

## 🧠 Aprendizados

A versão 1.0 proporciona uma base sólida para compreender os fundamentos do desenvolvimento front-end, explorando conceitos essenciais de programação e construção de interfaces.

- **HTML5:** Estruturação semântica dos elementos da aplicação.
- **CSS3:** Estilização, responsividade e implementação de animações tridimensionais.
- **JavaScript:** Manipulação do DOM, gerenciamento de eventos, lógica condicional e controle de estado.
- **Lógica de programação:** Implementação de algoritmos, validação de pares e controle das interações do usuário.

A evolução planejada para as versões 2.0 e 3.0 permitirá aprofundar esses conhecimentos e compreender as diferenças entre bibliotecas tradicionais e arquiteturas modernas baseadas em componentes.

---

## 👨‍💻 Autor

**Rafael Santana**

Estudante de Engenharia da Computação, com foco em desenvolvimento Full-Stack e Engenharia de Software.

<p align="center">
  <a href="https://github.com/devRafaelSantana-Code" target="_blank">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="GitHub">
  </a>
</p>

---

<p align="center">
  Projeto desenvolvido para fins educacionais e para consolidação de conhecimentos em HTML5, CSS3, CSS Grid, Flexbox e desenvolvimento de interfaces responsivas.
</p>
