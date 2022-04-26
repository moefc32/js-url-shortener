'use strict';

// List of short URLs

const urls = [{
  short : "google",
  full : "https://google.com"
}, {
  short : "instagram",
  full : "https://instagram.com"
}, {
  short : "github",
  full : "https://github.com"
}];

// Custom error message

let errMsg = "Error: shortlink tidak ditemukan!";

// Get web app path and short link

let base = window.location.search;
let arr = base.split('?');
console.log(arr[1]);

// Check if short URL is on the list and do redirect

function isExist(url) {
  return url.short === arr[1];
}

if (urls.find(isExist) === undefined) {
  document.getElementById('message').innerHTML = errMsg;
} else {
  let a = urls.find(isExist);
  window.location.href = a.full;
}
