import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import LinearProgress from '@material-ui/core/LinearProgress'
import ButtonAppBar from './ButtonAppBar'
import { makeStyles } from '@material-ui/core/styles'
import { toast } from 'react-toastify'
import Error from '@material-ui/icons/Error'
import Snow from '../services/Snow'
import Logger from '../services/Logger'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: "16px"
  },
  input: {
    margin: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Login(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  let loggedIn = props.globalState.isLoggedIn();
  if (loggedIn) props.history.push('/dashboard');
  async function handleClick(e) {
    e.preventDefault();
    setLoading(true);
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let instanceId = document.getElementById('instanceId').value;
    try {
      let res = await Snow.login(username, password, instanceId)
      if (res.status === 200) {
        props.globalState.setLoggedIn(true);
        props.globalState.username = username;
        props.globalState.password = password;
        props.globalState.instanceId = instanceId;
        toast.success(<div>Logged in!</div>);
        setLoading(false)
        props.history.push('/dashboard')
      }
      Logger.log('Authenticated', res);
    } catch (e) {
      toast.error(<div><Error /> Login failed!!</div>);
      setLoading(false)
      Logger.log("Error");
    }
  }

  return (
    <React.Fragment>
      <ButtonAppBar />
      <form className={classes.container} style={{ justifyContent: "center", alignItems: "center" }} noValidate autoComplete="off">
        <Paper className={classes.paper} style={{ width: "500px" }}>
          <Grid container spacing={1} direction="column" >
            <Grid item xs={12}>
              <TextField
                style={{ width: "100%" }}
                id="username"
                label="Username"
                className={classes.textField}
                type="text"
                name="username"
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: "100%" }}
                id="password"
                label="Password"
                className={classes.textField}
                type="password"
                name="pwd"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                style={{ width: "100%" }}
                id="instanceId"
                defaultValue="dev78916"
                label="Instance name"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
              <Button style={{ width: "100%", margin: '0' }} disabled={loading ? true : false} variant="contained" color="primary" size="large" className={classes.button} onClick={handleClick}>
                Login
            </Button>
              {loading ?
                <LinearProgress variant="query" style={{ width: "100%", margin: '0' }} />
                : ""
              }
            </Grid>
          </Grid>
        </Paper>
      </form>
    </React.Fragment>
  );
}