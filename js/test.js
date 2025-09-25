const canvas = document.getElementById('splash');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let x = 0;
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'red';
  ctx.beginPath();
  ctx.arc(x, 200, 50, 0, Math.PI * 2);
  ctx.fill();
  x += 5;
  if (x > canvas.width) x = 0;
  requestAnimationFrame(animate);
}

animate();
