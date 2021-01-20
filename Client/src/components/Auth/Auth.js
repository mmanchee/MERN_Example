import React, { useState } from 'react'
import { Avatar, Paper, Grid, Typography, Button, Container, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons';

import Icon from './icon';
import { signin, signup } from '../../actions/auth';
import { Auth } from '../../actions/actionTypes';
import useStyles from './styles';
import Input from './Input';

const Auth = () => {
  const classes = useStyles();

  const handleSubmit = () => {

  };

  const handleChange = () => {

  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {
              isSignup && (
                <>
                  <Input name='firstName' label='First Name' handleChange={handleChanger} autoFocus xs={half}></Input>
                  <Input name='firstName' label='First Name' handleChange={handleChanger} autoFocus xs={6}></Input>
                </>
              )
            }
          </Grid>
        </form>
      </Paper>
    </Container>
  )
};

export default Auth;
