import { fetchCharacter } from "@/lib/api";

interface CharacterItemProps {
  url: string;
}

const CharacterItem = async ({ url }: CharacterItemProps) => {
  const character = await fetchCharacter(url);

  return (
    <div>
      <h5 className="font-bold">{character.name}</h5>
      {character.died ? (
        <span className="text-red-700">Died ({character.died})</span>
      ) : (
        <span className="text-emerald-500">Alive</span>
      )}
    </div>
  );
};

export default CharacterItem;
