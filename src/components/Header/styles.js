import Styled from 'styled-components';

export const Container = Styled.div`
  position: fixed;
  width: 100%;
  padding: 0 30px 0 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  background: #fff;
  box-shadow: 0px 1px 5px rgba(100, 100 ,100 ,0.25);
  flex: 1;
`;

export const Form = Styled.form`
  display: flex;

  select {
    width: 200px;
    height: 45px;
    background: #fff;
    border: 1px solid #ccc;
    font-size: 14px;
    color: #444;
    border-radius: 3px;
    outline: none;
  }

  span {
    height: 45px;
    padding: 15px 5px 0 0;
  }
`;
