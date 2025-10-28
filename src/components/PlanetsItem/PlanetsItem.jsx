import { Item, Title, Wrap, Text } from "./PlanetsItemStyled";

export const PlanetsItem = ({
  planet: { name, order, hasRings, diameter, type, moons = null },
}) => {
  return (
    <Item>
      <Wrap>
        <Title>{name}</Title>
        <Text>
          The planet is in <span>{order}</span> order from the Sun. The diamer
          of the planet is <span>{diameter}</span>km
          {hasRings ? <> and it has rings</> : <></>}. The type of the planet is{" "}
          <span>{type}</span>.
          {moons ? (
            <>
              {" "}
              It has <span>{moons.length}</span> moons:{" "}
              {moons.map(({ name, diameter }, index) => (
                <>
                  <span>{name}</span> with diameter <span>{diameter}</span>km
                  {index < moons.length - 1 ? <>, </> : <></>}
                </>
              ))}
              .
            </>
          ) : (
            <></>
          )}
        </Text>
      </Wrap>
    </Item>
  );
};
