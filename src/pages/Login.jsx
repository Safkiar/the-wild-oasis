import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
  h2 {
    text-align: center;
  }
  @media (max-width: 505px) {
    form {
      width: 90vw;
      margin: 0 auto;
    }
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <Heading as="h2">Login: user@example.com</Heading>
      <Heading as="h2">Password: user@example.com</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
