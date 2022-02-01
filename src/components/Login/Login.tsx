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

import {
  LoginResponseError,
  LoginResponseSuccess,
} from "../../interfaces/Login";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import loginErrorIcon from "../../assets/LoginError.svg";
import recktangle from "../../assets/Recktangle.svg";

interface ILoginInputs {
  login: string;
  password: string;
  remember?: boolean;
}

interface ILoginProps {
  loginFetching: () => void;
  loginSuccess: (login: string) => void;
  loginError: (error: string) => void;

  login: string;
  error: string;
  isLoading: boolean;
}

const Login: React.FC<ILoginProps> = ({
  loginFetching,
  loginSuccess,
  loginError,

  login,
  error,
  isLoading,
}): JSX.Element => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<ILoginInputs>();

  const onSubmitHandler: SubmitHandler<ILoginInputs> = async (data) => {
    loginFetching();

    const response = await fakeLogin(data);
    if (response.status === 200) {
      localStorage.setItem("jwt", (response as LoginResponseSuccess).jwt);
      localStorage.setItem("login", (response as LoginResponseSuccess).login);
      loginSuccess((response as LoginResponseSuccess).login);
    } else {
      loginError((response as LoginResponseError).error);
    }
  };

  useEffect(() => {
    const isLoggedIn =
      localStorage.getItem("jwt") && localStorage.getItem("login");
    if (isLoggedIn) {
      navigate("/profile");
    }
  }, [login, navigate]);

  return (
    <>
      <TextLogo>ONLY.</TextLogo>
      <LoginWrapper>
        <LoginForm onSubmit={handleSubmit(onSubmitHandler)}>
          <InputWrapper>
            {error && (
              <LoginError>
                <LoginErrorLabel icon={loginErrorIcon}>{error}</LoginErrorLabel>
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
              icon={recktangle}
              {...register("remember")}
            />
            <RememberLabel htmlFor="rememberCheckbox">
              Запомнить пароль
            </RememberLabel>
          </RememberWrapper>

          <SubmitButton disabled={isLoading}>Войти</SubmitButton>
        </LoginForm>
      </LoginWrapper>
    </>
  );
};

export default Login;
