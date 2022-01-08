import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#4DFE17"};
  color: ${(p) => (p.color ? "#2E186A" : "#000")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 3px solid #000;
  border-radius: 4px;
  padding: 13px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  max-width: 180px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid  rgb(0,0,0);
    background-color:  rgb(0,0,0);
  }
`;
