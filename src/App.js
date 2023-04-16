import React, {useEffect, useState} from 'react';
import './index.scss';
import {Collection} from "./Collection";

const cats = [
    {"name": "Все"},
    {"name": "Море"},
    {"name": "Горы"},
    {"name": "Архитектура"},
    {"name": "Города"}
]

function App() {

    const [collections, setCollections] = useState([]);
    const [pageId, setPageId] = useState(0);
    const [searchValue, setSearchValue] = useState('');
    const [categoryId, setCategoryId] = useState(0);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const category = categoryId ? `category=${categoryId}` : ('')

        fetch(`https://643bf8b344779455736441f9.mockapi.io/photo_collections?page=${pageId}&limit=3&${category}`)
            .then((res) => res.json())
            .then((json) => {
                setCollections(json);
            }).catch((err) => {
            console.warn(err);
            alert('Ошибка при получении данных');
        }).finally(() => setLoading(false));
    }, [categoryId, pageId])

    return (
        <div className="App">
            <h1>Моя коллекция фотографий</h1>
            <div className="top">
                <ul className="tags">
                    {cats.map((obj, index) =>
                        <li
                            key={obj.name}
                            onClick={() => setCategoryId(index)}
                            className={categoryId === index ? 'active' : ''}
                        >
                            {obj.name}
                        </li>
                    )}
                </ul>
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="search-input"
                       placeholder="Поиск по названию"/>
            </div>
            <div className="content">
                {
                    isLoading ? (
                        <>
                            <h2>Загрузка...</h2>
                        </>
                    ) : (
                        collections.filter(obj => {
                            return obj.name.toLowerCase().includes(searchValue.toLowerCase());
                        }).map((obj, index) => (
                            <Collection key={index} name={obj.name} images={obj.photos}/>
                        ))
                    )
                }
            </div>
            <ul className="pagination">
                {
                    [...Array( 4)].map((_, index) =>
                        <li onClick={() => setPageId(index + 1)} className={`${pageId === index + 1 ? ('active') : ('')}`}>
                            {index + 1}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default App;
