let prev = null;
const logo = document.getElementsByTagName("svg")[0];

let xdir = 0.3;
let ydir = 0.3;
const speed = 1;
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

  if (newTop + 100 > window.innerHeight) {
    xdir += 0.1 * speed;
    xdir = -Math.abs(xdir);
  } else if (newTop < 0) {
    xdir = Math.abs(xdir);
    xdir += 0.1 * speed;
  }

  if (newLeft + 200 > window.innerWidth) {
    ydir += 0.1 * speed;
    ydir = -Math.abs(ydir);
  } else if (newLeft < 0) {
    ydir = Math.abs(ydir);
    ydir += 0.1 * speed;
  }

  if (xdir > 10) {
    xdir = 0.1;
    ydir = 0.1;
    logo.style.top = "0px";
    logo.style.left = "0px";
  }

  logo.style.top = `${newTop}px`;
  logo.style.left = `${newLeft}px`;
}
window.requestAnimationFrame(step);
logo.style.top = "0px";
logo.style.left = "0px";
