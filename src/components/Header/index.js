import React from 'react';

import { Container, Form } from './styles';
import Repo from '../Repo';

const Header = (props) => {
  if (props.repo) {
    return (
      <Container>
        <Repo {...props.repo} />
        <Form>
          <span>{props.loading ? <i className="fa fa-spinner fa-pulse" /> : ''}</span>
          <select onChange={props.handleChange} value={props.type}>
            <option value="all">Todas</option>
            <option value="open">Abertas</option>
            <option value="closed">Fechadas</option>
          </select>
        </Form>
      </Container>
    );
  }
  return '';
};

export default Header;
