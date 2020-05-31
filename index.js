let prev = null;
const logo = document.getElementsByTagName("svg")[0];

let xdir = 0.3;
let ydir = 0.3;
function step(ts) {
  progress = ts - prev;
  prev = ts;

  window.requestAnimationFrame(step);

  const currentTop = logo.style.top.split("px")[0];
  const currentLeft = logo.style.left.split("px")[0];
  let newTop = parseInt(currentTop);
  let newLeft = parseInt(currentLeft);

  newTop += progress * xdir;
  newLeft += progress * ydir;

  if (newTop + 100 > window.innerHeight || newTop < 0) xdir = -xdir;
  if (newLeft + 200 > window.innerWidth || newLeft < 0) ydir = -ydir;

  logo.style.top = `${newTop}px`;
  logo.style.left = `${newLeft}px`;
}
window.requestAnimationFrame(step);
logo.style.top = "0px";
logo.style.left = "0px";
