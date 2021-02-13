import React, { useEffect } from 'react';
// Redux
import { useDispatch } from 'react-redux';
import { loadGames } from '../actions/gamesActions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  });
  return <h1>Home</h1>;
};

export default Home;
