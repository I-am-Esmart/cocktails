import styled from "styled-components";
const Wrapper = styled.article`
  border: 1px solid red;
  width: 30%;
  margin: 1rem;

  background: var(--white);
  box-shadow: var(--shadow-2);
  transition: var(--transition);
  display: flex;
  flex-wrap: wrap;
  border-radius: var(--borderRadius);
  :hover {
    box-shadow: var(--shadow-4);
  }

  @media screen and (max-width: 1140px) {
    width: 45%;
  }
  @media screen and (max-width: 786px) {
    width: 80%;
  }

  img {
    width: 100%;
    background-size: cover;
    background-position: center;
    border-top-left-radius: var(--borderRadius);
    border-top-right-radius: var(--borderRadius);
  }
  .footer {
    padding: 1.2rem;
    h4,
    h5 {
      margin-bottom: 0.5rem;
    }
    h4 {
      font-weight: 700;
    }
    p {
      margin-bottom: 1rem;
      color: var(--grey-500);
    }
  }
`;

export default Wrapper;
