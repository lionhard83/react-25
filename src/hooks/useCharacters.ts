//

import { useEffect, useState } from "react";
import { Character, ResponseCharacters } from "../models/Character";
import axios from "axios";

export const useCharacters = (page: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      const response = await axios.get<ResponseCharacters>(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      setCharacters(response.data.results);
      setTotalPages(response.data.info.pages);
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // Simula un caricamento di 2 secondi
    })();
  }, [page]);
  return [characters, totalPages, isLoading] as const;
  // 1 possibilità [Character[], number]
  // 2 possibilità (Character[] | number)[]
};
