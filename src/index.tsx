import React from 'react';
import ReactDOM from 'react-dom';
import './scss-style.scss';

function App(): JSX.Element {
  const sum = (a: number, b: number): number => a + b;

  return (
    <React.Fragment>
      <div>
        <h1>React & TypeScript!</h1>
        <p>Test: {sum(15, 15)} </p>
      </div>
      <div className="scss-style" />
    </React.Fragment>
  );
}

export default App;

const root = document.getElementById('app-root');

ReactDOM.render(<App />, root);
