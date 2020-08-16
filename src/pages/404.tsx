import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) => ({}));

const _404Page: React.FC = () => {
  const classes = styles();
  return (
    <h1>404 Page Not Found</h1>
  );
}

export default _404Page;