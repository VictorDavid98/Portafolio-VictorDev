<template>
  <section id="plus">
    <v-container fluid>
      <v-row align="center" justify="center" v-for="p in plus" :key="p.id">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <v-img
                src="@/assets/img/logo-lock.0508bfe3.webp"
                class="d-block ml-auto mr-auto mb-16"
                max-width="300px"
              />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              
              <h1 class="font-weight-bold mt-8">
                {{p.texto1}}
                <br />
                {{p.texto2}}
              </h1>
              <v-btn
                rounded
                outlined
                href="https://www.lockseguridad.cl/lock/"
                target="_blank"
                large
                color="white"
                class="mt-4"
              >
                <v-icon class="mr-2"> mdi-web </v-icon>
                {{p.boton}}
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import { db } from "../firebase/db";
export default {
  data() {
    return{
      plus: []
    }
  },
  firestore: {
    plus: db.collection("plus"),
  },
};
</script>

<style scoped>
#plus {
  background-image: url("~@/assets/img/flex-point-security-i35mOsE0z2U-unsplash.b2c6a17e.webp");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 400px;
}

#plus .container,
#plus .row {
  height: 100%;
}
</style>