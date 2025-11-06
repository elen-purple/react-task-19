import { Item, Title, Wrap, Text, Span } from "./PlanetsItemStyled";

export const PlanetsItem = ({
  planet: { name, order, hasRings, diameter, type, moons = null },
}) => {
  return (
    <Item id={order}>
      <Wrap>
        <Title>{name}</Title>
        <Text>
          The planet is in <Span>{order}</Span> order from the Sun. The diamer
          of the planet is <Span>{diameter}km</Span>
          {hasRings ? <> and it has rings</> : <></>}. The type of the planet is{" "}
          <Span>{type}</Span>.
          {moons ? (
            <>
              {" "}
              It has <Span>{moons.length}</Span> moons:{" "}
              {moons.map(({ name, diameter }, index) => (
                <span key={index}>
                  <Span>{name}</Span> with diameter <Span>{diameter}km</Span>
                  {index < moons.length - 1 ? <>, </> : <></>}
                </span>
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
