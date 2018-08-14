import Styled from 'styled-components';

export const Container = Styled.div`
  padding: 120px 20px 20px 340px;
  flex: 1;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    height: 100%;

    li {
      width: 31%;
      max-height: 100px;
      list-style: none;
      background: #fff;
      padding: 20px;
      margin: 10px;
      box-shadow: 0 0 1px rgba(100 , 100 , 100 , 0.25);
    }
  }
`;
