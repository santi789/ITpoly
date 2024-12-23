import React from 'react';

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <h1 className="display-4 text-primary">Welcome to IT Department</h1>
        <p className="lead">Explore our programs and activities at Lanna Polytechnic Technology College.</p>
        <img 
          src="/images/it-department.jpg" 
          alt="IT Department" 
          className="img-fluid rounded mt-4 shadow" 
          style={{ maxWidth: '70%' }} 
        />
      </div>
    </div>
  );
};

export default Home;
