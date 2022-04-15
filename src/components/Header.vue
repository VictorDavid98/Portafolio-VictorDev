<template>
  <div id="header">
    <v-navigation-drawer v-model="drawer" app temporary>
      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">
              {{ text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app :flat="flat" class="nav-i" :class="{ expand: flat }">
      <v-toolbar-title>
        <v-img
          src="@/assets/img/logo-lock.0508bfe3.webp"
          width="120px"
          class="logo-1"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#hero')">
          <span class="mr-3">Inicio</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#about')">
          <span class="mr-3">Sobre Nosotros</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#informacion')">
          <span class="mr-3">Información</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#planes')">
          <span class="mr-3">Planes</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#contacto')">
          <span class="mr-3">Contacto</span>
        </v-btn>
      </div>
      <button class="switch" id="switch">
        <span></span>
        <span></span>
      </button>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Inicio", "#hero"],
      ["mdi-information-outline", "Sobre Nosotros", "#about"],
      ["mdi-web", "Información", "#informacion"],
      ["mdi-currency-usd", "Planes", "#planes"],
      ["mdi-email-outline", "Contacto", "#contacto"],
    ],
  }),
  props: {
    flat: Boolean,
  },
  methods: {
    onResize() {
      this.isXs = window.innerWidth < 850;
    },
  },

  watch: {
    isXs(value) {
      if (!value) {
        if (this.drawer) {
          this.drawer = false;
        }
      }
    },
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize, { passive: true });
    const btnSwitch = document.querySelector("#switch");
    btnSwitch.addEventListener("click", () => {
      document.body.classList.toggle("dark");
      btnSwitch.classList.toggle("active");
    });
  },
};
</script>

<style>
body.dark .nav-i {
  background-color: #2e2bff !important;
}
body.dark .nav-i span {
  color: #fff;
}

.nav-i .switch {
  background: #343d5b;
  border-radius: 1000px;
  border: none;
  position: relative;
  cursor: pointer;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  outline: none;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

@media (max-width: 910px) {
  .nav-i .switch .switch {
    display: none;
  }
}

.nav-i .switch::after {
  content: "";
  display: block;
  width: 25px;
  height: 25px;
  position: absolute;
  background: #f1f1f1;
  top: 0;
  left: 0;
  right: unset;
  border-radius: 100px;
  -webkit-transition: 0.1s ease all;
  transition: 0.3s ease all;
  -webkit-box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.2);
}

.nav-i .switch.active {
  background: orange;
  color: black;
}

.nav-i .switch.active::after {
  right: 0;
  left: unset;
}

.nav-i .switch span {
  width: 25px;
  height: 25px;
  line-height: 25px;
  display: block;
  background: none;
  color: #fff;
}
.v-toolbar {
  transition: 0.6s;
}

.expand {
  height: 80px !important;
  padding-top: 10px;
}
@media screen and (max-width: 968px) {
}
</style>
