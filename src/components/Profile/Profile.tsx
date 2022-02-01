import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextLogo } from "../App/App.styles";
import { ExitButton, Greetings, ProfileWrapper } from "./Profile.styles";

interface IProfileState {
  login: string;
  logout: () => void;
}

const Profile: React.FC<IProfileState> = ({ login, logout }): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!login) {
      navigate("/login");
    }
  }, [login, navigate]);

  return (
    <>
      <TextLogo>ONLY.</TextLogo>
      <ProfileWrapper>
        <Greetings>
          Здравствуйте, <span>{login}</span>
        </Greetings>
        <ExitButton onClick={logout}>Выйти</ExitButton>
      </ProfileWrapper>
    </>
  );
};

export default Profile;
