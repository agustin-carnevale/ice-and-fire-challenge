import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { House } from "@/interfaces/house";
import CharacterItem from "@/components/CharacterItem";

interface HouseCardProps {
  house: House;
}

const HouseCard = ({ house }: HouseCardProps) => {
  return (
    <Card className="max-w-[800px] m-4">
      <CardHeader className="bg-zinc-800">
        <CardTitle className="text-white">{house.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <h5 className="text-lg underline">Members</h5>
        {house.swornMembers.map((characterUrl) => (
          <CharacterItem key={characterUrl} url={characterUrl} />
        ))}
        {(house.swornMembers?.length === 0 || !house.swornMembers) && (
          <div>
            <p>-This house has no sworn members-</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default HouseCard;
