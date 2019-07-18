import React, { useEffect, useRef, useState } from 'react';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Icon from '@material-ui/icons/PhotoFilter';
import EyeIcon from '@material-ui/icons/RemoveRedEye';

import { Panel } from '../../../src/components';

import {
  StyledContainer,
  StyledLeftPanel,
  StyledBodyContent,
  StyledRightPanel,
  StyledImageContainer,
  StyledImage,
  StyledPoint,
  StyledSelectedPointContainer,
} from './ImageTaggingStyled';

import childImage from '../../images/child-image.jpg';

const ImageTagging = () => {
  let imageContainerRef = useRef(null);

  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [pointList, setPointList] = useState([]);
  const [drawValue, setDrawValue] = useState();

  useEffect(() => {
    if (selectedPoints.length === 4) {
      setPointList(prevState => [...prevState, selectedPoints]);
      setSelectedPoints([]);
      setDrawValue(null);
    }
    console.log(pointList);
  }, [pointList, selectedPoints]);

  const handleMouseDown = e => {
    if (!drawValue) {
      return;
    }

    const position = {
      left: e.pageX,
      top: e.pageY,
    };

    setSelectedPoints(prevState => [...prevState, position]);
  };

  const handleToggleButton = (event, newDrawValue) => {
    setDrawValue(newDrawValue);

    if (!newDrawValue) {
      setSelectedPoints([]);
    }
  };

  // refer https://codesandbox.io/s/72py4jlll6
  return (
    <StyledContainer>
      <StyledLeftPanel>
        <Panel title="Tools">
          <ToggleButtonGroup
            size="small"
            value={drawValue}
            exclusive
            onChange={handleToggleButton}
          >
            <ToggleButton key={1} value="draw">
              <Icon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Panel>
      </StyledLeftPanel>
      <StyledBodyContent>
        <Panel title="Image">
          <StyledImageContainer
            ref={imageContainerRef}
            onMouseDown={handleMouseDown}
          >
            <StyledImage src={childImage} />
            {selectedPoints.map(position => (
              <StyledPoint position={position} />
            ))}
          </StyledImageContainer>
          <div>{JSON.stringify(mousePosition)}</div>
        </Panel>
      </StyledBodyContent>
      <StyledRightPanel>
        <Panel title="Selected points">
          {pointList.map((points, index) => {
            return (
              <StyledSelectedPointContainer>
                <EyeIcon />
                Object {index + 1}
              </StyledSelectedPointContainer>
            );
          })}
        </Panel>
      </StyledRightPanel>
    </StyledContainer>
  );
};

export default ImageTagging;
