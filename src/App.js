import React from 'react';
import Product from './Product';
import Price from './Price';
import Description from './Description';
import Name from './Name';
import './App.css';
import Image from './Image';
const App = () => {
  const firstName = "elaa"; 

  return (
    <div className="app">
      <div className="greeting">
        {firstName ? (
          <>
            <p>Hello, {firstName}!</p>
          </>
        ) : (
          <p>Hello, there!</p>
        )}
      </div>
      <div className="card">
        <Image />
        <div className="card-body">
          <Product/>
        </div>
      </div>
      
    </div>
  );
}

export default App;


