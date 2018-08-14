import React from 'react';

import { Container, Button } from './styles';

const Issue = props => (
  <Container>
    <img src={props.user.avatar_url} alt="{props.user.login}" />
    <section>
      <strong>{props.title}</strong>
      <span>{props.user.login}</span>
      <Button>
        <a href={props.html_url}>
          <i className="fa fa-external-link" /> ABRIR ISSUE
        </a>
      </Button>
    </section>
  </Container>
);

export default Issue;
