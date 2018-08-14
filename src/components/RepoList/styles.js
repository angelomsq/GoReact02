import Styled from 'styled-components';

export const Container = Styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0;
  color: #ccc;

  ul {
    list-style: none;
    min-width: 100%;

    li {
      margin: 0 -30px;
      padding: 0 30px;
      height: 60px;
      display: flex;
      align-items: center;

      &:hover {
        color: #4286f4;
        background: #edf5ff;
      }

      a {
        display: flex;
        flex: 1;
        align-items: center;
        font-size: 14px;
        text-decoration: none;
        color: #ccc;

        &:hover {
          color: #4286f4;
        }

      }

    }
  }
`;
