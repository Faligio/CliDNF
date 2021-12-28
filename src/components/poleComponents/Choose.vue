<template>
  <section id="choose">
    <div class="background-one">
      <div class="link-container">
        <a class="link-one" href="https://jhancock532.github.io/link-hover-effects/">Trackmania</a>
      </div>
    </div>
    <div class="background-two link-container">
      <a class="link-two" href="https://jhancock532.github.io/link-hover-effects/">Rocket League</a>
    </div>
    <div class="background-three link-container">
      <a class="link-three" href="https://jhancock532.github.io/link-hover-effects/">Bientôt</a>
    </div>
  </section>
</template>

<style>
#choose {
  margin: 0;
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
}

.background-one {
  background-image: url('https://i.ibb.co/0fJ7qkD/FBINs-B5-XIAI1f-R5.jpg');
  background-position-x: 80%;
  background-size: cover;
}
.background-two {
  background-image: url('https://i.ibb.co/1dVvGTP/1335865.png');
  background-position-x: 50%;
  background-size: cover;
}

.background-three {
  background-image: url('https://i.ibb.co/JjwycZm/t-l-charg-1.jpg');
  background-position-x: 50%;
  background-size: cover;
}

.link-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 1;
}

a {
  font-size: 2.5em;
  text-decoration: none;
}

.link-one {
  color: white;
  transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
  line-height: 1em;

}

.link-one::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  clip-path: circle(0% at 50% calc(50%));
  transition: 0.5s;
  backdrop-filter: blur(10px);

}

.link-one:hover::before {
  clip-path: circle(100% at 50% 50%);
  
}

.link-one::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);
}


.link-two {
  color: white;
  transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
  line-height: 1em;

}

.link-two::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  clip-path: circle(0% at 50% calc(50%));
  transition: 0.5s;
  backdrop-filter: blur(10px);

}

.link-two:hover::before {
  clip-path: circle(100% at 50% 50%);
  
}

.link-two::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  transition: clip-path 1s cubic-bezier(0.65, 0, 0.35, 1);
}


.link-three {
  color: white;
  transition: color 1s cubic-bezier(0.32, 0, 0.67, 0);
  line-height: 1em;
  pointer-events:none;
}

.link-three::before {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  clip-path: circle(0% at 50% calc(50%));
  transition: 0.5s;

}

.link-three:hover::before {
  clip-path: circle(100% at 50% 50%);
  
}

.link-three::after {
  content: "";
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
}

</style>