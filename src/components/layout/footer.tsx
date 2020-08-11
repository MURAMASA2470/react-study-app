import React from 'react';
import { Box, Container } from '@material-ui/core/';

import { makeStyles, Theme } from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    textAlign: 'center'
  }
}));

interface Props {}

const Footer: React.FC<Props> = props => {
  const classes = styles();
  const authorName: (string | undefined) = process.env.REACT_APP_AUTHOR_NAME;
  return (
    <Box pt={4}>
      <footer className={classes.footer}>
      <Container maxWidth="sm">
        {"Copyright ©"} {authorName} {new Date().getFullYear()}
      </Container>
      </footer>
    </Box>
  )
}

export default Footer;