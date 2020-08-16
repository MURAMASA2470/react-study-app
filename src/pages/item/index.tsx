import React from 'react';
import Layout from '../../components/layout/layout';
import { makeStyles, Theme } from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) => ({}));

interface Props {}

const ItemList: React.FC<Props> = props => {
  const classes = styles();
  return (
    <Layout pageTitle="商品一覧">
      <h1>Content</h1>
    </Layout>
  );
}

export default ItemList;