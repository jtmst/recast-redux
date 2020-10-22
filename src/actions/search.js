import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  // start with helper function in search youtube
  // use response from youtube to dispatch other actions (to currentvideo/videolist?)
  var options = {
    key: window.YOUTUBE_API_KEY,
    query: q,
    max: 5
  };
  return(dispatch) => {
    searchYouTube(options, (videos) =>
    dispatch(changeVideoList(videos));
    dispatch(changeVideo(video))
  );
  }


  //TODO:  Write an asynchronous action to handle a video search!
//   return {
//     type: 'SEARCH',
//     q: q
//   };
};
export default handleVideoSearch;