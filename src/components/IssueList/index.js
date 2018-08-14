import React from 'react';
import { Container } from './styles';

import Issue from '../Issue';

const IssueList = props => (
  <Container>
    <ul>
      {props.issues.map(issue => (
        <li key={issue.id}>
          <Issue {...issue} />
        </li>
      ))}
    </ul>
  </Container>
);

export default IssueList;
