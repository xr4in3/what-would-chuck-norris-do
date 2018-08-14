import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      
      <h1 className="header__title">What Would <img src="./img/chuck-norris.png"/> Do?</h1> 
      {props.subtitle && <blockquote className="blockquote"><p className="lead">"<em>{props.subtitle}</em>"</p><footer className="blockquote-footer">-Famous fact about <cite title="Source Title">Chuck Norris</cite></footer>
</blockquote>}
    
    <hr />
    </div>
  );
};

Header.defaultProps = {
  title: 'What Would Chuck Norris Do?',
  
};

export default Header;