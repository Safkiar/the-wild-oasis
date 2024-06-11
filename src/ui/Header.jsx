import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import Button from "./Button";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1125px) {
    position: relative;
    z-index: 10000;
    justify-content: space-between;
  }
  @media (max-width: 700px) {
    button {
      padding: 5px 10px;
      font-size: 1.2rem;
    }
    padding: 10px 10px;
  }
`;

function Header({ menuActivation, showMenu, disableMenu }) {
  return (
    <StyledHeader>
      {menuActivation && <Button onClick={showMenu}>Menu</Button>}
      <UserAvatar />
      <HeaderMenu disableMenu={disableMenu} />
    </StyledHeader>
  );
}

export default Header;
