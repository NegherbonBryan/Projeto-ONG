/* Objetos Projetos */
const Educacao = {
  ID: "educacao",
  Titulo: "Educação",
  Descrição:
    "Oferecemos reforço escolar e atividades educativas para crianças e adolescentes, promovendo aprendizado, desenvolvimento pessoal. Além do acompanhamento pedagógico, realizamos oficinas de leitura, escrita e inclusão digital, incentivando o crescimento acadêmico e social dos participantes.",
  Image: "/ONG Web/4-Image/Educação.jpg",
};
const Saude = {
  ID: "saude",
  Titulo: "Saude",
  Descrição:
    "Realizamos campanhas de conscientização, prevenção e orientação em saúde, contribuindo para o bem-estar e a qualidade de vida da comunidade.             Também promovemos palestras educativas e ações voltadas à saúde física e mental, incentivando hábitos saudáveis e cuidados preventivos.",
  Image: "/ONG Web/4-Image/Saude.jpg",
};
const Alimentacao = {
  ID: "alimentacao",
  Titulo: "Alimentação",
  Descrição:
    "Distribuímos alimentos e cestas básicas para famílias em situação de vulnerabilidade, ajudando a garantir segurança alimentar e dignidade. Além disso, desenvolvemos campanhas de arrecadação e projetos voltados à conscientização sobre alimentação saudável e aproveitamento dos alimentos.",
  Image: "/ONG Web/4-Image/alimentação.jpg",
};
/* Fim Objetos Projetos */

/* Array Projetos */
const Projetos = [Educacao, Saude, Alimentacao];
/* Fim Array Projetos */

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Objetos Cadastro*/
const NomeCompleto = {
  label: "Nome Completo",
  type: "Text",
  id: "Nome Completo",
  required: true,
};
const CPF = {
  label: "CPF",
  type: "Text",
  id: "CPF",
  pattern: "^[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}$",
  required: true,
};
const Email = {
  label: "E-mail",
  type: "email",
  id: "Email",
  required: true,
};

const Telefone = {
  label: "Telefone",
  type: "text",
  id: "Telefone",
  pattern: "^\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}$",
  required: true,
};
const CEP = {
  label: "CEP",
  type: "text",
  id: "CEP",
  pattern: "^[0-9]{5}-[0-9]{3}$",
  required: true,
};
const Rua = {
  label: "Rua",
  type: "text",
  id: "Rua",
  required: true,
};
const Nº = {
  label: "Nº",
  type: "text",
  id: "Nº",
  required: true,
};
const Bairro = {
  label: "Bairro",
  type: "text",
  id: "Bairro",
  required: true,
};
const Cidade = {
  label: "Cidade",
  type: "text",
  id: "Cidade",
  required: true,
};
/* Fim Objetos Cadastro*/

/* Array Cadastro */
const InformacoesPessoais = [NomeCompleto, CPF, Email];
const InformacoesContato = [Telefone, CEP, Rua, Nº, Bairro, Cidade];
/* Fim Array Cadastro */

export { Projetos, InformacoesContato, InformacoesPessoais };
