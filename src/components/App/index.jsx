import React from 'react';
import './style.scss';
import Header from '../Header';
import SideBarMenu from '../SideBarMenu';
import MailBox from '../MailBox';
import Profile from '../Profile';
import Content from '../Content';

const App = () => (
  <div className="app">
    <Header />
    <main>
      <div className="sidebar-container">
        <SideBarMenu />
        <Profile />
      </div>
      <MailBox />
      <Content />
    </main>
  </div>
);

export default App;
