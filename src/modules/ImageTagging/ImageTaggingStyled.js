import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
`;

export const StyledLeftPanel = styled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;

export const StyledBodyContent = styled.div`
  flex: 1;
`;

export const StyledRightPanel = styled.div`
  flex: 0;
  padding: 0 10px;
`;

export const StyledImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const StyledImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const StyledPoint = styled.div`
  position: absolute;
  left: ${({ position }) => position.left - 5}px;
  top: ${({ position }) => position.top - 5}px;
  height: 10px;
  width: 10px;
  border-radius: 5px;
  background-color: yellow;
  box-shadow: 0 0 0 1px red;
`;
