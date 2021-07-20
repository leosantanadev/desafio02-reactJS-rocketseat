import { GenreResponseProps } from "../App";
import { Button } from "./Button";

import '../styles/sidebar.scss';

interface SideBarProps {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handleClickButton: (id: number) => void;
}

export function SideBar({genres, selectedGenreId, handleClickButton} : SideBarProps) {
  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
      
    </nav>
  )
}

// Booaa leozao (eu mesmo me dando os parabens rs)
// Parabens mano conseguiu fazer o desafio 
// Mais uma conquista pessoal!! Só PROGRESSO!!!...
