import React from "react";

const Footer = props => {
  const listItems = props.list.map(item => <li>{item}</li>);
  return <ul className="list-unstyled">{listItems}</ul>;
};

export default Footer;
