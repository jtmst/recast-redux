import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideo from './../actions/VideoList.js';


const mapStateToProps = (state) => {
  return {
    videos: state.videoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleVideoListEntryTitleClick: (videos) => dispatch(changeVideo(videos))
  };
};


var VideoListContainer = connect(mapStateToProps, mapDispatchToProps)(VideoList);


// connect()

// const mapDispatchToProps
// const mapStateToProps

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.



export default VideoListContainer;
