import React from 'react';

import { 
  Container, 
  Wrapper, 
  LinkedInIcon, 
  SearchInput, 
  HomeIcon, 
  NotificationsIcon, 
  ProfileCircle,
  CaretDownIcon 
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder="Pesquisar" />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon />
              <span>Início</span>
            </button>

            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>

            <button>
              <ProfileCircle src="https://avatars0.githubusercontent.com/u/20098968?s=460&u=db2ae0cd1d9f3d84b5ba9ef25319371f683005cb&v=4" />
              <span>
                Eu <CaretDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;