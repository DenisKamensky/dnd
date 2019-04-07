/**
 *
 * MainPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { blocksSelector } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Block from '../../components/Block/Loadable';
import styles from './style.css';
import * as actions from './actions';

/* eslint-disable react/prefer-stateless-function */
export class MainPage extends React.Component {
  onBlockDrop = (props, mon) => {
    this.props.calculateBlockPosition(props, mon, this.props.blocks);
  };

  render() {
    const { blocks } = this.props;
    return (
      <div className={styles.container}>
        <Helmet>
          <title>MainPage</title>
          <meta name="description" content="Description of MainPage" />
        </Helmet>
        <div className={styles.dragZone}>
          {blocks.map(block => (
            <Block
              key={block.id}
              bgc={block.bgc}
              top={block.top}
              left={block.left}
              handleEnd={this.onBlockDrop}
              id={block.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  blocks: PropTypes.array,
  calculateBlockPosition: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  blocks: blocksSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    calculateBlockPosition: (...args) => {
      dispatch(actions.calculateBlockPosition(...args));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'mainPage', reducer });
const withSaga = injectSaga({ key: 'mainPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DragDropContext(HTML5Backend)(MainPage));
