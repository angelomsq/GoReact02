import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  img {
    max-width: 45px;
    max-height: 45px;
    flex: 1;
  }

  section {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;

    strong {
      color: #333;
      font-size: 14px;
    }

    span {
      color: #bbb;
      font-size: 12px;
      margin-top: 3px;
    }
  }

`;
