import React, { useState } from 'react'
import { Avatar, Paper, Grid, Typography, Button, Container, TextField } from '@material-ui/core';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// import Icon from './icon';
// import { signin, signup } from '../../actions/auth';
// import { Auth } from '../../actions/actionTypes';
import useStyles from './styles';
import Input from './Input';

const SignUp = () => {
  const [isSignup, setIsSignup] = useState(false);
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);

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
        </form>
      </Paper>
    </Container>
  )
};

export default SignUp;
