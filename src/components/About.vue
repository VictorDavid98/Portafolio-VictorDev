<template>
  <section id="about">
    
      <div class="contenedor">
        <div class="content">
          <div class="centrar" v-for="a in sobre" :key="a.id">
            <h1 style="font-size: 35px">{{ a.titulo }}</h1>
            <p class="mt-8 justify">
              {{ a.descripcion }}
            </p>
          </div>
          <div class="centrar-2 mt-6">
            <img
              src="../assets/img/undraw_secure_login_pdn4.svg"
              alt=""
              width="100%"
            />
          </div>
        </div>
      </div>
  
  </section>
</template>

<script>
import { db } from "../firebase/db";
export default {
  data() {
    return{
      sobre: []
    }
  },
  firestore: {
    sobre: db.collection("about"),
  },
};
</script>

<style scoped>
#about {
  margin-top: 100px;
  background-color: #f3f3f3;
}

.justify {
  text-align: justify;
}
.contenedor {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
}
body.dark .contenedor {
  background-color: #0300c2;
}
.content {
  width: 81%;
  margin: 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  color: black;
  padding: 30px 30px;
}
body.dark .content {
  color: #fff;
}

@media screen and (max-width: 968px) {
  .content {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}
</style>
