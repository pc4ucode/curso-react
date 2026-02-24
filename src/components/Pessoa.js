function Pessoa({ photo, name, age, job }) {  
  return (
    <div>
      <img src={photo} alt={name} />
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      <p>Profissao: {job}</p>
    </div>
  );
}

export default Pessoa;