
# AgendeJá

Sistema web para agendamento de salas de aula, laboratórios e equipamentos audiovisuais em instituições de ensino.

## 📘 Descrição

O **AgendeJá** foi desenvolvido como parte de um Projeto Integrador da UNIVESP, com o objetivo de otimizar o uso dos espaços e recursos escolares por meio da tecnologia, reduzindo conflitos de horário e aumentando a organização pedagógica.

## 💻 Tecnologias Utilizadas

- HTML, CSS e JavaScript (Frontend)
- Node.js (Backend)
- JSON para armazenamento local de dados (versão inicial)
- Git para controle de versão

## 🔧 Funcionalidades

- Cadastro de agendamentos com data e horário
- Visualização dos horários disponíveis e já reservados
- Controle de conflitos em tempo real
- Interface simples e responsiva
- Separação por tipo de recurso: sala, laboratório ou equipamento

## 📂 Estrutura do Projeto

```
/agendeja
├── frontEnd/
│   └── pages/
│       ├── agenda.html
│       ├── cadastro.html
│       └── ...
├── backEnd/
│   └── server.js
├── agendamentos.json
├── README.md
└── package.json
```

## 🚀 Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/agendeja.git
   ```

2. Acesse o diretório:
   ```bash
   cd agendeja
   ```

3. Instale as dependências do backend:
   ```bash
   npm install
   ```

4. Inicie o servidor:
   ```bash
   node backEnd/server.js
   ```

5. Abra o arquivo `frontEnd/pages/agenda.html` no navegador para testar.

## 👥 Contribuidores

- Fábio Augusto Costa  
- Vando Ricardo de Carvalho  
- Karina da Fonseca Marin  
- Edna Aparecida da Silva Menos  
- Hérica da Fonseca Marin Furquim  
- Rodrigo Herzer

## 📄 Licença

Este projeto é de uso acadêmico e está sob a Licença MIT.
