chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action == "cheesify") {
    cheesify();
  }
});

function cheesify() {
  // TODO: Add the image replacement script here

  document.querySelectorAll("img").forEach((i) => {
    i.src = `https://source.unsplash.com/${img.width}x${
      img.height
    }/?cheese&${Math.random()}`;
    i.srcset = i.src;
  });
}

// TODO: Write a function to listen for messages on the content page using chrome.runtime.onMessage
