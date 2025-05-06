const openButton = document.getElementById('openButton');
const restartButton = document.getElementById('restartButton');
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const messageElement = document.getElementById('message');
const bgMusic = document.getElementById('bgMusic');
const fireworksContainer = document.getElementById('fireworks-container');
const cursor = document.querySelector('.cursor');

const message = `Querida Mamá,

Hoy quiero tomarme un momento para decirte todo lo que a veces no alcanzo a expresar en el día a día. 

Eres mi pilar, mi refugio y mi mayor inspiración. Cada sacrificio que has hecho, cada lágrima que has secado y cada sonrisa que has regalado han formado la persona que soy hoy.

Recuerdo cuando era pequeño y me cuidabas con esa paciencia infinita, cuando me enseñaste que los errores son oportunidades para aprender, y cuando me demostraste que el amor más puro es el de una madre.

Gracias por:
- Esos abrazos que lo curaban todo
- Esas palabras de aliento en momentos difíciles
- Esas noches sin dormir cuando estaba enfermo
- Esas lecciones de vida que llevo en el corazón
- Y sobre todo, por amarme incondicionalmente

No hay regalo material que pueda igualar todo lo que me has dado. La mejor manera en que puedo corresponder es intentando ser la mejor versión de mí mismo cada día.

En este Día de las Madres, quiero que sepas que:
💖 Eres la mujer más fuerte que conozco
💖 Tu amor es mi mayor tesoro
💖 Cada día te admiro más 
💖 Eres mi ejemplo a seguir

Te prometo que todo lo bueno que hay en mí, es reflejo de todo lo bueno que hay en ti.

Con todo mi amor,
Juan Andres`;

    
    function typeWriter(text, element, i) {
      if (i < text.length) {
        element.innerHTML = text.substring(0, i).replace(/\n/g, '<br>') + 
                          (text.charAt(i) === '\n' ? '<br>' : text.charAt(i)) + 
                          '<span class="cursor">|</span>';
        setTimeout(() => typeWriter(text, element, i + 1), 30); 
      } else {
        element.innerHTML = text.replace(/\n/g, '<br>');
        launchFireworks();
      }
    }

let fireworks;

openButton.addEventListener('click', () => {
  envelope.querySelector('.flap').style.transform = 'rotateX(-180deg)';
  letter.style.transform = 'translateY(0)';
  typeWriter(message, messageElement, 0);
  bgMusic.play();
  openButton.style.display = 'none';
  restartButton.style.display = 'inline-block';
});

restartButton.addEventListener('click', () => {
  messageElement.innerHTML = '';
  cursor.style.display = 'inline-block';
  envelope.querySelector('.flap').style.transform = 'rotateX(0deg)';
  letter.style.transform = 'translateY(100%)';
  setTimeout(() => {
    openButton.click();
  }, 1500);
});

function typeWriter(text, element, i) {
  if (i < text.length) {
    element.innerHTML += text.charAt(i) === '\n' ? '<br>' : text.charAt(i);
    setTimeout(() => typeWriter(text, element, i + 1), 50);
  } else {
    cursor.style.display = 'none';
    setTimeout(() => {
      element.innerHTML += "<br><br><strong>Atentamente, Goonzza</strong>";
      launchFireworks();
    }, 1000);
  }
}

function launchFireworks() {
  if (fireworks) fireworks.stop();
  fireworks = new Fireworks.default(fireworksContainer, {
    autoresize: true,
    opacity: 0.5,
    acceleration: 1.05,
    friction: 0.97,
    gravity: 1.5,
    particles: 70,
    trace: 3,
    explosion: 6,
    intensity: 30,
    flickering: 50,
    lineStyle: 'round',
    hue: { min: 0, max: 360 },
    delay: { min: 15, max: 30 },
    rocketsPoint: { min: 0, max: 100 },
    lineWidth: {
      explosion: { min: 1, max: 3 },
      trace: { min: 1, max: 2 }
    },
    brightness: { min: 50, max: 80 },
    decay: { min: 0.015, max: 0.03 },
    mouse: { click: false, move: false, max: 1 }
  });
  fireworks.start();
  setTimeout(() => fireworks.stop(), 7000);
}

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';

  const size = Math.random() * 20 + 10;
  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = Math.random() * 100 + 'vh';
  
  heart.style.backgroundColor = `hsl(${Math.random() * 10 + 350}, 100%, 70%)`;

  heart.style.animationDuration = (3 + Math.random() * 7) + 's';

  heart.style.animationDelay = Math.random() * 5 + 's';
  
  document.querySelector('.hearts').appendChild(heart);
  
  setTimeout(() => {
    heart.remove();
  }, 10000);
}

setInterval(createHeart, 200);
