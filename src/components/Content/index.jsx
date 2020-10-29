import React from 'react';
import './style.scss';
import Button from '../Button';
import icons from '../icons/contentMenuIcons';
import avatar from '../../assets/images/avatar.png';
import pdfLogo from '../../assets/logo/google_drive_icon.png';
import buttonIcons from '../icons/buttonIcons.jsx';

const Content = () => (
  <div className="content">
    <div className="content-menu">
      <div className="content-menu-item"><icons.UnreadIcon /></div>
      <div className="content-menu-item"><icons.ExitIcon /></div>
      <div className="content-menu-item"><icons.AlarmIcon /></div>
      <div className="content-menu-item"><icons.WriteIcon /></div>
      <div className="content-menu-item"><icons.LabelIcon /></div>
      <div className="content-menu-item"><icons.TrashIcon /></div>
    </div>
    <div className="contetn-container">
      <div className="content-header">
        <div className="content-header-title">Nextmail New Look</div>
        <div className="content-author">
          <img className="author-avatar" src={avatar} alt="avatar" />
          <div className="autor-data">
            <span className="author-name">Salman Shah</span>
            <span className="author-email">
              <i>From: </i>
              shah.salman4@gmail.com
            </span>
            <time>11:00 AM, Today</time>
          </div>
        </div>
      </div>
      <div className="content-line" />
      <div className="content-body">
        Hello Adithya,
        <br />
        <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
        <br />
        <br />
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur.
        Excepteur sint occaecat cupidatat non proident.
        <br />
        <br />
        Cheers
        <br />
        DesignAvenger
      </div>
      <div className="content-line" />
      <div className="content-footer">
        <div className="footer-attacment">
          <div className="logo-pdf">
            <img src={pdfLogo} alt="pdfLogo" />
            <span className="logo-pdf-text">PDF</span>
          </div>
          <span className="footer-attacment-text">Sample.pdf</span>
        </div>
        <div className="footer-button">
          <Button
            btnClasses="button--center"
            icon={buttonIcons.ArrowIcon}
            iconClasses="mr-5"
            text="Reply"
          />
        </div>
        <div className="footer-button">
          <Button
            btnClasses="button--center button--empty"
            icon={buttonIcons.ArrowIcon}
            iconClasses="mr-5 scale-180"
            fill="#999EB1"
            text="Forward"
          />
        </div>
      </div>
    </div>
  </div>
);

export default Content;
