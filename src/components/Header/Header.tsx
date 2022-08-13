import React, { useState } from 'react';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import { Icon } from '@mui/material';
import { Header as HeaderMain } from './Header.styled';
import { useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/theme/actions';

export const Header = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState('light');

  const handleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  const handleClick = () => {
    handleTheme();
    dispatch(toggleTheme(theme));
  };

  return (
    <HeaderMain>
      <div className='logo'>Where in the world?</div>
      <div className='theme'>
        <div onClick={handleClick}>
          <Icon><BedtimeOutlinedIcon /></Icon>
        </div>
        <p>Theme</p>
      </div>
    </HeaderMain>
  )
}

