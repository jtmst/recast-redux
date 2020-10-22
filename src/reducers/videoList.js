import Redux from 'redux';

const initialState = [];

var videoListReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'CHANGE_VIDEO_LIST':
    return action.videos;
  default:
    return state;
  }
};

export default videoListReducer;
