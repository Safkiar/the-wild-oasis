import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      @media (max-width: 1200px) {
        h1 {
          font-size: 2.4rem;
        }
        div {
          gap: 0.7rem;
        }
        div button {
          font-size: 1.3rem;
        }
      }
      @media (max-width: 875px) {
        flex-direction: column;

        div {
          display: flex;
          flex-direction: column;
          width: 300px;
          margin-bottom: 10px;
          margin-top: 10px;
        }
      }
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
      @media (max-width: 505px) {
        form {
          padding: 2rem 3rem;
        }

        form div {
          grid-template-columns: 8rem 1fr 1fr;
        }
      }
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
