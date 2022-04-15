<template>
  <section id="planes" class="pb-8">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-card class="tabla-d" style="width: 100%">
            <h1 class="text-center pt-6 font-weight-light display-2 mt-16">
              Planes Fijos
            </h1>
            <v-divider class="my-6"></v-divider>
            <v-row class="text-center">
              <v-col class="col-12 col-sm-6 col-md-4">
                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                      <div class="circle1">
                        <div class="circle2">
                          <v-img src="~@/assets/img/paperplane.svg"></v-img>
                        </div>
                      </div>
                    </div>
                    <div class="text-uppercase text-h5 my-2">Básico</div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase">Caracteristicas del plan</div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase">Caracteristicas del plan</div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase">Otras caracteristicas...</div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase text-h4 mt-6">$ 15.000</div>
                    <v-btn
                      v-bind="size"
                      rounded
                      outlined
                      color="orange"
                      class="mt-6"
                    >
                      ¡Contrata ahora!
                    </v-btn>
                  </v-card-text>
                  <v-divider
                    style="margin-right: -23px"
                    vertical
                    v-if="this.$vuetify.breakpoint.smAndUp"
                  ></v-divider>
                </div>
                <v-divider
                  class="mx-4"
                  v-if="!this.$vuetify.breakpoint.smAndUp"
                ></v-divider>
              </v-col>
              <v-col class="col-12 col-sm-6 col-md-4">
                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                      <div class="circle1">
                        <div class="circle2">
                          <v-img src="~@/assets/img/airplane.svg" />
                        </div>
                      </div>
                    </div>
                    <div class="text-uppercase text-h5 my-2">Profesional</div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase">Plan basico +</div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase">Caracteristicas del plan</div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase">Otras caracteristicas...</div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase text-h4 mt-6">$ 110.000</div>
                    <v-btn
                      v-bind="size"
                      rounded
                      outlined
                      color="orange"
                      class="mt-6"
                    >
                      ¡contrata ahora!
                    </v-btn>
                  </v-card-text>
                  <v-divider
                    style="margin-right: -23px"
                    vertical
                    v-if="this.$vuetify.breakpoint.mdAndUp"
                  ></v-divider>
                </div>
                <v-divider
                  class="mx-4"
                  v-if="!this.$vuetify.breakpoint.smAndUp"
                ></v-divider>
              </v-col>
              <v-col class="col-12 col-md-4">
                <v-divider
                  v-if="this.$vuetify.breakpoint.smOnly"
                  class="mx-4"
                ></v-divider>

                <div class="flex-center">
                  <v-card-text>
                    <div class="flex-center">
                      <div class="circle1">
                        <div class="circle2">
                          <v-img src="~@/assets/img/aeroplane.svg" />
                        </div>
                      </div>
                    </div>
                    <div class="text-uppercase text-h5 my-2">Empresarial</div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase">Plan profesional +</div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase">Caracteristicas del plan</div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase">Caracteristicas del plan</div>
                    <v-divider class="my-2" />
                    <div class="text-uppercase text-h4 mt-6">$ 500.000</div>
                    <v-btn
                      v-bind="size"
                      rounded
                      outlined
                      color="orange"
                      class="mt-6"
                    >
                      ¡Contrata Ahora!
                    </v-btn>
                  </v-card-text>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <div class="svg-border-rounded text-light">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 200">
        <path
          fill="#283e79"
          fill-opacity="1"
          d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>
    </div> -->
  </section>
</template>

<style lang="scss">
$main_color: #283e79;
body.dark .tabla-d {
  background-color: #6200ff;
  color: #fff;
}
ul {
  font-size: 13px;
  line-height: 1.5em;
  margin: 5px 0 15px;
  padding: 0;

  li {
    list-style: none;
    position: relative;
    padding: 0 0 0 20px;
  }

  li {
    &::before {
      content: "";
      position: absolute;
      left: 0;
      top: 5px;
      width: 10px;
      height: 10px;
      background-color: $main_color;
      border-radius: 50%;
      -moz-border-radius: 50%;
      -webkit-eeborder-radius: 50%;
    }
  }
}
</style>

<style scoped>
.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #e0effc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.body.dark .circle2 {
  background-color: #ffa600;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f8f8f8;
  z-index: -1;
}

#planes {
  z-index: 0;
}
body.dark #planes {
  background-color: #020085;
}

.content {
  z-index: 1;
}

svg {
  overflow: hidden;
}

section {
  position: relative;
}
</style>

<script>
export default {
  data: () => ({
    plan: [
      {
        title: "Básico",
        price: "$ 15.000",
        img: "f1.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 3",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 4",
          },
        ],
      },
      {
        title: "Profesional",
        price: "$ 110000",
        img: "f2.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 3",
            color: "success",
          },
          {
            icon: {
              text: "mdi-cancel",
              color: "red",
            },
            text: "Feature 4",
          },
        ],
      },
      {
        title: "Empresarial",
        price: "$ 200.000",
        img: "f3.png",
        features: [
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 1",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 2",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 3",
            color: "success",
          },
          {
            icon: {
              text: "mdi-check",
              color: "success",
            },
            text: "Feature 4",
            color: "success",
          },
        ],
      },
    ],
  }),
  computed: {
    size() {
      const size = { md: "large", xl: "x-large" }[
        this.$vuetify.breakpoint.name
      ];
      return size ? { [size]: true } : {};
    },
  },
};
</script>
