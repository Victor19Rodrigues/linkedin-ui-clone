import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars0.githubusercontent.com/u/20098968?s=460&u=db2ae0cd1d9f3d84b5ba9ef25319371f683005cb&v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Victor Rodrigues da Silva</h1>
        <h2>Full Stack @Beyond Solutions</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">1.558</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">388</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
