function clearCanvas(context, canvas) {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function onMouseMove(e, myGoal) {
  myGoal.x = e.clientX
  myGoal.y = e.clientY
}

function gameLoop(canvas, context, myCircle, myGoal, myClick) {
  clearCanvas(context, canvas);
  let moveMultiple = 3
  if(myClick) {
    moveMultiple = moveMultiple*5
  }

  let testX = myGoal.x - myCircle.x;
  let testY = myGoal.y - myCircle.y;
  let revX = false;
  let revY = false;

  if(testX < 0) {
    testX = testX*-1;
    revX = true;
  }
  if(testY < 0) {
    testY = testY*-1;
    revY = true;
  }

  if(revX && revY) {
    myCircle.x = myCircle.x + -(testX/(testX+testY))*moveMultiple
    myCircle.y = myCircle.y + -(testY/(testX+testY))*moveMultiple
  } else if(revX) {
    myCircle.x = myCircle.x + -(testX/(testX+testY))*moveMultiple
    myCircle.y = myCircle.y + (testY/(testX+testY))*moveMultiple
  } else if(revY) {
    myCircle.x = myCircle.x + (testX/(testX+testY))*moveMultiple
    myCircle.y = myCircle.y + -(testY/(testX+testY))*moveMultiple
  } else {
    myCircle.x = myCircle.x + (testX/(testX+testY))*moveMultiple
    myCircle.y = myCircle.y + (testY/(testX+testY))*moveMultiple
  }

  context.beginPath();
  if(myClick){
    context.arc(myCircle.x, myCircle.y, 12, 0, 2*Math.PI, false);
    context.fillStyle = 'lightblue';
  } else {
    context.arc(myCircle.x, myCircle.y, 10, 0, 2*Math.PI, false);
    context.fillStyle = 'green';
  }
  context.fill();
}

(function main() {
  const canvas = document.getElementById("gameCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const context = canvas.getContext('2d');
  let myCircle = {
    x: 50,
    y: 50
  };
  let myGoal = {
    x: 0,
    y: 0
  };
  onmousemove = (e) => onMouseMove(e, myGoal);
  let myClick = false
  canvas.onmousedown = () => {myClick = true}
  canvas.onmouseup = () => {myClick = false}
  setInterval(() => gameLoop(canvas, context, myCircle, myGoal, myClick), 33); // ~ 30 frames per sec
})();