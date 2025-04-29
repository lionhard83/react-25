export type ResponseCharacters = {
  info: {
    count: number;
    pages: number;
    prev: null | string;
    next: null | string;
  };
  results: Character[];
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};
