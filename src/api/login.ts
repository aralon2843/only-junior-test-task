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
  return new Promise((res) => {
    setTimeout(() => {
      if (login !== "steve.jobs@example.com") {
        res({
          status: 404,
          error: `Пользователя ${login} не существует`,
        });
      }

      if (password !== "password") {
        res({
          status: 404,
          error: "Неверный пароль",
        });
      }

      res({
        status: 200,
        jwt: "fakeJWT",
        login,
      });
    }, 1000);
  });
};
