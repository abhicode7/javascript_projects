const form = document.getElementById("download-form");
const linkContainer = document.getElementById("download-link");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const videoUrl = document.getElementById("video-url").value;
  const videoId = getVideoId(videoUrl);
  const downloadUrl = `https://www.youtube.com/watch?v=${videoId}`;
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.textContent = "Download";
  linkContainer.innerHTML = "";
  linkContainer.appendChild(link);
});

function getVideoId(videoUrl) {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = videoUrl.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}
