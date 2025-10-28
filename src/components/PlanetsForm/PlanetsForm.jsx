import { Input } from "./PlanetsFormStyled";

export const PlanetsForm = ({ query, changeQuery }) => {
  return (
    <Input
      onInput={changeQuery}
      type="text"
      placeholder="Ear..."
      value={query}
    />
  );
};
