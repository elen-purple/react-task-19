import { PlanetsItem } from "../PlanetsItem/PlanetsItem";
import { List } from "./PLanetsListStyled";

export const PlanetsList = ({ planets }) => {
  return (
    <List>
      {planets.map((planet, index) => (
        <PlanetsItem key={index} planet={planet} />
      ))}
    </List>
  );
};
