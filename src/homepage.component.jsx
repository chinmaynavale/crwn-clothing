import React from 'react';
import './homepage.styles.scss';

const HomePage = () => {
  const menuItem = ['HATS', 'JACKETS', 'SNEAKERS', 'WOMENS', 'MENS'];

  return (
    <div className="homepage">
      <div className="directory-menu">
        {menuItem.map((item) => {
          return (
            <div key={item} className="menu-item">
              <div className="content">
                <h1 className="title">{item}</h1>
                <span className="subtitle">SHOP NOW</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HomePage;
