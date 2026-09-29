# ONG São Marcos

## Sobre o Projeto

Este é um projeto fictício inspirado em um site de ONG, onde o intuito principal é testar minhas habilidades de desenvolvimento Front-End para Web.

O usuário pode entrar na página do projeto, onde temos as abas de projetos, cadastro fictício, Área do Doador e informações sobre a ONG.

## Tecnologias Utilizadas

- HTML5 - Utilizado para criar a estrutura principal da página.
- CSS3 - Utilizado para criação dos estilos e aparência da página.
- JavaScript - Utilizado para criação da SPA e manipulação de eventos.
- LocalStorage - Utilizado para armazenamento dos dados do usuário fictício.
- SweetAlert2 - Biblioteca externa responsável pelos alertas visuais na área de cadastro.
- Git - Utilizado para controle de versão do projeto.
- GitHub - Utilizado para armazenamento e gerenciamento do repositório, Issues, Milestones e Pull Requests.

## Estrutura do Projeto

- `1-Projeto-HTML` - Pasta responsável por armazenar o arquivo HTML utilizado na estruturação da página.
- `2-Estilo-CSS` - Pasta responsável pelos arquivos referentes à aparência e aos estilos da página.
- `3-Java-Script` - Pasta responsável por armazenar os arquivos JavaScript que controlam os eventos, dados e o LocalStorage.
- `4-Image` - Pasta responsável pelo armazenamento das imagens utilizadas no projeto.

## Pré-Requisitos

Para executar o projeto localmente, é necessário:

- Um navegador atualizado, como Google Chrome, Microsoft Edge ou Firefox.
- Um editor de código, como Visual Studio Code, caso queira visualizar ou modificar o código.
- Git instalado, caso queira clonar o repositório pelo GitHub.

## Como Executar o Projeto

1. Clone o repositório utilizando o Git:

   `git clone https://github.com/NegherbonBryan/Projeto-ONG.git`

2. Abra a pasta do projeto em um editor de código.

3. Acesse a pasta `1-Projeto-HTML`.

4. Execute o arquivo `index.html` utilizando um servidor local, como a extensão Live Server do Visual Studio Code.

O projeto não necessita da instalação de dependências adicionais.

## Versionamento

O projeto utiliza Git para controle de versão e GitHub para armazenamento e gerenciamento do repositório.

Foi adotada uma estrutura baseada em GitFlow:

- `main`: contém as versões estáveis do projeto.
- `develop`: utilizada para integrar as alterações durante o desenvolvimento.
- `feature/*`: utilizada para desenvolver novas funcionalidades separadamente.

As alterações realizadas nas branches de feature são integradas à `develop` por meio de Pull Requests.

Os commits seguem o padrão Conventional Commits, utilizando identificadores como `feat:`, `docs:`, `fix:` e outros, de acordo com o tipo de alteração.

As versões estáveis são identificadas por tags seguindo o versionamento semântico, como `v1.0.0`.
