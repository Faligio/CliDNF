<template>
  <section id="contact">
    <div class="container">
      <h1>Contact</h1>
      <div class="block"></div>
      <form>
        <div class="row">
          <div class="six columns">
            <label for="exampleRecipientInput">Name</label>
            <input v-model="name" class="u-full-width" type="text" />
          </div>
          <div class="six columns">
            <label for="exampleEmailInput">Email</label>
            <input v-model="email" class="u-full-width" type="email" />
          </div>
        </div>
        <div class="row">
          <label for="exampleMessage">Message</label>
          <textarea v-model="message" class="u-full-width"></textarea>
          <input class="button-primary" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  </section>
</template> 

<script>
export default {
  name: "Contact",
  data() {
    return {name: '', email: '', message: ''}

  },
   mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.email) {
      this.email = localStorage.email;
    }
    if (localStorage.message) {
      this.message = localStorage.message;
    }
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
    email(newEmail) {
      localStorage.email = newEmail;
    },
    message(newMessage) {
      localStorage.message = newMessage;
    }
  }
};

</script>


<style>
#contact {
  padding: 100px 0 100px 0;
}
section {
    display: block;
}

.u-full-width {
    width: 100%;
    box-sizing: border-box;
}

input[type="email"],
input[type="number"],
input[type="search"],
input[type="text"],
input[type="tel"],
input[type="url"],
input[type="password"],
textarea,
select {
  height: 38px;
  padding: 6px 10px;
  /* The 6px vertically centers text on FF, ignored by Webkit */
  background-color: #f5f5f5;
  border: none;
  box-shadow: none;
  box-sizing: border-box;
  border-radius: 0;
  outline: none;
}

textarea {
  min-height: 250px;
}

input[type="submit"] {
  display: inline-block;
  height: 38px;
  padding: 0 30px;
  color: #fff;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  background: #5fc3e4;
  border-radius: 0px;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
}

input[type="submit"]:hover {
  background: #e55d87;
  text-decoration: none;
}
</style>