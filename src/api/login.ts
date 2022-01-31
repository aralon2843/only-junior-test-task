import { LoginResponseError, LoginResponseSuccess } from "../interfaces/Login";

interface LoginRequest {
  login: string;
  password: string;
  remember?: boolean;
}

export const fakeLogin = async ({
  login,
  password,
  remember,
}: LoginRequest): Promise<LoginResponseSuccess | LoginResponseError> => {
  return new Promise((res, rej) => {
    if (login !== "steve.jobs@example.com") {
      rej({
        status: 404,
        error: `Пользователя ${login} не существует`,
      });
    }

    if (password !== "password") {
      rej({
        status: 404,
        error: "Неверный пароль",
      });
    }

    setTimeout(() => {
      res({
        status: 200,
        jwt: "fakeJWT",
        login,
      });
    }, 500);
  });
};
