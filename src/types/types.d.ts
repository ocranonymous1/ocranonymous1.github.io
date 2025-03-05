type Author = {
  name: string;
  url?: string;
  institution?: string;
  notes?: string[];
}

type Link = {
  url: string;
  name: string;
  icon?: string;
}

type Note = {
  symbol: string;
  text: string;
  newLine?: boolean;
}

export { Author, Link, Note };