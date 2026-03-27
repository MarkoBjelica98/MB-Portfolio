import PropTypes from 'prop-types';

const handleAnchorNavigation = (event, href, onClick) => {
  if (onClick) {
    onClick(event);
  }

  if (!href || !href.startsWith('#')) return;

  event.preventDefault();

  const targetId = href.slice(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const ButtonPrimary = ({
  href,
  target = '_self',
  label,
  icon,
  classes = '',
  download = false,
  onClick,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        download={download}
        onClick={(event) => handleAnchorNavigation(event, href, onClick)}
        className={`btn btn-primary ${classes}`}
      >
        {label}

        {icon ? (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        ) : null}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`btn btn-primary ${classes}`}>
      {label}

      {icon ? (
        <span className='material-symbols-rounded' aria-hidden='true'>
          {icon}
        </span>
      ) : null}
    </button>
  );
};

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  download: PropTypes.bool,
  onClick: PropTypes.func,
};

const ButtonOutline = ({
  href,
  target = '_self',
  label,
  icon,
  classes = '',
  onClick,
}) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
        onClick={(event) => handleAnchorNavigation(event, href, onClick)}
        className={`btn btn-outline ${classes}`}
      >
        {label}

        {icon ? (
          <span className='material-symbols-rounded' aria-hidden='true'>
            {icon}
          </span>
        ) : null}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`btn btn-outline ${classes}`}>
      {label}

      {icon ? (
        <span className='material-symbols-rounded' aria-hidden='true'>
          {icon}
        </span>
      ) : null}
    </button>
  );
};

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.string,
  classes: PropTypes.string,
  onClick: PropTypes.func,
};

export { ButtonPrimary, ButtonOutline };
