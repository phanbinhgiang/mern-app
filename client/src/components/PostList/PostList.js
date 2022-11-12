import { Grid } from '@material-ui/core';
import React from 'react';

const PostList = () => {
  return (
    <Grid container spacing={2} alignItems="stretch">
      <Grid item xs={12} sm={6}>
        <p>This post 1</p>
      </Grid>
      <Grid item xs={12} sm={6}>
        <p>This post 2</p>
      </Grid>
      <Grid item xs={12} sm={6}>
        <p>This post 3</p>
      </Grid>
    </Grid>
  );
};

export default PostList;
