import React, { FC, PropsWithChildren } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link href="https://reactjs.org">Learn React</Link>
      </Header>
    </div>
  );
}

interface HeaderProps {
  logo?: string;
}

interface LinkProps {
  href: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

const Header: FC<PropsWithChildren<HeaderProps>> = ({ children, logo }) => (
  <header className="App-header">
    {Boolean(logo) ? (
      <img src={logo} className="App-logo" alt="logo" />
    ) : (
      'There is no Logo.'
    )}
    {children}
  </header>
);

const Link: FC<PropsWithChildren<LinkProps>> = ({ children, ...restProps }) => {
  return (
    <a className="App-link" {...restProps}>
      {children}
    </a>
  );
};

Link.defaultProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
};

export default App;
