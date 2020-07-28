import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { contentStyles } from '../../config';

/**
 * @return {JSX}
 */
const ContentStyles = ({ name, children }) => {
  if (!contentStyles[name]) {
    return children;
  }

  const addClassName = css(contentStyles[name]).toString();

  // The only child with className prop
  if (React.Children.only(children) && children.props.className) {
    return React.cloneElement(children, {
      ...children.props,
      className: `${children.props.className.toString()} ${addClassName}`,
    });
  }

  return (
    <div className={addClassName}>
      {children}
    </div>
  );
};

ContentStyles.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

export default ContentStyles;
