import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { AuthActions } from '../store';

const Header = () => {
  const isLoggedIn=useSelector(state => state.auth.isAuthenticate);
  const dispatch=useDispatch();

  const logoutHandler=(event)=>{
    event.preventDefault();
    dispatch(AuthActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isLoggedIn && (<li>
            <a href='/'>My Products</a>
          </li>)}
          {isLoggedIn && (<li>
            <a href='/'>My Sales</a>
          </li>)}
          {isLoggedIn && (<li>
            <button onClick={logoutHandler}>Logout</button>
          </li>)}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
