import React, { useState } from 'react';
import cn from 'classnames';
import './index.scss';
import Search from '../Search';
import AttachmentIcon from '../icons/AttachmentIcon'
import messagesData from './messages-data';

const MailBox = () => {

// [{ id, autor, theme, time, isRead }, {...}]

  const [messages] = useState(messagesData);
  const [messageSelected, setMessageSelected] = useState(1);
  console.log(messageSelected)
  const selectMessageHandler = (id) => () => {
    setMessageSelected(id);
  };

  const renderMessage = ({ id, author, theme, time, isRead, hasAttachment }) => {
    const makretClasses = cn({ 'message-marker': true, 'message-marker--read': isRead });
    const messageClasses = cn({ message: true, 'message--selected': id === messageSelected });
    return (
      <div key={id} className={messageClasses} onClick={selectMessageHandler(id)}>
        <div className={makretClasses}></div>
        <div className="message-preview">
          <span className="message-theme">{theme}</span>
          <time className="message-time">{time}</time>
          <div className="message-break"></div>
          <span className="message-autor">{author}</span>
          {hasAttachment && <AttachmentIcon />}
        </div>
      </div>
    );
  };

  return (
    <div className="mailBox">
      <div className="mailBox-search">
        <Search />
      </div>
      <div className="mailBox-header">
        <span>Inbox</span>
        <div className="mailBox-sort-select">
          Sort by:
        </div>
      </div>
      <div className="mailBox-messages">
        {messages.map(renderMessage)}
      </div>
    </div>
  );
};

export default MailBox;