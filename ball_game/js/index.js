function gameLoop(canvas, context, fireBall, mousePos) {
  context.clearRect(0, 0, canvas.width, canvas.height);

  fireBall.draw();
  fireBall.move(mousePos.x, mousePos.y)
}

function main() {
  // Set up
  const canvas = document.getElementById("gameCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const context = canvas.getContext('2d');
  
  let fireBall = new FireBall(context, 'red', 300, 50, 0.33)

  let mousePos = {
    x: 0,
    y: 0
  }
  onmousemove = function(e) {
    mousePos.x = e.clientX
    mousePos.y = e.clientY
  }

  setInterval(() => gameLoop(canvas, context, fireBall, mousePos), 33); // ~ 30 frames per sec
};

main()