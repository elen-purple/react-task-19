import styled from "styled-components";

export const Input = styled.input`
  width: 800px;
  margin: 0 auto;
  margin-bottom: 60px;
  height: 40px;
  font-family: "Space Mono", monospace;
  font-size: 16px;
  border-radius: 20px;
  border: 2px solid #bed2edff;
  background-color: #1f244aff;
  padding: 0 40px;
  color: #0ccddeff;

  &::placeholder {
    color: #bed2edff;
  }

  &:hover,
  &:focus {
    border: 2px solid #0ccddeff;
  }
`;
