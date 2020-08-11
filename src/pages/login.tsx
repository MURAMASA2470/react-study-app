import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, withStyles, Theme, WithStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useHistory, RouteComponentProps} from 'react-router-dom'

const styles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(1, 0, 2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    textAlign: 'center'
  }
}));

interface Props {}

const Login: React.FC<Props> = props => {
  const history = useHistory();
  const classes = styles();

  const onSubmit = (): void => {
    history.push('/');
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {process.env.REACT_APP_APPLICATION_NAME}
        </Typography>
        <div className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="パスワードを記憶する"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            {"ログイン"}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {"パスワードを忘れた場合"}
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"新規作成"}
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      <Box pt={4}>
        <footer className={classes.footer}>
            <Container maxWidth="sm">
                Copyright © MURAMASA2470 {new Date().getFullYear()}
            </Container>
        </footer>
      </Box>
    </Container>
  );
}

export default Login;