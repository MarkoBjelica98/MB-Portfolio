import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef(null);
  const activeBox = useRef(null);

  const updateActiveBox = (element) => {
    if (!element || !activeBox.current) return;

    activeBox.current.style.top = `${element.offsetTop}px`;
    activeBox.current.style.left = `${element.offsetLeft}px`;
    activeBox.current.style.width = `${element.offsetWidth}px`;
    activeBox.current.style.height = `${element.offsetHeight}px`;
  };

  useEffect(() => {
    if (lastActiveLink.current) {
      updateActiveBox(lastActiveLink.current);
    }

    const handleResize = () => {
      if (lastActiveLink.current) {
        updateActiveBox(lastActiveLink.current);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const activeCurrentLink = (event) => {
    const currentLink = event.currentTarget;

    lastActiveLink.current?.classList.remove('active');
    currentLink.classList.add('active');
    lastActiveLink.current = currentLink;

    updateActiveBox(currentLink);
  };

  const navItems = [
    {
      label: 'Home',
      link: '#home',
      className: 'nav-link active',
      isDefault: true,
    },
    {
      label: 'About',
      link: '#about',
      className: 'nav-link',
    },
    {
      label: 'Projects',
      link: '#projects',
      className: 'nav-link',
    },
    {
      label: 'Work',
      link: '#work',
      className: 'nav-link',
    },
    {
      label: 'Contact',
      link: '#contact',
      className: 'nav-link md:hidden',
    },
  ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link, className, isDefault }, key) => (
        <a
          href={link}
          key={key}
          ref={isDefault ? lastActiveLink : null}
          className={className}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}

      <div className='active-box' ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
