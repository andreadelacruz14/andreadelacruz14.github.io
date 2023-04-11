let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #b3d1d1;">Desarrollo sitios web y especialista en marketing digital.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
