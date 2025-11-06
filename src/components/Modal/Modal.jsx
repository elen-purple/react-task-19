import { FaRegWindowClose } from "react-icons/fa";
import {
  Backdrop,
  Btn,
  Item,
  List,
  Modalka,
  Span,
  Title,
  Text,
  MoonTitle,
  Moons,
  Body,
} from "./ModalStyled";

export const Modal = ({ choice, discardChoice }) => {
  return (
    <>
      {choice ? (
        <Backdrop>
          <Modalka>
            <Btn onClick={discardChoice}>
              <FaRegWindowClose fill="#ffffff" size="24" />
            </Btn>
            <Body>
              <Title>{choice.name}</Title>
              <List>
                <Item>
                  <Text>
                    Order: <Span>{choice.order}</Span>
                  </Text>
                </Item>
                <Item>
                  <Text>
                    Has rings: <Span>{choice.hasRings ? "yes" : "no"}</Span>
                  </Text>
                </Item>
                <Item>
                  <Text>
                    Diameter: <Span>{choice.diameter}km</Span>
                  </Text>
                </Item>
                <Item>
                  <Text>
                    Type: <Span>{choice.type}</Span>
                  </Text>
                </Item>
              </List>
              {choice.moons ? (
                <Moons>
                  <MoonTitle>Moons</MoonTitle>
                  <List>
                    {choice.moons.map(({ name, diameter }, index) => (
                      <Item key={index}>
                        <Text>
                          {name}: <Span>{diameter}km</Span>
                        </Text>
                      </Item>
                    ))}
                  </List>
                </Moons>
              ) : (
                <></>
              )}
            </Body>
          </Modalka>
        </Backdrop>
      ) : (
        <></>
      )}
    </>
  );
};
