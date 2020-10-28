import React from 'react';
import Header from './Header';
import SideBarMenu from './SideBarMenu';
import MailBox from './MailBox';
import Content from './Content';
import Profile from './Profile';

const App = () => {
  return (
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
}

export default App;
