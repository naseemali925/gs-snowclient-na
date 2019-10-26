import React from 'react'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import ButtonAppBar from './ButtonAppBar'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'

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

export default function Login() {
  const classes = useStyles();

  async function handleClick(e) {
    e.preventDefault();
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    let instanceId = document.getElementById('instanceId').value;
    try {
      const options = {
        url: `https://${instanceId}.service-now.com/api/now/v2/table/sys_user?user_name=${username}`,
        method: 'get',
        auth: {
          username: `${username}`,
          password: `${password}`
        }
      };
      axios(options).then((val) => {
        var res = {
          raw: val,
          status: val.status
        }
        console.log('Authenticated', res);
      }, (rej) => {
        console.log(rej);
      });
    } catch (e) {
      console.log(e)
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
            <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <Button style={{ width: "100%", margin: '0' }} variant="contained" color="primary" size="large" className={classes.button} onClick={handleClick}>
                Login
            </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </React.Fragment>
  );
}