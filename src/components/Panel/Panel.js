import React from 'react';

import {
  StyledContainer,
  StyledTitleContainer,
  StyledBodyContainer,
} from './PanelStyled.js';

const Panel = ({ title, children }) => {
  return (
    <StyledContainer>
      {title && <StyledTitleContainer>{title}</StyledTitleContainer>}
      <StyledBodyContainer>{children}</StyledBodyContainer>
    </StyledContainer>
  );
};

export default Panel;
