import Counter from './components/Counter';
import { Fragment } from 'react';
import Auth from './components/Auth';
import Header from './components/Header';
import { useSelector } from 'react-redux';

function App() {

  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Fragment>
      {isAuthenticated && <Header></Header>}
      {!isAuthenticated && <Auth></Auth>}
      <Counter />
    </Fragment>
    
  );
}

export default App;
