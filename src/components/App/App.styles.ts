import styled from "styled-components";

export const TextLogo = styled.div`
  font-size: 64px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
`;
