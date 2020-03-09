const config = require("./config");
const like = require("./like");
const twit = require("twit");
const T = new twit(config);

const deleteLikeById = async id => {
  T.post('favorites/destroy', { id })
    .catch(function (err) {
      console.log('caught error', err.stack)
    })
    .then(function (result) {
      console.log("Deleted successfully");
      //console.log('data', result.data);
    })
}

const deleteLikesIteratively = (async () => {
  for(let i = 0; i < like.length; i++) {
    await deleteLikeById(like[i].like.tweetId);
  }
})();