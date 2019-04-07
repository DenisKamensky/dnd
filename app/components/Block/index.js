/**
 *
 * Block
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import styles from './block.css';

const spec = {
  beginDrag(props) {
    return props;
  },
  endDrag(props, monitor) {
    return props.handleEnd(props, monitor.getDifferenceFromInitialOffset());
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  };
}
function Block({ bgc, top, left, connectDragSource, isDragging }) {
  return connectDragSource(
    <div
      className={styles.block}
      style={{ backgroundColor: bgc, top, left, opacity: isDragging ? 0 : 1 }}
    />,
  );
}

Block.propTypes = {
  bgc: PropTypes.string,
  top: PropTypes.number,
  left: PropTypes.number,
  isDragging: PropTypes.bool,
  connectDragSource: PropTypes.func,
};

export default DragSource('item', spec, collect)(Block);
