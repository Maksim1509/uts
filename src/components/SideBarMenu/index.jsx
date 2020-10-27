import React from 'react';
import cn from 'classnames';
import Button from '../Button';
import icon from '../../Shape.svg';
import navIcons from '../icons/navIcons';
import './sideBarMenu.scss';

const navItems = [
  { 
    icon: navIcons.inboxIcon,
    name: 'Inbox (200)',
  },
  { 
    icon: navIcons.sentIcon,
    name: 'Sent Mail',
  },
  { 
    icon: navIcons.draftIcon,
    name: 'Drafts',
  },
  { 
    icon: navIcons.trashIcon,
    name: 'Trash (2)',
  },
  { 
    icon: navIcons.attachmentsIcon,
    name: 'Attachments',
  },
  { 
    icon: navIcons.moreIcon,
    name: 'More…',
  },
];

const renderNav = (activeItem, handler) => ({ icon, name }) => (
  <li key={name}>
    <a className={getItemClasses(name, activeItem)} href="/" id={name} onClick={handler(name)}>
      {icon(getIconClass(name, activeItem))}
      {name}
    </a>
  </li>
);

const getItemClasses = (id, activeId) => cn({
  'nav-item': true,
  'nav-item--active': id === activeId,
})

const getIconClass = (id, activeId) => cn({
  'nav-icon': true,
  'nav-icon--active': id === activeId,
});

const SideBarMenu = () => {
  const [activeItem, setActive] = React.useState('Inbox (200)');
  const handleChangeActive = (id) => (e) => {
    e.preventDefault();
    setActive(id);
  }

  return (
    <aside className="sidebar">
      <Button text='Compose' icon={icon} />
      <span className="nav-title">MAILBOX</span>
      <ul className="nav">
        {navItems.map(renderNav(activeItem, handleChangeActive))}
      </ul>
      <div className="sidebar-lists">
        LISTS
        <span>Linkedn</span>
      </div>
      <div className="sidebar-labels">
        LABELS
        <ul className="labels-list">
          <li className="labels-item"><div className="marker marker--purple"></div>Personal (2)</li>
          <li className="labels-item"><div className="marker marker--orange"></div>Clients</li>
          <li className="labels-item"><div className="marker marker--yellow"></div>Work (2)</li>
          <li className="labels-item"><div className="marker marker--blue"></div>Friends</li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBarMenu;