import React from 'react';

import { Container, ProfileCircle, SearchInput, MessageIcon } from './styles';

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src='https://avatars0.githubusercontent.com/u/20098968?s=460&u=db2ae0cd1d9f3d84b5ba9ef25319371f683005cb&v=4'  />
      <SearchInput placeholder='Pesquisar' />
      <MessageIcon />
    </Container>
  );
}

export default MobileHeader;