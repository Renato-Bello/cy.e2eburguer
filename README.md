# 💻 Projeto de Automação de Testes E2E - E2EBurger

Este repositório contém a automação de testes de ponta a ponta (E2E) para o sistema **E2EBurger**, utilizando a ferramenta [Cypress](https://www.cypress.io/), construído como parte do curso de Cypress na Fomação Agile Test Engineer da [E2E Treinamentos](https://e2etreinamentos.com.br/formacao-agile-test-engineer/).

![Em Desenvolvimento](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)

## 📋 Descrição

O objetivo deste projeto é garantir a qualidade das funcionalidades principais do sistema, testando cenários críticos como login, navegação, preenchimento de formulários, e validação de mensagens de erro e sucesso.

Os testes seguem boas práticas de automação e possuem foco em:

- Verificação de fluxo de login;
- Validação de mensagens de feedback para o usuário;
- Garantia de funcionalidades essenciais do sistema.

## 🛠️ Tecnologias e Ferramentas

- **Cypress**: Framework para automação de testes de E2E;
- **JavaScript**: Linguagem utilizada nos scripts de teste;
- **Node.js**: Ambiente de execução do JavaScript;
- **Yarn**: Gerenciador de pacotes.


## 🚀 Como Executar o Projeto

###  📌Pré-requisitos

Certifique-se de ter instalado:

- Node.js (v14 ou superior);
- Yarn

### 👨🏻‍💻 Passos para Configuração

 1. Clone o repositório:
 ```bash
	git clone https://github.com/Renato-Bello/cy.e2eburguer.git
```
 2. Entrar na pasta do projeto clonado:
 ```bash
	cd cy-e2eburger
```
3. Instale as dependências:
 ```bash
	yarn install
```

### 🤖 Executar os Testes:

-  Para abrir o painel interativo do Cypress:
 ```bash
	yarn cypress open
```

-  Para executar os testes no modo headless:
 ```bash
	yarn cypress run
```


## 🧪 Testes Implementados

### Testes de Login

-   **Login de usuário Gestão realizado com sucesso**:
	-  Preenche os dados de login válidos e verifica a mensagem de sucesso.
	-  Garante que o usuário foi redirecionado corretamente.

	**Não deve logar quando email estiver inválido**:    
	-  Tenta logar com email incorreto e valida a mensagem de erro exibida.

	**Não deve logar quando email estiver em branco**:    
	-  Tenta logar com email em branco e valida a mensagem de erro exibida.
        
-   **Não deve logar quando senha inválida**:    
	-  Tenta logar com senha incorreta e valida a mensagem de erro exibida.

	**Não deve logar quando senha estiver em branco**:    
	-  Tenta logar com senha em branco e valida a mensagem de erro exibida.
      
-   **Não deve logar quando dados em branco**:
	 - Tenta logar sem preecnher credenciais e valida a mensagem obrigatóriedade dos campos.

	**Login de usuário Salão realizado com sucesso**:
	-  Preenche os dados de login válidos e verifica a mensagem de sucesso.
	
-   **Usuário perfil salão deve acessar aplicação pelo APP**:
	 -  Tenta logar com perfil salão e direciona para página de info para fluxo do app.  

	 **Link de direcionamento para o app esta funcionando corretamente**:
	 -  Validar se o link de direcionamente para download do app esta funcionando corretamente.   
			  
    
      ### Demonstração 
    - [Testes de Login](https://github.com/user-attachments/assets/a3babf91-5576-410a-83aa-d5597924ff02)
    - [Testes de ordenação](https://github.com/user-attachments/assets/bb0e9d11-d273-4083-bb51-d4c564f80680)
    - [Testes de validação de itens no carrinho](https://github.com/user-attachments/assets/5e23fda2-f3df-4017-ab46-cf3ccb933f9a)

## 📦 Dependências Principais

As principais dependências do projeto são:

-   [Cypress](https://www.cypress.io/): Framework de testes.
-   [Yarn](https://yarnpkg.com/): Gerenciador de pacotes.



##  📂 Estrutura do Projeto

A organização do projeto segue a estrutura padrão recomendada pelo Cypress:

 ```bash
cy-e2eburguer/
├── cypress/
│   ├── e2e/                   # Arquivos de testes E2E
│   ├── fixtures/              # Arquivos de dados fictícios (fixtures)
│   ├── support/               # Comandos personalizados e configurações adicionais
├── cypress.config.js          # Arquivo de configuração do Cypress
├── package.json               # Dependências e scripts do projeto
└── README.md                  # Documentação do projeto

	
```



##  🚀 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias.

## 📌 Notas Gerais
Feito por [Renato Bello](https://github.com/Renato-Bello)
