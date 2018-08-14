import React from 'react';

import Repo from '../Repo';

import { Container } from './styles';

const RepoList = props => (
  <Container>
    <ul>
      {props.repos.map(repo => (
        <li key={repo.id}>
          <a onClick={e => props.handleClick(e, repo.id)}>
            <Repo {...repo} />
            {props.loading && props.currentRepo === repo.id ? (
              <i className="fa fa-spinner fa-pulse" />
            ) : (
              <i className="fa fa-chevron-right" />
            )}
          </a>
        </li>
      ))}
    </ul>
  </Container>
);

export default RepoList;
