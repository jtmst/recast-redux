import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from './../actions/currentVideo.js';
import VideoListEntry from '../components/VideoListEntry.js';

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.


const mapStateToProps = (state) => {
  return {
    video: state.currentVideo
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     handleVideoListEntryTitleClick: (video) => dispatch(changeVideo(video))
//   };
// };

var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);


export default VideoPlayerContainer;
