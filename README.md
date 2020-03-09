  # Bulk Delete Twitter Likes
  
  This is a script to delete all of your likes on your Twitter account at once. <br/>
  Likes may still appear after the execution of the program. Just wait for a day. <br/>
  
  Requirements:
  - [Node.js](https://nodejs.org/en/)
  
  - [A Twitter Developer account](https://developer.twitter.com/) 
  
    [After that you need to create an app too to get the `Credentials`](https://developer.twitter.com/en/apps/create)
    
  - [Your Twitter Archive](https://help.twitter.com/en/managing-your-account/how-to-download-your-twitter-archive) 
  
  How to?
  - Clone the project into your PC.
  
  - Extract your Twitter Archive .zip file and find `like.js`. Copy it to the folder that you have cloned.
  
  - First line of `like.js` should be something like `window.YTD.like.part0 = [ {` <br/>
    Change that to `module.exports = [ {`
    
  - Copy the credentials that you obtained from your Twitter Developer account. </br>
    Paste them to the appropriate fields in `config.js`. Paste them between the quotes. </br>
    Do not delete the quotes and do not use spaces.
  
  - Open a new terminal and execute the commands below one by one.
  
      ```sh
      $ npm install
      $ node deleteLikes
      ```
