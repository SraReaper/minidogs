import React from 'react';
import { useDispatch } from 'react-redux';
import Content from './Components/Content';
import Header from './Components/Header';
import './App.css';
import { autoLogin } from './store/login';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;
