function Saudacao({ name }) {
  function gerarSaudacao(algumNome) {
    return `Olá, ${algumNome}, tudo bem?`;
  }

  return <>{name && <p>{gerarSaudacao(name)}</p>}</>;
}

export default Saudacao;
