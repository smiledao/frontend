startCamera();


function loadImg() {
  $("#frame").attr("src", URL.createObjectURL(event.target.files[0]));
}

async function startCamera() {
  const videoElement = document.getElementById("video-preview");
  let stream = null;

  try {
    stream = await navigator.mediaDevices.getUserMedia({
      video: true,
    });
    videoElement.srcObject = stream;
    videoElement.play();
    console.log("TEST")
  } catch (err) {
    window.alert("Please allow camera access to use this feature.");
  }
}

function takePhoto() {
  const canvas = document.createElement("canvas");
  canvas.display = "none";

  const videoElement = document.getElementById("video-preview");

  canvas.width = videoElement.videoWidth;
  canvas.height = videoElement.videoHeight;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(videoElement, 0, 0);

  let image = ctx.getImageData(0, 0, canvas.width, canvas.height);
  console.log("Image taken: ", image);
}


