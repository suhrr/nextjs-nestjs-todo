import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import AuthService from 'src/services/AuthService';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useUserDispatch, useUserState } from 'contexts/UserContext';

const Header = () => {
  const router = useRouter();
  const user = useUserState();
  const dispatch = useUserDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  useEffect(() => {
    if (user === undefined) {
      return;
    }
    setIsLoggedIn(true);
  }, [user, isLoggedIn]);

  const logout = () => {
    new AuthService().logout();
    dispatch({ type: 'DELETE_USER' });
    router.push('/login');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tasks
          </Typography>
          <Button color="inherit">
            {isLoggedIn ? (
              <span onClick={logout}>Logout</span>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
