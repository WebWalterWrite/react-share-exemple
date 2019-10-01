import React from 'react';
import FakePost from './components/fakers/FakePost';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo}  alt="logo" />
        <h1>React-Share by</h1>
      </header>
      <main>
        <FakePost />
      </main>
      Photo par Kim Daniels sur Unsplash
    </div>
  );
}

export default App;
