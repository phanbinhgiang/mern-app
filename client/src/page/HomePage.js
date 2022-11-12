import { Container } from '@material-ui/core';
import React from 'react';
import Header from '../components/Header/Header';
import PostList from '../components/PostList/PostList';

const HomePage = () => {
  return (
    <Container maxWidth="lg" className="">
      <Header />
      <PostList />
    </Container>
  );
};

export default HomePage;
