import React from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  -webkit-box-shadow: 0px 4px 5px -5px rgba(0, 0, 0, 0.6) inset;
  -moz-box-shadow: 0px 4px 5px -5px rgba(0, 0, 0, 0.6) inset;
  box-shadow: 0px 4px 5px -5px rgba(0, 0, 0, 0.6) inset;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bodyColor};
`