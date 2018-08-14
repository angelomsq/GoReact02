import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  margin: 0;
`;

export const Sidebar = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 320px;
  height: 100%;
  background: #fff;
  flex: 0;
  padding: 30px;
  box-shadow: 0px 1px 5px rgba(100, 100 ,100 ,0.25);
  z-index:1;
`;

export const Form = Styled.form`
  width: 100%;
  padding: 0  0 20px 0;
  border-bottom: 1px solid #eee;
  display: flex;
  flex-wrap: wrap;

  input {
    flex: 1;
    height: 45px;
    padding: 0 20px;
    background: #EEE;
    border: 0;
    font-size: 14px;
    color: #444;
    border-radius: 3px;
    outline: none;
  }

  button{
    height: 45px;
    padding: 0 15px;
    margin-left: 10px;
    background: #59EA9A;
    color: #fff;
    font-size: 24px;
    border: none;
    outline: none;
  }

  span {
    padding: 5px;
    font-size: 12px;
    color: #f00;
  }
`;
