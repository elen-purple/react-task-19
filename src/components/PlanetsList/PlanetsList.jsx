import { PlanetsItem } from "../PlanetsItem/PlanetsItem";
import { List } from "./PLanetsListStyled";

export const PlanetsList = ({ planets, selectChoice }) => {
  return (
    <List onClick={selectChoice}>
      {planets.map((planet, index) => (
        <PlanetsItem key={index} planet={planet} />
      ))}
    </List>
  );
};
