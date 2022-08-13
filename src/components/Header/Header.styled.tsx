import React from 'react';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 24px 72px 0;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.elementColor};
  color: ${({ theme }) => theme.colors.textColor};

  .logo {
    font-size: 24px;
    font-weight: bold;
  }

  .theme {
    cursor: pointer;
    display: flex;
    font-weight: bold;
  }
`;
