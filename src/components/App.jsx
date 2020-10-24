import React from 'react';
import Header from './Header';
import SideBarMenu from './SideBarMenu';
import Mailbox from './Mailbox';
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
          <Mailbox />
          <Content />
        </main>
    </div>
  );
}

export default App;
