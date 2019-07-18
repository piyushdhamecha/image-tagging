import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  background-color: #343434;
`;

export const StyledLeftPanel = styled.div`
  flex: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 8px solid gray;
`;

export const StyledBodyContent = styled.div`
  flex: 1;
`;

export const StyledRightPanel = styled.div`
  flex: 0;
  min-width: 200px;
  border-left: 8px solid gray;
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

export const StyledSelectedPointContainer = styled.div`
  display: flex;
  padding: 5px;
  color: white;
  align-items: center;
  padding: 7px 0;
  border-bottom: 1px dashed gray;

  & > svg {
    padding-right: 10px;
  }
`;
