import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  const {
    currentTab,
    handleTabChange,

  } = props;

    useEffect(() => {
      document.title = capitalizeFirstLetter(currentTab.name);
    }, [currentTab]);


  return (

   
    <nav>
    <ul className="nav nav-tabs">
      <li className="nav-item">
          <a
            href="#about"
            onClick={() => handleTabChange('About')}
            // Check to see if the currentTab is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#portfolio"
            onClick={() => handleTabChange('Portfolio')}
            // Check to see if the currentTab is `Portfolio`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            onClick={() => handleTabChange('Contact')}
            // Check to see if the currentTab is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#resume"
            onClick={() => handleTabChange('Resume')}
            // Check to see if the currentTab is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            CV
          </a>
        </li>
    </ul>
    </nav>

  );
}

export default Nav;
