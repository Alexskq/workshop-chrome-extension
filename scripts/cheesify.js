function cheesify() {
  // TODO: Add the image replacement script here

  document.querySelectorAll("img").forEach((i) => {
    i.src = `https://source.unsplash.com/${i.width}x${
      i.height
    }/?cheese&${Math.random()}`;
    i.srcset = i.src;
  });
}

// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "cheesify") {
    cheesify();
  }
});
