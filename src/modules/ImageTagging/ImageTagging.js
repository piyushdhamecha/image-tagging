import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import {
  StyledContainer,
  StyledLeftPanel,
  StyledBodyContent,
  StyledRightPanel,
  StyledImageContainer,
  StyledImage,
  StyledPoint,
} from './ImageTaggingStyled';

import childImage from '../../images/child-image.jpg';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const classes = useStyles();

const ImageTagging = () => {
  let imageContainerRef = useRef(null);

  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  const [selectedPoints, setSelectedPoints] = useState([]);
  const [pointList, setPointList] = useState([]);

  useEffect(() => {
    if (selectedPoints.length === 4) {
      setPointList(prevState => [...prevState, selectedPoints]);
      setSelectedPoints([]);
    }
    console.log(pointList);
  }, [pointList, selectedPoints]);

  const handleMouseDown = e => {
    const position = {
      left: e.pageX,
      top: e.pageY,
    };

    setSelectedPoints(prevState => [...prevState, position]);
  };

  // refer https://codesandbox.io/s/72py4jlll6
  return (
    <StyledContainer>
      <StyledLeftPanel>
        <Fab color="extended" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
      </StyledLeftPanel>
      <StyledBodyContent>
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
      </StyledBodyContent>
      <StyledRightPanel>
        {pointList.map((points, index) => {
          return <div>Object {index + 1}</div>;
        })}
      </StyledRightPanel>
    </StyledContainer>
  );
};

export default ImageTagging;
