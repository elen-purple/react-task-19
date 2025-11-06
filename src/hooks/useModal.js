import PLANETS from "../data/planets.json";
import { useState } from "react";

export const useModal = (initialValue = null) => {
  const [choice, setChoice] = useState(initialValue);

  const selectChoice = (e) => {
    if (e.target.closest("li"))
      setChoice(
        PLANETS.find(
          (planet) =>
            planet.order === Number.parseInt(e.target.closest("li").id)
        )
      );
  };

  const discardChoice = () => {
    setChoice(null);
  };

  return { choice, selectChoice, discardChoice };
};
