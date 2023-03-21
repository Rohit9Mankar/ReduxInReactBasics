import { Fragment } from 'react';
import Auth from './components/Auth';
import Counter from './components/Counter';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';

function App() {
  const isLoggedIn=useSelector(state => state.auth.isAuthenticate);

  return (
    <Fragment>
      <Header />
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <UserProfile />}
      <Counter />
    </Fragment>

  );
}

export default App;
