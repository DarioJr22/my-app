const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

export default function List() {
    //Declarando uma variável de listagem dos itens que retorna 
    const listItem = products.map(
        i => 
        <li 
            key={i.id}
            style={{
                color:products.isFruit? 'magenta' : 'green',
            }}>
                {i.title}
        </li>   
    )
    //pondo uma variável de listagem dos itens que retorna a listaprocessada no bloco anterior
    return(<ul>{listItem}</ul>)
}