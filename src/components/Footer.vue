<template>
  <v-footer dark padless>
    <v-card flat tile class="white--text text-center">
      <v-card-text>
        <v-btn
          v-for="(icon, i) in icons"
          :key="i"
          class="mx-4 white--text"
          :href="icon.link"
          target="_blank"
          icon
        >
          <v-icon size="24px">{{ icon.text }}</v-icon>
        </v-btn>
      </v-card-text>

      <div class="footer-content">
        <div class="telefonos">
          <h1>Telefonos</h1>
          <p><span></span>+562 24134000</p>
          <p><span></span>+562 24134001</p>
        </div>
        <div class="email">
          <h1>Correo</h1>
          <p><span></span>info@loginsa.com</p>
        </div>
        <div class="horario">
          <h1>Horario</h1>
          <p><span></span>De Lunes a Viernes desde las 8:00 hrs. a 17:30 hrs.</p>
        </div>
        <div class="direccion">
          <h1>Dirección</h1>
          <p><span></span> Av. José Miguel Infante Sur 8725, Renca, Santiago – Chile</p>
        </div>
        <!-- <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1583.2742505556075!2d-70.7628104809788!3d-33.40486241644996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c16f32c3eb77%3A0x64606be48b592a2c!2sLoginsa%20-%20CD%20Miraflores!5e0!3m2!1ses-419!2scl!4v1647786695521!5m2!1ses-419!2scl" width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div> -->
      </div>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy; {{ new Date().getFullYear() }} - <strong>LockSeguridad</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      {
        text: "mdi-instagram",
        link: "",
      },
      {
        text: "mdi-twitter",
        link: "https://twitter.com/loginsachile",
      },
      {
        text: "mdi-web",
        link: "http://www.loginsa.com/",
      },
    ],
  }),
};
</script>

<style>
.body.dark .fondo{
  background-color: #020085;
}
.footer-content{
  display: flex;
  justify-content: space-around;
}
@media screen and (max-width: 768px){
  
  .footer-content{
    flex-direction: column;
  }

}
  

.footer-content h1{
  font-size: 20px;
  padding-bottom: 20px;
}
.footer-content p{
  font-size: 15px;
}
.v-card {
  width: 100%;
}
</style>