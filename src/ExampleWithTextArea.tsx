import {  useEffect, useState } from "react";
import axios from 'axios';
import { Character, ResponseCharacters } from "./models/Character";




export const ExampleWithTextArea = () => {
    console.log('sto rirenderizzando');
    // const maxChars = 30;
    // const [isOver, setIsOver] = useState(false);
    const [characters, setCharacters] = useState<Character[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    

    useEffect(() => {
        (async () => {
            const response = await axios.get<ResponseCharacters>(`https://rickandmortyapi.com/api/character?page=${page}`);
            setCharacters(response.data.results);
            setTotalPages(response.data.info.pages);
        })();
    }, [page])

    return (<>
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span>{page}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
        {/* <textarea onChange={(event) => setIsOver(event.target.value.length > maxChars)} />
        {isOver && <p>Il testo non deve superare {maxChars} caratteri </p>} */}
        {characters.map(item => <p>{item.name}</p>)}
    </>)
}