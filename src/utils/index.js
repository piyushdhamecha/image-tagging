import _ from 'lodash';

export const getHeight = points => {
  const minTop = _.minBy(points, 'top').top;
  const maxTop = _.maxBy(points, 'top').top;

  return maxTop - minTop;
};

export const getWidth = points => {
  const minLeft = _.minBy(points, 'left').left;
  const maxLeft = _.maxBy(points, 'left').left;

  return maxLeft - minLeft;
};
