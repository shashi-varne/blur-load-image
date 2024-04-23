const blurDivs = document.querySelectorAll(".blur-load");

blurDivs.forEach((div) => {
  const img = div.querySelector("img");

  function showImageGradually() {
    div.classList.add("loaded");
  }

  if (img.complete) {
    // The 'complete' property indicates whether the browser has finished loading the image
    //So it it's already loaded, we're calling the showImageGradually to show the image
    showImageGradually();
  } else {
    //else, we're waiting for it to load, the calling showImageGradually to show the image
    img.addEventListener("load", showImageGradually);
  }
});
