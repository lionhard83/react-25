import {  useCallback, useState } from "react";
import { useCharacters } from "./hooks/useCharacters";
import { Spanner } from "./Spanner";


export const ExampleWithTextArea = () => {
    const [page, setPage] = useState(1);
    const [characters, totalPages, isLoading] = useCharacters(page);
    const f = useCallback(() => console.log("ciao " + page), [page]);
    return (<>
        <Spanner f={f} value={2} />
        <button disabled={page <= 1} onClick={() => setPage(page - 1)}>Prev</button>
        <span>{page}</span>
        <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
        {/* <textarea onChange={(event) => setIsOver(event.target.value.length > maxChars)} />
        {isOver && <p>Il testo non deve superare {maxChars} caratteri </p>} */}
        {isLoading && <p>Loading</p>}
        {!isLoading && characters.map(item => <p>{item.name}</p>)}
    </>)
}