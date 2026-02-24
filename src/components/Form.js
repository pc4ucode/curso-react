function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();
        console.log("Cadastrou o usuário");
    }

    return (
        <>
            <h1>Meu cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <input type="text" placeholder="Digite seu nome" />
                <input type="submit" value="Cadastrar" />
            </form>
        </>
    );
}

export default Form;