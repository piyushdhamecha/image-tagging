import _ from 'lodash';

import React, { useEffect, useRef, useState } from 'react';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import Icon from '@material-ui/icons/PhotoFilter';
import EyeIcon from '@material-ui/icons/RemoveRedEye';
import DoneIcon from '@material-ui/icons/Done';

import { Panel } from '../../components';
import { getHeight, getWidth } from '../../utils';

import {
  StyledContainer,
  StyledLeftPanel,
  StyledBodyContent,
  StyledRightPanel,
  StyledImageContainer,
  StyledImage,
  StyledPoint,
  StyledSelectedPointContainer,
  StyledOverlay,
  StyledSelectedArea,
} from './ImageTaggingStyled';

import childImage from '../../images/child-image.jpg';

const ImageTagging = () => {
  let imageContainerRef = useRef(null);
  let imageRef = useRef(null);

  const [selectedPoints, setSelectedPoints] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [drawValue, setDrawValue] = useState();

  useEffect(() => {
    if (selectedPoints.length === 4) {
      const minLeft = _.minBy(selectedPoints, 'left').left;
      const minTop = _.minBy(selectedPoints, 'top').top;
      const height = getHeight(selectedPoints);
      const width = getWidth(selectedPoints);

      const area = {
        height,
        width,
        minLeft,
        minTop,
        visible: true,
      };

      setSelectedAreas(prevState => [...prevState, area]);
      setSelectedPoints([]);
    }
  }, [selectedAreas, selectedPoints]);

  const handleMouseDown = e => {
    if (!drawValue) {
      return;
    }

    const {
      current: { offsetLeft, offsetTop },
    } = imageContainerRef;

    const position = {
      left: e.pageX - offsetLeft,
      top: e.pageY - offsetTop,
    };

    setSelectedPoints(prevState => [...prevState, position]);
  };

  const handleToggleButton = (event, newDrawValue) => {
    setDrawValue(newDrawValue);

    if (!newDrawValue) {
      setSelectedPoints([]);
    }
  };

  const handleTagObjectClick = selectedIndex => () => {
    setSelectedAreas(prevState =>
      _.map(prevState, (area, index) => {
        if (selectedIndex === index) {
          return {
            ...area,
            visible: !area.visible,
          };
        }

        return area;
      })
    );
  };

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
            {drawValue && (
              <StyledOverlay
                height={imageRef && imageRef.current && imageRef.current.height}
                width={imageRef && imageRef.current && imageRef.current.width}
              />
            )}
            <StyledImage src={childImage} ref={imageRef} />
            {selectedPoints.map(position => (
              <StyledPoint position={position} />
            ))}
            {drawValue &&
              _.map(
                selectedAreas,
                ({ minLeft, minTop, height, width, visible }) => {
                  return (
                    <StyledSelectedArea
                      left={minLeft}
                      top={minTop}
                      height={height}
                      width={width}
                      backgroundImage={childImage}
                      imageHeight={
                        imageRef && imageRef.current && imageRef.current.height
                      }
                      imageWidth={
                        imageRef && imageRef.current && imageRef.current.width
                      }
                      visible={visible}
                    />
                  );
                }
              )}
          </StyledImageContainer>
        </Panel>
      </StyledBodyContent>
      <StyledRightPanel>
        <Panel title="Selected points">
          {selectedAreas.map(({ visible }, index) => {
            return (
              <StyledSelectedPointContainer
                onClick={handleTagObjectClick(index)}
              >
                <span>
                  <EyeIcon />
                </span>
                <span>Object {index + 1}</span>
                {visible && (
                  <span>
                    <DoneIcon color={'secondary'} />
                  </span>
                )}
              </StyledSelectedPointContainer>
            );
          })}
        </Panel>
      </StyledRightPanel>
    </StyledContainer>
  );
};

export default ImageTagging;
