const conteudo = document.querySelector("#conteudo");
let rota = window.location.hash;

import { Projetos, InformacoesContato, InformacoesPessoais } from "./Dados.js";
import { BuscarUsuario, SalvarUsuario } from "./Storage.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

window.addEventListener("hashchange", function () {
  rota = window.location.hash;
  console.log(rota);

  /* Pagina Inicial */
  if (rota === "#Pagina-Inicial") {
    conteudo.innerHTML = `     <h3>Sobre Nós</h3>
      <p>
        A ONG São Marcos é uma organização sem fins lucrativos dedicada à
        promoção da educação, inclusão social e desenvolvimento humano de
        crianças, adolescentes, jovens e famílias em situação de vulnerabilidade
        social. Fundada com o propósito de transformar vidas por meio do
        conhecimento e da solidariedade, a instituição acredita que a educação é
        a ferramenta mais poderosa para construir um futuro mais justo,
        igualitário e sustentável para todos. Desde sua criação, a ONG São
        Marcos atua como uma ponte entre oportunidades e pessoas que necessitam
        de apoio para alcançar seus objetivos pessoais, educacionais e
        profissionais.
      </p>

      <h3>Nossa História</h3>
      <p>
        A ONG São Marcos foi criada em 2018 por Bryan Negherbon dos Santos,
        idealizador do projeto e defensor da educação como agente de
        transformação social. Ao perceber as dificuldades enfrentadas por
        famílias em comunidades carentes, especialmente relacionadas ao acesso à
        educação de qualidade, Bryan decidiu reunir voluntários, professores e
        profissionais de diferentes áreas para desenvolver projetos capazes de
        gerar mudanças reais na sociedade. O que começou como um pequeno grupo
        de apoio escolar em um centro comunitário transformou-se em uma
        organização reconhecida pelo impacto positivo de suas ações,
        beneficiando centenas de pessoas todos os anos.
      </p>

      <h3>Nosso Fundador</h3>
      <h4 class="Fundador">Bryan Negherbon dos Santos</h4>
      <p>
        Fundador e idealizador da ONG São Marcos, Bryan Negherbon dos Santos
        criou a instituição com o propósito de promover a educação, a inclusão
        social e o desenvolvimento humano em comunidades que enfrentam
        dificuldades de acesso a oportunidades. Movido pela crença de que o
        conhecimento é capaz de transformar vidas, Bryan reuniu voluntários e
        parceiros para desenvolver projetos voltados ao fortalecimento da
        educação, à capacitação profissional e ao apoio social de crianças,
        jovens e famílias em situação de vulnerabilidade. Sob sua liderança, a
        ONG São Marcos passou a atuar na criação de iniciativas que incentivam a
        aprendizagem, o desenvolvimento de habilidades e a construção de um
        futuro mais promissor para a comunidade.
      </p>`;
  }
  /* Fim PAgina Inicial */

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* Projetos */
  else if (rota.startsWith("#Projetos")) {
    let HTMLprojetos = `<h3>Projetos</h3>
    <section class="meus-projetos">`;
    Projetos.forEach(function (Projetos) {
      HTMLprojetos += `<article class="projetos" id="${Projetos.ID}">
      <h4>${Projetos.Titulo}</h4>
      <p>${Projetos.Descrição}</p>
      <img class="img-projetos" src="${Projetos.Image}" />
      </article>`;
    });
    HTMLprojetos += `</section>`;
    conteudo.innerHTML = HTMLprojetos;

    let Partes = rota.split("/");
    let ProjetoSelecionado = Partes[1];
    let ProjetoAlvo = document.getElementById(ProjetoSelecionado);
    console.log(ProjetoAlvo);
    if (ProjetoAlvo) {
      ProjetoAlvo.classList.add("destaque");
    }
    let TodosProjetos = document.querySelectorAll(".projetos");
    TodosProjetos.forEach(function (projeto) {
      projeto.addEventListener("mouseenter", function () {
        ProjetoAlvo.classList.remove("destaque");
      });
    });
  }
  /* Fim Projetos */

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* Cadastro */
  else if (rota === "#Cadastro") {
    let HTMLCadastro = `<h3>Cadastro</h3>
    <form>
     <Fieldset class = "InformaçõesPessoais">
         <legend>Informações Pessoais</legend>`;
    InformacoesPessoais.forEach(function (campo) {
      let required = "";
      let pattern = "";
      if (campo.required) {
        required = `required`;
      }
      if (campo.pattern) {
        pattern = `pattern="${campo.pattern}"`;
      }
      HTMLCadastro += `
      <label for="${campo.id}">${campo.label}</label>
      <input id="${campo.id}" type="${campo.type}" ${pattern} ${required}/>
      `;
    });
    HTMLCadastro += `</Fieldset>`;

    HTMLCadastro += `<Fieldset class = "InformaçõesContato">
    <legend>Informações de Contato</legend>`;
    InformacoesContato.forEach(function (campo) {
      let required = "";
      let pattern = "";
      if (campo.required) {
        required = "required";
      }
      if (campo.pattern) {
        pattern = `pattern="${campo.pattern}"`;
      }
      HTMLCadastro += `
      <label for="${campo.id}">${campo.label}</label>
      <input id="${campo.id}" type="${campo.type}" ${pattern} ${required}/>
      `;
    });
    HTMLCadastro += `</Fieldset>
    <div class="botoes">
      <button type="reset">Cancelar</button>
      <button type="submit" class="continuar">Continuar</button>
    </div>
    </form>`;

    conteudo.innerHTML = HTMLCadastro;
    let formulario = document.querySelector("form");
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();
      let Nome = document.getElementById("Nome Completo").value;
      let CPF = document.getElementById("CPF").value;
      let Email = document.getElementById("Email").value;
      let Telefone = document.getElementById("Telefone").value;
      let CEP = document.getElementById("CEP").value;

      let Usuario = { Nome, CPF, Email, Telefone, CEP };

      SalvarUsuario(Usuario);

      Swal.fire({
        title: "Cadastro realizado!",
        text: "Seus dados foram salvos com sucesso.",
        icon: "success",
      });

      let UsuarioObjeto = BuscarUsuario();
      console.log(UsuarioObjeto);

      window.location.hash = "#AreaDoDoador";
    });
  }
  /* Fim Cadastro */

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  /* Área do Doador - formulário e funcionalidades de doação */
  else if (rota === "#AreaDoDoador") {
    let UsuarioObjeto = BuscarUsuario();
    let HTMLAreaDoador = `<h3>Área Do Doador</h3>
    <h4 class="Doador">Bem vindo, ${UsuarioObjeto.Nome}</h4>`;
    HTMLAreaDoador += `<fieldset>
      <select>
       <option value="" selected disabled>Selecione um projeto</option>
       <option>Educação</option>
       <option>Alimentação</option>
       <option>Saúde</option>
      </select>

     <select>
       <option value="" selected disabled>Selecione a forma de pagamento</option>
       <option>PIX</optin>
       <option>Cartão</option>
       </select>

     <label class="Valor" for="Valor">Valor</label>
     <input id="$Valor$" type="number" />
    </fieldset>
    <div class="botoes">
      <button type="submit" class="continuar">Doar</button>
    </div>
    `;

    conteudo.innerHTML = HTMLAreaDoador;
  }

  /* Fim Area do Doador */
});
