<template>
  <div id="contacto">
    <div class="contenedor-contacto">
      <div class="contacto">
        <h1 class="text-center mb-10">CONTACTO</h1>
        <form>
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="20"
            label="Nombre Completo"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="telefono"
            :error-messages="telefonoErrors"
            label="Teléfono"
            required
            @input="$v.telefono.$touch()"
            @blur="$v.telefono.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="mensaje"
            :error-messages="mensajeErrors"
            label="Mensaje"
            required
            @input="$v.mensaje.$touch()"
            @blur="$v.mensaje.$touch()"
          ></v-text-field>

          <v-checkbox
            v-model="checkbox"
            :error-messages="checkboxErrors"
            label="¿Estás de acuerdo?"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox>

          <v-btn class="mr-4" rounded outlined color="black" @click="submit">
            Enviar
          </v-btn>
          <v-btn rounded outlined color="black" @click="clear"> Limpiar </v-btn>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(20) },
    email: { required, email },
    telefono: { required, maxLength: maxLength(10) },
    mensaje: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: "",
    email: "",
    telefono: "",
    mensaje: "",
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      !this.$v.checkbox.checked && errors.push("Debe aceptar continuar!");
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      !this.$v.select.required && errors.push("Campo requerido");
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("El nombre debe tener como máximo 20 caracteres");
      !this.$v.name.required && errors.push("Nombre es requerido.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email &&
        errors.push("Debe ser un correo electrónico válido");
      !this.$v.email.required && errors.push("E-mail es requerido");
      return errors;
    },
    telefonoErrors() {
      const errors = [];
      if (!this.$v.telefono.$dirty) return errors;
      !this.$v.telefono.maxLength &&
        errors.push("El telefono debe tener max 9 numeros");
      !this.$v.telefono.required && errors.push("Telefono es requerido.");
      return errors;
    },
    mensajeErrors() {
      const errors = [];
      if (!this.$v.mensaje.$dirty) return errors;
      !this.$v.mensaje.required && errors.push("Mensaje es requerido.");
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.telefono = "";
      this.mensaje = "";
      this.checkbox = false;
    },
  },
};
</script>
<style scoped>
.contenedor-contacto {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
}
body.dark .contenedor-contacto {
  background-color: #020085;
}
.contacto {
  width: 50%;
  background-color: #f3f3f3;
  margin-top: 50px;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 25px 0 rgb(59, 59, 59);
}
body.dark .contacto {
  background-color: #ff8800;
  box-shadow: 0 0 25px 0 rgb(255, 187, 0);
}
@media screen and (max-width: 768px) {
  .contacto {
    width: 90%;
  }
}
</style>
