import Redux from 'redux';

const initialState = null;

var currentVideoReducer = (state = initialState, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
  case 'CHANGE_VIDEO':
    return action.video || null;
  default:
    return state;
  }
};

export default currentVideoReducer;
