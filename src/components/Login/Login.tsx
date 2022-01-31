import { SubmitHandler, useForm } from "react-hook-form";
import { fakeLogin } from "../../api/login";
import { TextLogo } from "../App/App.styles";
import {
  Input,
  InputError,
  InputLabel,
  InputWrapper,
  LoginError,
  LoginErrorLabel,
  LoginForm,
  LoginWrapper,
  RememberCheckbox,
  RememberLabel,
  RememberWrapper,
  SubmitButton,
} from "./Login.styles";

import loginErrorIcon from "../../assets/LoginError.svg";

interface ILoginInputs {
  login: string;
  password: string;
  remember?: boolean;
}

const Login: React.FC = (): JSX.Element => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginInputs>();

  const onSubmitHandler: SubmitHandler<ILoginInputs> = async (data) => {};

  return (
    <>
      <TextLogo>ONLY.</TextLogo>
      <LoginWrapper>
        <LoginForm onSubmit={handleSubmit(onSubmitHandler)}>
          <InputWrapper>
            {true && (
              <LoginError>
                <LoginErrorLabel icon={loginErrorIcon}>
                  Пользователя aralon не существует
                </LoginErrorLabel>
              </LoginError>
            )}
            <InputLabel>Логин</InputLabel>
            <Input
              type={"text"}
              error={!!errors.login?.message}
              {...register("login", {
                required: "Обязательное поле",
              })}
            />
            {errors.login?.message && (
              <InputError>{errors.login.message}</InputError>
            )}
          </InputWrapper>

          <InputWrapper>
            <InputLabel>Пароль</InputLabel>
            <Input
              type={"password"}
              error={!!errors.password?.message}
              {...register("password", {
                required: "Обязательное поле",
              })}
            />
            {errors.password?.message && (
              <InputError>{errors.password.message}</InputError>
            )}
          </InputWrapper>

          <RememberWrapper>
            <RememberCheckbox
              type="checkbox"
              id="rememberCheckbox"
              {...register("remember")}
            />
            <RememberLabel htmlFor="rememberCheckbox">
              Запомнить пароль
            </RememberLabel>
          </RememberWrapper>

          <SubmitButton>Войти</SubmitButton>
        </LoginForm>
      </LoginWrapper>
    </>
  );
};

export default Login;
