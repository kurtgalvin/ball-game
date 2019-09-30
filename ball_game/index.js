function clearCanvas(context, canvas) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function onMouseMove(e, myGoal) {
  myGoal.x = e.clientX
  myGoal.y = e.clientY
}

function gameLoop(canvas, context, myCircle, myGoal) {
  clearCanvas(context, canvas);
  console.log(myCircle.x, myGoal.x)
  context.beginPath();
  context.arc(myCircle.x, myCircle.y, 10, 0, 2*Math.PI, false);
  context.fillStyle = 'green';
  context.fill();
}

(function main() {
  const canvas = document.getElementById("gameCanvas");
  const context = canvas.getContext('2d');
  let myCircle = {
    x: 0,
    y: 0
  };
  let myGoal = {
    x: 0,
    y: 0
  };
  canvas.onmousemove = (e) => onMouseMove(e, myGoal);
  setInterval(() => gameLoop(canvas, context, myCircle, myGoal), 33); // ~ 30 frames per sec
})();