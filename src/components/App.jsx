import './App.module.css';
import React from 'react';
import { lazy } from 'react';
import { Container } from './index';

const Landing = lazy(() => import('../components/Landing'));

function App() {
  return (
    <>
      <Container>
        <Landing />
      </Container>
    </>
  );
}

export default App;
