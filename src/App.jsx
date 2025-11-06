import { useMemo, useState } from "react";
import { PlanetsList } from "./components/PlanetsList/PlanetsList";
import { PlanetsForm } from "./components/PlanetsForm/PlanetsForm";
import { Modal } from "./components/Modal/Modal";
import { useModal } from "./hooks/useModal";
import PLANETS from "./data/planets.json";
import { GlobalStyle } from "./components/GlobalStyle/GlobalStyle";
import { Main } from "./AppStyled";

const App = () => {
  const [query, setQuery] = useState("");
  const { choice, selectChoice, discardChoice } = useModal(false);

  const filteredPlanets = useMemo(
    () =>
      PLANETS.filter((planet) =>
        planet.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
      ),
    [query, PLANETS]
  );

  const changeQuery = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Main>
      <GlobalStyle />
      <PlanetsForm query={query} changeQuery={changeQuery} />
      <PlanetsList planets={filteredPlanets} selectChoice={selectChoice} />
      <Modal choice={choice} discardChoice={discardChoice} />
    </Main>
  );
};

export default App;
