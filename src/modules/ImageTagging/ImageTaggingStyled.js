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
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const StyledImage = styled.img`
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
`;

export const StyledOverlay = styled.div`
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  background: black;
  opacity: 0.5;
  position: absolute;
  display: block;
  z-index: 1;
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
  z-index: 2;
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

export const StyledSelectedArea = styled.div`
  position: absolute;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
  border: 1px dashed white;
  background: url(${({ backgroundImage }) => backgroundImage}) -${({ left }) =>
      left}px -${({ top }) => top}px / ${({ imageWidth }) => imageWidth}px
    ${({ imageHeight }) => imageHeight}px no-repeat rgb(255, 255, 255);
  z-index: 4;
`;
