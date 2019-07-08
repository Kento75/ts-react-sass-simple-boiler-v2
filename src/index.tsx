import React from 'react';
import ReactDOM from 'react-dom';
import './scss-style.scss';

// import でもできるが面倒なので、妥協して require を使用
const reactImg = require('./assets/img/react.png');

function App(): JSX.Element {
  const sum = (a: number, b: number): number => a + b;

  return (
    <React.Fragment>
      <div>
        <h1>React & TypeScript!</h1>
        <p>Test: {sum(15, 15)} </p>
      </div>
      <div className="scss-style" />
      <div className="sass-img" />
      <div>
        <img src={reactImg} alt="react" />
      </div>
    </React.Fragment>
  );
}

export default App;

const root = document.getElementById('app-root');

ReactDOM.render(<App />, root);
