import './App.module.css';
import React from 'react';
import { lazy, Suspense } from 'react';
import { Container } from './index';

import preloader from '../images/img/loading.gif';

const Landing = lazy(() => import('../components/Landing'));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <img
            src={preloader}
            alt="Preloader"
            style={{ position: 'absolute', top: '10%', left: '10%' }}
          />
        }
      >
        <Container>
          <Landing />
        </Container>
      </Suspense>
    </>
  );
}

export default App;
