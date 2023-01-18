<template>
  <section id="hero">

      <div class="background-i">
        <div class="content-hero">
          <div class="content">
            <h1 class="titulo mb-5">
              ¡HOLA! Me llamo Víctor Zamora, soy <br>
              <span class="typed-text font-weight-bold">{{ typeValue }}</span>
              <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
            </h1>
            <h1></h1>

            <div class="btn">
              <v-btn
                rounded
                outlined
                large
                dark
                @click="$vuetify.goTo('#features')"
                class="mt-7 pr-12 pl-12"
              >
                ver portafolio
                <v-icon class="ml-4">mdi-arrow-down</v-icon>
              </v-btn>
            </div>
          </div>
            
          <div class="img">
            <img
              src="../assets/img/p-img1.png"
              alt=""
              width="55%"
              style="position: relative"
            />
          </div>
        </div>
      </div>
    
  </section>
</template>

<script>
import { setTimeout } from "timers";
// import { db } from "../firebase/db";

export default {
  data() {
    return {
      //typed
      typeValue: "",
      typeStatus: false,
      typeArray: ["Diseñador web", "Programador Full Stack"],
      typingSpeed: 50,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },

  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;

        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style lang="scss" scoped>
span.typed-text {
  color: #000;
  text-transform: uppercase;
  font-size: 30px;
}
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: #fff;
  animation: cursorBlink 1s infinite;
}
span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: #fff;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>

<style>

/* .background-i {
  background: rgb(255, 153, 0);
  background: repeating-linear-gradient(
    143deg,
    rgba(255, 153, 0, 1) 0%,
    rgba(255, 252, 42, 1) 65%
  );

  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
} */
.background-i {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgb(147, 11, 238) 0%,
    rgb(177, 177, 177) 65%
  );
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}
body.dark .background-i {
  background: rgb(0, 17, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 17, 255, 1) 0%,
    rgb(1, 238, 255) 65%
  );
}
.content-hero {
  width: 90%;
  display: flex;
  align-items: center;
  
}
.content {
  width: 80%;
  margin-left: 150px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.titulo {
  font-size: 45px;
}

.img {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 968px) {
  .content-hero {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .content {
    width: 90%;
    text-align: justify;
    display: flex;
    flex-direction: column;
    margin: 130px 0 0 0px;
  }
  .titulo {
    font-size: 45px;
  }
  .subtitulo {
    font-size: 25px;
    font-weight: 300;
    padding-top: 10px;
    padding-bottom: 20px;
  }
  .btn {
    width: 70%;
    display: flex;
    flex-direction: column;
  }
  .img {
    display: none;
    margin-top: 30px;
    margin-left: 20px;
    width: 90%;
  }
}

</style>
