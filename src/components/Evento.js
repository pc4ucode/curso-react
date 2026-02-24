function Evento({number}) {
    function meuEvento() {
        console.log("Ativou o evento!", number);
    }

    return (
        <>
            <p>Clique para disparar um evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </>
    )
}

export default Evento;