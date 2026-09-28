function SalvarUsuario(Usuario) {
  let UsuarioJSON = JSON.stringify(Usuario);
  localStorage.setItem("Usuário", UsuarioJSON);
}

function BuscarUsuario() {
  let UsuarioSalvo = localStorage.getItem("Usuário");
  let UsuarioObjeto = JSON.parse(UsuarioSalvo);
  return UsuarioObjeto;
}

export { SalvarUsuario, BuscarUsuario };
