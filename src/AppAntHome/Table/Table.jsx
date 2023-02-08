import { pokemonData } from './pokemon';
import {Table as TableAnt, Typography, Image} from "antd";


const { Text } = Typography;

const columns = [  //таблица, поля, колонки
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <Text>{text}</Text>,
        filters: [
            {
                text: "Ivysaur",
                value: "Ivysaur",
            },
            {
                text: "Venusaur",
                value: "Venusaur",
            },
            {
                text: "Charmeleon",
                value: "Charmeleon",
            },
        ],
        onFilter: ((value, item) => item.name.includes(value)) // фильтр в таблице из библионеки Ant Design
    },
    {
        title: 'number',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Class',
        dataIndex: 'classification',
        key: 'classification',
        filters: [
            {
                text: "Seed Pokémon",
                value: "Seed Pokémon",
            },
            {
                text: "Lizard Pokémon",
                value: "Lizard Pokémon",
            },
            {
                text: "Flame Pokémon",
                value: "Flame Pokémon",
            },
        ],
        onFilter: ((value, item) => item.classification.includes(value)) // фильтр в таблице из библионеки Ant Design
    },
    {
        title: 'Maximum HP',
        dataIndex: 'maxHP',
        key: 'maxHP',
        sorter: (a, b) => a.maxHP - b.maxHP, // сортировка в таблице из библионеки Ant Design
    },
    {
        title: 'Maximum CP',
        dataIndex: 'maxCP',
        key: 'maxCP',
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (src) => <Image src={src} width={150}/>// метод рендер, когда прийдет src-картинки,
            //тогда верни Image-тег и передай ему атрибут src который прийдет
    },
];

const dataPokemon = pokemonData.map(pokemon => ({ // перебераем массив по ключам
    name: pokemon.name,
    number: pokemon.number,
    classification: pokemon.classification,
    maxHP: pokemon.maxHP,
    maxCP: pokemon.maxCP,
    key: pokemon.id,
    image: pokemon.image,

}))
//console.log(dataPokemon);
const Table = ({ rows = 10 }) => {
    return (
        <TableAnt dataSource={dataPokemon} columns={columns}
                  pagination={{
                       pageSize: rows,
                       // pageSizeOptions: [30,50,100],
                       // defaultPageSize: 100,
                       // showSizeChanger: false,
        }} /> // передаем значения

    )
}

export default Table;