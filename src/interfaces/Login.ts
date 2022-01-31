export interface LoginResponseSuccess {
  login: string;
  status: number;
  jwt: string;
}

export interface LoginResponseError {
  error: string;
  status: number;
}
