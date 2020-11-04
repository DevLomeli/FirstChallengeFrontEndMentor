const progressBar = document.querySelector(".progressBar");
const dataLeft = document.querySelector("#dataLeft");

var data = 1000;
var width = 5;
dataLeft.innerHTML = 1000;

const updateProgressBar = () => {
  if (width == 80) {
    clearInterval(id);
    return width;
  }
  width = width + 5;
  progressBar.style.width = `${width}%`;
  var id = setInterval(() => {
    updateProgressBar();
  }, 250);
};

const updataDataLeft = () => {
  if (data <= 185) {
    clearInterval(id2);
    return data;
  }
  data = data - 1;
  dataLeft.innerHTML = data;
  var id2 = setInterval(() => {
    updataDataLeft();
  }, 170);
};
updataDataLeft();
updateProgressBar();
