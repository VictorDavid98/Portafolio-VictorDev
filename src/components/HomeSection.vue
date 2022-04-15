<template>
  <section id="hero">
    <div v-for="h in hero" :key="h.id">
      <div class="background-i">
        <div class="content-hero">
          <div class="content">
            <h1 class="titulo mb-5">
              {{ h.titulo1 }}
              <v-btn
                icon
                outlined
                dark
                style="border: none"
                @click.stop="modificarTitulo = true"
                ><v-icon>mdi-pencil</v-icon></v-btn
              >
            </h1>

            <h1 class="subtitulo">
              {{ h.subtitulo }}
              <span class="typed-text font-weight-bold">{{ typeValue }}</span>
              <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
            </h1>
            <v-btn
              icon
              outlined
              dark
              style="border: none"
              @click.stop="modificarSubtitulo = true"
              ><v-icon>mdi-pencil</v-icon></v-btn
            >
            <div class="btn">
              <v-btn
                rounded
                outlined
                large
                dark
                @click="$vuetify.goTo('#features')"
                class="mr-1"
              >
                {{ h.boton1 }}
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
              <v-btn
                icon
                outlined
                dark
                style="border: none"
                @click.stop="modificarBtn1 = true"
                ><v-icon>mdi-pencil</v-icon></v-btn
              >

              <v-btn
                rounded
                outlined
                large
                dark
                @click.stop="dialog = true"
                class="mr-1 playBut"
              >
                {{ h.boton2 }}
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/"
                  x="0px"
                  y="0px"
                  width="60px"
                  height="40px"
                  viewBox="0 0 213.7 213.7"
                  enable-background="new 0 0 213.7 213.7"
                  xml:space="preserve"
                >
                  <polygon
                    class="triangle"
                    id="XMLID_18_"
                    fill="none"
                    stroke-width="7"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    points="73.5,62.5 148.5,105.8 73.5,149.1 "
                  />
                </svg>
              </v-btn>
              <v-btn
                icon
                outlined
                dark
                style="border: none"
                @click.stop="modificarBtn2 = true"
                ><v-icon>mdi-pencil</v-icon></v-btn
              >
            </div>
          </div>
          <div class="img">
            <img
              src="../assets/img/mockups-04.a54d9c50.webp"
              alt=""
              width="100%"
              style="position: relative"
            />
          </div>
        </div>

        <div class="custom-shape-divider-bottom-1647534989">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
      <v-dialog v-model="dialog" max-width="500px">
        <iframe
          src="https://player.vimeo.com/video/525764495"
          width="500"
          height="281"
          frameborder="0"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
        ></iframe>
      </v-dialog>

      <v-dialog v-model="modificarTitulo" width="600px">
        <input type="text" v-model="titulo1" class="input-m" />
        <v-btn color="orange" @click="updateHero(h.id)">Modificar</v-btn>
      </v-dialog>
      <v-dialog v-model="modificarSubtitulo" width="600px">
        <input type="text" v-model="subtitulo" class="input-m" />
        <v-btn color="orange" @click="updateHero(h.id)">Modificar</v-btn>
      </v-dialog>
      <v-dialog v-model="modificarTitulo2" width="600px">
        <input type="text" v-model="titulo2" class="input-m" />
        <v-btn color="orange" @click="updateHero(h.id)">Modificar</v-btn>
      </v-dialog>
      <v-dialog v-model="modificarBtn1" width="600px">
        <input type="text" v-model="boton1" class="input-m" />
        <v-btn color="orange" @click="updateHero(h.id)">Modificar</v-btn>
      </v-dialog>
      <v-dialog v-model="modificarBtn2" width="600px">
        <input type="text" v-model="boton2" class="input-m" />
        <v-btn color="orange" @click="updateHero(h.id)">Modificar</v-btn>
      </v-dialog>

      <!-- ********************************************************************************* -->

      <v-container fluid id="features" class="mt-4">
        <v-row align="center" justify="center" class="dark-mode">
          <v-col cols="10">
            <v-row align="center" justify="space-around">
              <v-col cols="12" class="text-center">
                <h1 class="font-weight-light display-2 mb-6">
                  {{ h.titulo2 }}
                  <v-btn
                    icon
                    outlined
                    dark
                    style="border: none"
                    @click.stop="modificarTitulo2 = true"
                    ><v-icon>mdi-pencil</v-icon></v-btn
                  >
                </h1>
                <!-- <h1 class="font-weight-light" align="left">
                Lock es una innovadora herramienta los sistemas de rondas,
                controles de acceso, seguridad en comunidades, condominios,
              </h1> -->
              </v-col>
              <v-col
                cols="12"
                sm="4"
                class="text-center"
                v-for="(feature, i) in features"
                :key="i"
              >
                <v-hover v-slot:default="{ hover }">
                  <v-card
                    class="card"
                    shape8
                    :elevation="hover ? 8 : 4"
                    :class="{ up: hover }"
                  >
                    <v-img
                      :src="feature.img"
                      max-width="100px"
                      class="d-block ml-auto mr-auto"
                      :class="{ 'zoom-efect': hover }"
                    ></v-img>
                    <h1 class="font-weight-regular">{{ feature.title }}</h1>
                    <h4 class="font-weight-regular subtitle-1 justify">
                      {{ feature.text }}
                    </h4>
                  </v-card>
                </v-hover>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </section>
</template>

<script>
import { setTimeout } from "timers";
import { db } from "../firebase/db";

export default {
  data() {
    return {
      //firebase
      hero: [],
      titulo1: "Lock Gestión  de Seguridad ",
      titulo2: "CONOCE LAS FUNCIONES DE LOCK",
      subtitulo:
        "Porque sabemos que la seguridad es indispensable hoy en día, te presentamos LOCK una innovadora herramienta tecnológica de gestión integral de seguridad que es",
      boton1: "VER MÁS",
      boton2: "VER VIDEO",
      dialog: false,
      modificarTitulo: false,
      modificarTitulo2: false,
      modificarSubtitulo: false,
      modificarBtn1: false,
      modificarBtn2: false,
      features: [
        {
          img: require("@/assets/img/sistema-de-seguridad.ea1d6f00.webp"),
          title: "Sistema de Rondas",
          text: "El sistema permite supervisar las rondas realizadas por personal de seguridad utilizando tecnología NFC teniendo la información en detalle de forma rápida y en línea.",
        },
        {
          img: require("@/assets/img/frontera.cdc934da.webp"),
          title: "Control de Acceso",
          text: "Con LOCK puedes permitir o restringir la entrada de una persona o vehículo a las empresas, bodegas, condominios, etc. Consiguiendo una mejor organización y administración de recursos.",
        },
        {
          img: require("@/assets/img/lista-de-verificacion.d5ba5e4d.webp"),
          title: "Gestión",
          text: "Agilizar y automatizar los procesos de gestión, permitiendo tomar mejores decisiones en el momento adecuado. LOCK te proporciona toda la información de forma rápida y efectiva.",
        },
      ],

      //typed
      typeValue: "",
      typeStatus: false,
      typeArray: ["Intuitiva", "efectiva", "adaptable"],
      typingSpeed: 50,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },

  methods: {
    updateHero(id) {
      db.collection("hero").doc(id).update({
        titulo1: this.titulo1,
        titulo2: this.titulo2,
        subtitulo: this.subtitulo,
        boton1: this.boton1,
        boton2: this.boton2,
      });
    },
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
  firestore: {
    hero: db.collection("hero"),
  },
};
</script>

<style lang="scss" scoped>
.circle {
  stroke: white;
  stroke-dasharray: 650;
  stroke-dashoffset: 650;
  transition: all 0.5s ease-in-out;
  opacity: 0.3;
}
.input-m {
  color: black;
  background-color: white;
  height: 50px;
}
.btn-m{
  background-color: rgba(14, 0, 9, 0);
  color: rgb(0, 0, 0);
}
.playBut {
  /*  border: 1px solid red;*/
  display: inline-block;
  transition: all 0.5s ease;

  .triangle {
    transition: all 0.1s ease-in-out;
    stroke-dasharray: 240;
    stroke-dashoffset: 480;
    stroke: white;
    transform: translateY(0);
  }

  &:hover {
    .triangle {
      stroke-dashoffset: 0;
      opacity: 1;
      stroke: white;
      animation: nudge 0.7s ease-in-out;

      @keyframes nudge {
        0% {
          transform: translateX(0);
        }
        30% {
          transform: translateX(-5px);
        }
        50% {
          transform: translateX(5px);
        }
        70% {
          transform: translateX(-2px);
        }
        100% {
          transform: translateX(0);
        }
      }
    }

    .circle {
      stroke-dashoffset: 0;
      opacity: 1;
    }
  }
}
span.typed-text {
  color: rgb(255, 187, 0);
  text-transform: uppercase;
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

<style scoped>
.btn-play {
  transition: 0.2s;
}
.justify {
  text-align: justify;
}
.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
.background-i {
  background-image: url("../assets/img/img-back.1d023508.webp");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}
.content-hero {
  display: flex;
  align-items: center;
}
.content {
  width: 50%;
  margin-left: 150px;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.titulo {
  font-size: 40px;
}
.subtitulo {
  font-weight: 300;
}
.img {
  display: flex;
  justify-content: flex-end;
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
.custom-shape-divider-bottom-1647534989 {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-bottom-1647534989 svg {
  position: relative;
  display: block;
  width: calc(200% + 1.3px);
  height: 150px;
}

.custom-shape-divider-bottom-1647534989 .shape-fill {
  fill: #ffffff;
}
body.dark .custom-shape-divider-bottom-1647534989 .shape-fill {
  fill: #2e2bff;
}

body.dark .dark-mode {
  color: white;
}
body.dark #hero {
  background-color: #2e2bff;
}
body.dark .card {
  background-color: #0300c2;
  color: #fff;
}
</style>
