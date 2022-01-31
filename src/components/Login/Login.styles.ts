import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const LoginForm = styled.form`
  max-width: 640px;
  min-width: 280px;
  width: 640px;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.grey} inset !important;
    box-shadow: 0 0 0 30px ${({ theme }) => theme.colors.grey} inset !important;
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) =>
      theme.colors.mainBlack} !important;
  }
`;

export const LoginError = styled.div`
  background-color: ${({ theme }) => theme.colors.lightRed};
  border: 1px solid ${({ theme }) => theme.colors.mainRed};
  border-radius: 8px;
  margin-bottom: 27px;
  padding: 0px 20px;
`;

export const LoginErrorLabel = styled.p<{ icon: string }>`
  background: url(${({ icon }) => icon}) left/20px no-repeat;
  color: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  padding-left: 34px;
  padding: 20px 0px 20px 34px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputLabel = styled.label`
  margin-bottom: 10px;
`;

export const Input = styled.input<{ error: boolean }>`
  background-color: ${({ theme }) => theme.colors.grey};
  padding: 20px;
  color: ${({ theme }) => theme.colors.secondaryBlack};
  border-radius: 8px;
  border: ${({ error, theme }) =>
    error ? `1px solid ${theme.colors.mainRed}` : "none"};
  /* transition: 0.3s ease all; */
`;

export const InputError = styled.p`
  color: ${({ theme }) => theme.colors.mainRed};
  font-size: 14px;
  margin-top: 8px;
  transition: 0.3s ease all;
`;

export const RememberWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export const RememberCheckbox = styled.input`
  margin-right: 14px;
  cursor: pointer;
`;

export const RememberLabel = styled.label`
  cursor: pointer;
`;

export const SubmitButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  padding: 19px 0;
  text-align: center;
  width: 100%;
  border-radius: 8px;
  cursor: pointer;
`;
