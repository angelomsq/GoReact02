import React from 'react';

import { Container } from './styles';

const Repo = props => (
  <Container>
    <img src={props.avatar_url} alt="{props.login}" />
    <section>
      <strong>{props.name}</strong>
      <span>{props.login}</span>
    </section>
  </Container>
);

export default Repo;
