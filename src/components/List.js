import Item from "./Item";

function List() {
  return (
    <>
      <h1>Lista de Itens</h1>
      <ul>
        <Item mark="Ferrari" releaseYear="1985"/>
        <Item mark="Fiat" releaseYear="1964"/>
        <Item mark="Renault"/>
        <Item mark="Chevrolet" releaseYear="1999"/>
        <Item />
      </ul>
    </>
  );
}

export default List;