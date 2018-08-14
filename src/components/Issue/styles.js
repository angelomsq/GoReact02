import Styled from 'styled-components';

export const Container = Styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  img {
    max-width: 64px;
    max-height: 64px;
    border-radius: 50%;
    flex: 1;
  }

  section {
    display: flex;
    flex-direction: column;
    margin-left: 10px;


    strong {
      font-size: 14px;
      color: #333;
    }

    span {
      font-size: 12px;
      color: #aaa;
      margin: 4px 0;
    }
  }
`;

export const Button = Styled.div`
  margin: 5px 0;
  a {
    flex: 0;
    text-decoration: none;
    font-size: 11px;
    background: #B286D1;
    padding: 5px 15px;
    color: #fff;
    font-weight: bold;
    border-radius: 5px;

    &:hover {
      background: #ddadff;
    }
  }
`;
