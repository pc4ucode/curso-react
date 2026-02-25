function SeuNome({ setName }) {
  return (
    <>
      <p>Meu nome é: </p>
      <input
        type="text"
        placeholder="Qual é o seu nome?"
        onChange={(e) => setName(e.target.value)}
      />
    </>
  );
}

export default SeuNome;
