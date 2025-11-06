import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #0000005d;
  width: 100%;
  height: 100%;
`;

export const Modalka = styled.div`
  background-color: #4b3ba4;
  padding-top: 8px;
  max-width: 800px;
  width: calc(100% - 40px);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
`;

export const Btn = styled.button`
  margin-left: auto;
  margin-right: 20px;
  line-height: 0;
`;

export const Body = styled.div`
  margin-top: 8px;
  border-top: 2px solid #bed2edff;
  background-color: #1f244aff;
  border-radius: 0 0 20px 20px;
  padding: 20px 40px;
`;

export const Title = styled.h2`
  color: #0ccddeff;
  font-family: "Orbitron", sans-serif;
  font-size: 40px;
  margin-bottom: 12px;
  text-align: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  justify-content: center;
`;

export const Item = styled.li`
  border: 2px solid #0ccddeff;
  padding: 2px 16px;
  border-radius: 20px;
`;

export const Text = styled.p`
  color: #bed2edff;
`;

export const Span = styled.span`
  font-weight: 700;
  color: #a6aadcff;
  display: inline-block;
`;

export const Moons = styled.div`
  border: 2px solid #4b3ba4;
  border-radius: 20px;
  padding: 12px 24px;
  margin-top: 20px;
`;

export const MoonTitle = styled.h3`
  font-family: "Orbitron", sans-serif;
  color: #a6aadcff;
  font-size: 28px;
  margin-bottom: 12px;
  text-align: center;
`;
