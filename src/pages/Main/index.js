import React, { Component } from 'react';

import api from '../../services/api';

import { Container, Sidebar, Form } from './styles';
import RepoList from '../../components/RepoList';
import Header from '../../components/Header';
import IssueList from '../../components/IssueList';

export default class Main extends Component {
  state = {
    repos: [],
    currentRepo: '',
    issues: [],
    issueType: '',
    repoInput: '',
    loadingInput: false,
    loadingRepo: false,
    loadingIssue: false,
    error: false,
  };

  handleAddRepo = async (e) => {
    e.preventDefault();
    try {
      this.setState({ loadingInput: true });

      if (this.state.repoInput === '') return;

      const response = await api.get(`/repos/${this.state.repoInput}`);
      const {
        id, owner, name, full_name,
      } = response.data;
      this.setState({
        repoInput: '',
        repos: [
          ...this.state.repos,
          {
            id,
            name,
            full_name,
            avatar_url: owner.avatar_url,
            login: owner.login,
          },
        ],
        error: false,
      });
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loadingInput: false });
    }
  };

  handleClickRepo = async (e, repoID) => {
    e.preventDefault();
    try {
      const repoFilter = this.state.repos.filter(repo => repo.id === repoID)[0];
      this.setState({
        loadingRepo: true,
        loadingIssue: true,
        currentRepo: repoFilter,
        issues: [],
      });

      const response = await api.get(`/repos/${repoFilter.full_name}/issues?state=all`);

      this.setState({
        issues: response.data,
        issueType: 'all',
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loadingRepo: false, loadingIssue: false });
    }
  };

  handleIssueType = async (event) => {
    try {
      this.setState({ loadingIssue: true });
      const { value } = event.target;
      const response = await api.get(
        `/repos/${this.state.currentRepo.full_name}/issues?state=${value}`,
      );

      this.setState({
        issueType: value,
        issues: response.data,
      });
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ loadingIssue: false });
    }
  };

  render() {
    return (
      <Container>
        <Sidebar>
          <Form onSubmit={this.handleAddRepo}>
            <input
              type="text"
              placeholder="user/repo"
              value={this.state.repoInput}
              onChange={e => this.setState({ repoInput: e.target.value })}
            />
            <button type="submit">
              {!this.state.loadingInput ? (
                <i className="fa fa-plus-circle" />
              ) : (
                <i className="fa fa-spinner fa-pulse" />
              )}
            </button>
            <span>{this.state.error ? 'Repositório Não existe!' : ''}</span>
          </Form>
          <RepoList
            repos={this.state.repos}
            handleClick={this.handleClickRepo}
            loading={this.state.loadingRepo}
            currentRepo={this.state.currentRepo.id}
          />
        </Sidebar>
        <section>
          <Header
            repo={this.state.currentRepo}
            handleChange={this.handleIssueType}
            type={this.state.issueType}
            loading={this.state.loadingIssue}
          />
          <IssueList issues={this.state.issues} />
        </section>
      </Container>
    );
  }
}
