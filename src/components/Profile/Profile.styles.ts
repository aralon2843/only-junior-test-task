import styled from "styled-components";

export const ProfileWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Greetings = styled.p`
  text-align: center;
  font-size: 40px;
  margin-bottom: 50px;

  span {
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ExitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.black};
  width: 200px;
  font-size: 18px;
  font-weight: 700;
  padding: 20px 0;
  border-radius: 8px;
  cursor: pointer;
`;
