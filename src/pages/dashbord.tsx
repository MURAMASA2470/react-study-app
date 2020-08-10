import React from 'react';
import Layout from './layout';
import { makeStyles, Theme } from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) => ({}));

interface Props {}

const Dashbord: React.FC<Props> = props => {
  const classes = styles();
  return (
    <Layout pageTitle="Dashbord">
      <h1>Content</h1>
    </Layout>
  );
}

export default Dashbord;