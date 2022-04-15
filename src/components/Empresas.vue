<template>
  <div class="contenedor-empresas">
    <div class="text-titulo">
      <h1 class="text-center mt-16 mb-16">EMPRESAS CON LAS QUE TRABAJAMOS</h1>
    </div>
    <div class="logos-empresas" data-aos="fade-up"
     data-aos-duration="3000">
      <img
        class="img-logo"
        src="@/assets/img/empresas-logos/logo-falabella.webp"
        alt=""
      />
      <img
        class="img-logo"
        src="@/assets/img/empresas-logos/logo-adidas.webp"
        alt=""
      />
      <img
        class=""
        src="@/assets/img/empresas-logos/logo-apple.webp"
        width="40%"
        style="margin: 0 auto"
        alt=""
      />
      <img
        class="img-logo"
        src="@/assets/img/empresas-logos/logo-hites.webp"
        alt=""
      />
      <img
        class="img-logo"
        src="@/assets/img/empresas-logos/logo-lg.webp"
        alt=""
      />
      <img
        class="img-logo"
        src="@/assets/img/empresas-logos/logo-nestle.webp"
        alt=""
      />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {};
  },
  setup() {},
};
</script>
<style scoped>
.contenedor-empresas {
  width: 100%;
  height: auto;
  padding-top: 15px;
  background-color: #f3f3f3;
  position: relative;
}
body.dark .contenedor-empresas {
  background-color: #0300c2;
}
body.dark .text-titulo {
  color: #fff;
}

.logos-empresas {
  width: 85%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 15px;
  margin: 0 auto;
  align-items: center;
}
.img-logo {
  width: 60%;
  margin: 0 auto;
}
@media screen and (max-width: 968px) {
  .logos-empresas {
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
