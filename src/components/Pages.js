import React from 'react';
// import Header from './';

function Pages({currentPage}) {
    const renderPage = () => {
      switch (currentPage.name) {
        case 'about me':
          return <About />;
        case 'portfolio':
          return <Portfolio />;
        case 'contact':
          return <Contact />;
        case 'resume':
          return <Resume />;
        default:
          return <About />;
      }
    };
  
    return (
      <section>
        <h2>{(currentPage.name)}</h2>
  {renderPage()}
      </section>
    );  
}

export default Pages;
