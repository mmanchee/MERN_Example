import React, { useState } from 'react'
import { Avatar, Paper, Grid, Typography, Button, Container, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import Icon from './Icon';
import { signin, signup } from '../../actions/auth';
import { Auth } from '../../actions/actionTypes';
import useStyles from './styles';
import Input from './Input';

const SignUp = () => {
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSingup) => !prevIsSingup);
    handleShowPassword(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: 'AUTH', data: { result, token }});

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  }

  const googleError = () => alert('Google Sign in was unsuccessful. Try again later.');

  return (
    <Container component='main' maxWidth='xs'>
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant='h5'>{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            { isSignup && (
              <>
                <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half></Input>
                <Input name='lastName' label='Last Name' handleChange={handleChange} half></Input>
              </>
            )}
            <Input name='email' label='Email Address' handleChange={handleChange} type='email' />
            <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            { isSignup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' /> }
          </Grid>
          <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
            { isSignup ? 'Sign Up' : 'Sign In' }
          </Button>
          <GoogleLogin 
            clientId={ process.env.REACT_APP_GOOGLE_ID }
            render={(renderProps) => (
              <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant='contained'>Google Sign In</Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy='single_host_origin'
          />
          <Grid container justify='flex-end'>
            <Grid item>
              <Button onClick={switchMode}>
                { isSignup ? 'Already have an account? Sign In' : 'Do not have an account? Sign Up' }
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;
