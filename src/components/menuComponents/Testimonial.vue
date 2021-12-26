<template>
     <section id="testimonial">
      <div class="container">
        <div class="quoteLoop">
          <blockquote class="quote">
            <img
              src="http://placehold.it/100x100"
              width="100"
              height="100"
              alt=""
            />
            <h5>
              &nbsp;<br />
              &rdquo;Ca disparait petit test&rdquo;<br />
              <small>Baba le plus bo, la fantaisie</small>
            </h5>
          </blockquote>
          <blockquote class="quote">
            <img
              src="http://placehold.it/100x100"
              width="100"
              height="100"
              alt=""
            />
            <h5>
              &nbsp;<br />
              &ldquo;J'aime les queue&rdquo;<br />
              <small>Monkey, l'homme singe</small>
            </h5>
          </blockquote>
        </div>
      </div>
    </section>
</template>

<style>

#testimonial {
  background-color: #f5f5f5;
  padding: 100px 0 100px 0;
}

.quoteLoop {
  height: auto;
  width: 100%;
  margin: 0 auto;
  position: relative;
}

.quote {
  margin: 10px 30px;
  height: inherit;
  top: 0px;
  display: none;
  text-align: center;
}
</style>