<template>
  <div class="c-presentacion">
    <div v-for="p in presentacion" :key="p.id">
    <svg
      class="wave-p"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 250"
    >
      <path
        fill="#f3f3f3"
        fill-opacity="1"
        d="M0,64L24,74.7C48,85,96,107,144,144C192,181,240,235,288,224C336,213,384,139,432,117.3C480,96,528,128,576,165.3C624,203,672,245,720,240C768,235,816,181,864,176C912,171,960,213,1008,213.3C1056,213,1104,171,1152,154.7C1200,139,1248,149,1296,144C1344,139,1392,117,1416,106.7L1440,96L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
      ></path>
    </svg>
    <section class="c-contenido" id="informacion" >
      <div class="texto-content" data-aos="fade-up" data-aos-duration="3000">
        <h1 class="mt-10 mb-10">
          {{p.titulo1}}
        </h1>
        <p>
          {{p.descripcion1}}
        </p>
        <v-btn
          rounded
          outlined
          href="https://www.lockseguridad.cl/lock/"
          target="_blank"
          large
          color="orange"
          class="mt-4"
        >
          <v-icon class="mr-2"> mdi-web </v-icon>
          {{p.boton1}}
        </v-btn>
      </div>
      <div class="img-p">
        <img src="@/assets/img/mockups-6.webp" width="100%" alt="" />
      </div>
    </section>

    <!-- ******************************************************** -->

    <section class="c-contenido2">
      <div class="img-p">
        <img src="@/assets/img/mockups-2.webp" width="50%" alt="" />
      </div>
      <div class="texto-content" data-aos="fade-up" data-aos-duration="3000">
        <h1 class="mt-10 mb-10">{{p.titulo2}}</h1>
        <p>
          {{p.descripcion2}}
        </p>
        <v-btn
          rounded
          outlined
          href="https://www.lockseguridad.cl/lock/"
          target="_blank"
          large
          color="orange"
          class="mt-4"
        >
          <v-icon class="mr-2"> mdi-web </v-icon>
          {{p.boton2}}
        </v-btn>
      </div>
    </section>

    <!-- ********************************************************** -->
    <section class="c-contenido">
      <div class="texto-content" data-aos="fade-up" data-aos-duration="3000">
        <h1 class="mt-10 mb-10">{{p.titulo3}}</h1>
        <p>
          {{p.descripcion3}}
        </p>
        <v-btn
          rounded
          outlined
          href="https://www.lockseguridad.cl/lock/"
          target="_blank"
          large
          color="orange"
          class="mt-4"
        >
          <v-icon class="mr-2"> mdi-web </v-icon>
          {{p.boton3}}
        </v-btn>
      </div>
      <div class="img-p">
        <img src="@/assets/img/mockups-7.webp" width="100%" alt="" />
      </div>
    </section>
    <svg
      class="wave-p2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#f3f3f3"
        fill-opacity="1"
        d="M0,64L24,74.7C48,85,96,107,144,144C192,181,240,235,288,224C336,213,384,139,432,117.3C480,96,528,128,576,165.3C624,203,672,245,720,240C768,235,816,181,864,176C912,171,960,213,1008,213.3C1056,213,1104,171,1152,154.7C1200,139,1248,149,1296,144C1344,139,1392,117,1416,106.7L1440,96L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
      ></path>
    </svg>
    </div>
  </div>
</template>

<script>
import { db } from "../firebase/db";
export default {
  data() {
    return{
      presentacion: []
    }
  },
  firestore: {
    presentacion: db.collection("presentacion"),
  },
};
</script>
<style scoped>
.c-presentacion {
  width: 100%;
  margin: 0 auto;
}
body.dark .c-presentacion {
  color: #fff;
  font-weight: 600;
}
.c-contenido {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  padding: 0 100px;
  position: relative;
}
@media screen and (max-width: 768px) {
  .c-contenido {
    text-align: justify;
    flex-direction: column;
    padding: 20px 20px;
  }
}
.c-contenido2 {
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  background-color: #f3f3f3;
  padding: 0 100px;
}
@media screen and (max-width: 768px) {
  .c-contenido2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: justify;
    padding: 20px 20px;
  }
  .img-p {
    display: flex;
    justify-content: center;
  }
  .texto-content {
    text-align: center;
  }
  .texto-content p {
    text-align: justify;
  }
}
.texto-content p {
  text-align: justify;
}
body.dark .c-contenido {
  background-color: #2e2bff;
}
body.dark .c-contenido2 {
  background-color: #0300c2;
}
.wave-p {
  margin-bottom: -10px;
}
.wave-p2 {
  bottom: 0;
  margin-bottom: -60px;
}

body.dark .wave-p2 path {
  fill: #0300c2;
}
body.dark .wave-p path {
  fill: #0300c2;
}
</style>
