# 🔍 Visualizador de Perfil do GitHub

O **Visualizador de Perfil do GitHub** é uma aplicação web simples, moderna e responsiva que permite buscar perfis de usuários do GitHub utilizando a API oficial do GitHub. A aplicação exibe informações detalhadas sobre o usuário pesquisado, bem como seus 10 repositórios mais recentes com estatísticas em tempo real.

Este projeto foi desenvolvido como um desafio prático de desenvolvimento web focado no consumo de APIs REST, manipulação assíncrona com JavaScript moderno (ES6+) e organização modular do código.

---

## 🚀 Funcionalidades

- 🔍 **Busca de Usuários Interativa**: Digite o nome de usuário do GitHub e clique no botão de buscar ou pressione a tecla `Enter`.
- 👤 **Informações de Perfil**: Exibe a foto de perfil (avatar), nome, biografia, número de seguidores e número de pessoas que o usuário está seguindo.
- 📦 **Repositórios Recentes**: Lista os **10 repositórios criados mais recentemente** pelo usuário com as seguintes estatísticas:
  - ⭐ Quantidade de Stars
  - 🍴 Quantidade de Forks
  - 👀 Quantidade de Watchers
  - 💻 Linguagem de programação predominante
- ⚡ **Feedbacks Visuais**:
  - Indicador visual de carregamento ("Carregando...").
  - Alerta em caso de campo de busca vazio.
  - Alerta amigável caso o usuário não seja encontrado ou ocorra algum erro na requisição.
- 📱 **Design Responsivo & Animações**: Interface fluida, moderna e totalmente adaptada para dispositivos móveis, tablets e desktops, complementada com transições e animações suaves.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído utilizando tecnologias web nativas para garantir leveza e alta performance:

- **HTML5**: Estruturação semântica do projeto.
- **CSS3**: Estilização moderna dividida em arquivos específicos:
  - `reset.css`: Padronização de estilos entre navegadores.
  - `styles.css`: Estilização geral dos componentes visuais.
  - `animations.css`: Transições e animações da interface.
  - `responsive.css`: Responsividade dedicada para telas menores.
- **JavaScript (ES6+)**: Manipulação assíncrona do DOM e requisições HTTP (`Fetch API`) utilizando módulos (`import`/`export`).
- **Devicon**: Utilizado para carregar de forma elegante o ícone oficial do GitHub na aplicação.

---

## 📁 Estrutura de Arquivos

A organização do código foi estruturada de forma modular, facilitando a legibilidade e futuras manutenções:

```text
visualizador-perfil-github/
├── index.html          # Estrutura HTML principal da aplicação
├── README.md           # Documentação do projeto
└── src/
    ├── css/
    │   ├── animations.css  # Efeitos de transição e animações
    │   ├── reset.css       # Reinicialização de estilos padrão do browser
    │   ├── responsive.css  # Ajustes de layout para diferentes telas
    │   └── styles.css      # Estilização visual dos cartões e elementos
    └── js/
        ├── githubApi.js    # Funções de requisição e consumo da API do GitHub
        ├── index.js        # Arquivo de entrada, controle de eventos e fluxo principal
        └── profileView.js  # Lógica de renderização dinâmica do perfil e repositórios no DOM
```

---

## 💻 Como Executar o Projeto

Como a aplicação foi desenvolvida utilizando **JavaScript Modules (`type="module"`)**, por questões de segurança de política de CORS do navegador, não é possível rodar o projeto abrindo diretamente o arquivo `index.html` com dois cliques (usando o protocolo `file://`). É necessário rodá-lo por meio de um servidor local.

### Requisito recomendável:
- **VS Code** com a extensão **Live Server** instalada.

### Passo a passo para rodar:

1. Clone ou baixe este repositório para a sua máquina:
   ```bash
   git clone https://github.com/seu-usuario/visualizador-perfil-github.git
   ```
2. Abra a pasta do projeto utilizando o **Visual Studio Code**.
3. No VS Code, com a extensão **Live Server** instalada, clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"** (ou clique no botão **"Go Live"** no canto inferior direito da barra de status).
4. O navegador será aberto automaticamente na porta local correspondente (geralmente `http://127.0.0.1:5500`), onde você poderá usar a aplicação.

---

## 🔌 API do GitHub Utilizada

As requisições do projeto são feitas para a API pública do GitHub nos seguintes endpoints:

- **Dados do perfil**: `GET https://api.github.com/users/{username}`
- **Dados dos repositórios**: `GET https://api.github.com/users/{username}/repos?per_page=10&sort=created`

---

## 📝 Licença

Este projeto está sob a licença **MIT**. Sinta-se à vontade para usá-lo, modificá-lo e contribuir com melhorias!

---
<p align="center">Desenvolvido com 💙 para fins educacionais e de estudo.</p>
