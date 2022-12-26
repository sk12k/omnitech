import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoR } from '../../../assets/images/logo.svg';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
      <h1 className="m-0">
        <Link to="/omnitech">
          <LogoR />
        </Link>
      </h1>
    </div>
  );
}

export default Logo;