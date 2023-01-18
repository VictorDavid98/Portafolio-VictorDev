<template>
  <v-app>
    <header :flat="flat" />
    <div class="pt-0 fondo">
      <Header />
      <HomeSection />
      <About />
      <Habilidades/>
      <Plus />
      <Contacto />
    </div>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <foote />
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import HomeSection from "./components/HomeSection.vue";
import About from "./components/About.vue";
import Plus from "./components/Plus.vue";

import foote from "./components/Footer.vue";

import Contacto from "./components/Contacto.vue";
import Habilidades from "./components/Habilidades";

export default {
  name: "App",

  data() {},
  components: {
    Header,
    HomeSection,
    About,
    Plus,
    foote,
    Contacto,
    Habilidades
},

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    const top = window.pageYOffset || 0;
    if (top <= 60) {
      this.color = "transparent";
      this.flat = true;
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>

<style scoped>
.fondo {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    45deg,
    rgb(147, 11, 238) 0%,
    rgb(177, 177, 177) 95%
  );
}
body.dark .fondo {
  background: rgb(7, 0, 255);
  background: linear-gradient(
    93deg,
    rgba(7, 0, 255, 1) 0%,
    rgba(42, 211, 255, 1) 100%
  );
}
</style>
