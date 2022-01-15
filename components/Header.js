import { useState } from 'react';
import Link from 'next/link';
import {
  RiCloseCircleLine,
  RiMenu2Fill,
  RiLinkedinBoxFill,
  RiTwitterFill,
  RiGithubFill,
  RiInstagramLine,
  RiFacebookCircleFill,
} from 'react-icons/ri';
const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <header className='header'>
      <div className='container'>
        <div className='navbar'>
          <div className='navbar__logo'>
            <Link href='/'>Monir Hossain</Link>
          </div>
          <ul className={click ? 'navbar__nav active' : 'navbar__nav'}>
            <div className='mobile-logo' onClick={closeMobileMenu}>
              <Link href='/'>
                <a>Monir Hossain</a>
              </Link>
            </div>

            <li className='option' onClick={closeMobileMenu}>
              <Link href='/about'>About</Link>
            </li>

            <li className='option' onClick={closeMobileMenu}>
              <Link href='/portfolio'>Portfolio</Link>
            </li>

            <li className='option' onClick={closeMobileMenu}>
              <Link href='/website-templates'>Free Website Templates </Link>
            </li>

            <li className='option' onClick={closeMobileMenu}>
              <Link href='/blog'>Blog</Link>
            </li>

            <li className='option' onClick={closeMobileMenu}>
              <Link href='/contact'>Contact</Link>
            </li>

            {/* <li className='option btn-fbg' onClick={closeMobileMenu}>
              <a
                target='_blank'
                href='https://facebook.com/groups/monirhossain/'
                rel='noreferrer'
              >
                Fiverr
              </a>
            </li> */}

            <div className='header-bottom'>
              <ul>
                <li>
                  <a
                    target='_blank'
                    href='https://twitter.com/getmonir/'
                    rel='noreferrer'
                  >
                    <RiTwitterFill />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://facebook.com/getmonir/'
                    rel='noreferrer'
                  >
                    <RiFacebookCircleFill />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://instagram.com/getmonir/'
                    rel='noreferrer'
                  >
                    <RiInstagramLine />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://linkedin.com/in/getmonirh/'
                    rel='noreferrer'
                  >
                    <RiLinkedinBoxFill />
                  </a>
                </li>
                <li>
                  <a
                    target='_blank'
                    href='https://github.com/getmonir/'
                    rel='noreferrer'
                  >
                    <RiGithubFill />
                  </a>
                </li>
              </ul>
            </div>
          </ul>

          <div
            className={click ? 'navbar__toggler active' : 'navbar__toggler'}
            onClick={handleClick}
          >
            {click ? <RiCloseCircleLine /> : <RiMenu2Fill />}
          </div>
        </div>
      </div>
      <div
        className={click ? 'mobile-body-overly active' : 'mobile-body-overly'}
        onClick={closeMobileMenu}
      ></div>
    </header>
  );
};

export default Header;
