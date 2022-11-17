import React from "react";
import "./App.css";

export default function BelowMainBar({author, quote}) {

  let quoteAndAuthor = `${quote}${author}`
  let tweetLinkText = quoteAndAuthor.replace(/(\s)/gi, "%20")

  let authorForTumblr = author[0];
  let quoteForTumblr = quote[0];
  let tumblrLinkTextAuthor = authorForTumblr.replace(/[–-—]/, "").replace(/(\s)/gi, "+");
  let tumblrLinkTextQuote = quoteForTumblr.replace(/(\s)/gi, "+");

  let tweetShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${TweetLinkText}`
    window.open(url, '_blank');
  }

  let tumblrShare = () => {
    const url = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${tumblrLinkTextAuthor}&content=${tumblrLinkTextQuote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`
    window.open(url, '_blank');
  }
  
  return (
    <div>
      <button id="btn-tweet-quote" onClick={tweetShare}>
        <img src="https://image.emojisky.com/746/483746-middle.png" />
      </button>
      <button id="btn-tweet-quote"  onClick={tumblrShare}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/Tumblr.svg" />
      </button>
    </div>
  );
}
