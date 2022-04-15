<template >
  <div class="contenedor-plan" >
    <svg
      class="wave-planes"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#f3f3f3"
        fill-opacity="1"
        d="M0,256L24,250.7C48,245,96,235,144,224C192,213,240,203,288,170.7C336,139,384,85,432,90.7C480,96,528,160,576,192C624,224,672,224,720,197.3C768,171,816,117,864,117.3C912,117,960,171,1008,186.7C1056,203,1104,181,1152,154.7C1200,128,1248,96,1296,90.7C1344,85,1392,107,1416,117.3L1440,128L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
      ></path>
    </svg>
    <h1 class="titulo-planes" id="planes">CONOCE NUESTROS PLANES</h1>
    <div class="tabla-comparativa">
      <article class="tabs-table">
        <div class="tabs-table">
          <table class="normal-table">
            <tr>
              <td></td>
              <td class="tag1">Mas Comprado</td>
              <td class="tag2">Recomendado</td>
              <td class="tag3">Barato</td>
            </tr>
            <tr>
              <th>Plan</th>
              <td>
                <div class="circle1">
                  <div class="circle2">
                    <v-img src="~@/assets/img/paperplane.svg" />
                  </div>
                </div>
                <br />
                <h4 class="nomproduct">Basico</h4>
              </td>
              <td>
                <div class="circle1">
                  <div class="circle2">
                    <v-img src="~@/assets/img/airplane.svg" />
                  </div>
                </div>
                <br />
                <h4 class="nomproduct">Premium</h4>
              </td>
              <td>
                <div class="circle1">
                  <div class="circle2">
                    <v-img src="~@/assets/img/aeroplane.svg" />
                  </div>
                </div>
                <br />
                <h4 class="nomproduct">Empresarial</h4>
              </td>
            </tr>
            <tr>
              <th>Tiempo</th>
              <td>3 Meses</td>
              <td>12 Meses</td>
              <td>24 Meses</td>
            </tr>
            <tr>
              <th>Puntos NFC instalados para control de seguridad</th>
              <td>6</td>
              <td>15</td>
              <td>ilimitados</td>
            </tr>
            <tr>
              <th>Dispositivos</th>
              <td>5</td>
              <td>12</td>
              <td>30</td>
            </tr>
            <tr>
              <th>Garantia</th>
              <td>6 MESES</td>
              <td>12 MESES</td>
              <td>48 MESES</td>
            </tr>
            <tr>
              <th>Control de Acceso</th>
              <td>
                <img src="~@/assets/img/check-solid.svg" width="25px" alt="" />
              </td>
              <td>
                <img src="~@/assets/img/check-solid.svg" width="25px" alt="" />
              </td>
              <td>
                <img src="~@/assets/img/check-solid.svg" width="25px" alt="" />
              </td>
            </tr>
            <tr>
              <th>Gestión</th>
              <td></td>
              <td>
                <img src="~@/assets/img/check-solid.svg" width="25px" alt="" />
              </td>
              <td>
                <img src="~@/assets/img/check-solid.svg" width="25px" alt="" />
              </td>
            </tr>
            <tr>
              <th>Soporte</th>
              <td></td>
              <td>
                <img src="~@/assets/img/check-solid.svg" width="25px" alt="" />
              </td>
              <td>
                <img src="~@/assets/img/check-solid.svg" width="25px" alt="" />
              </td>
            </tr>
            <tr>
              <th>Caracteristica 8</th>
              <td></td>
              <td></td>
              <td>
                <img src="~@/assets/img/check-solid.svg" width="25px" alt="" />
              </td>
            </tr>
            <tr>
              <th>Caracteristica 9</th>
              <td></td>
              <td></td>
              <td>
                <img src="~@/assets/img/check-solid.svg" width="25px" alt="" />
              </td>
            </tr>
            <tr>
              <th>Precio</th>
              <td>desde $59.990</td>
              <td>desde $99.990</td>
              <td>desde $129.990</td>
            </tr>
            <tr>
              <th></th>
              <td>
                <v-btn rounded outlined color="orange" style="font-weight: 900">
                  ¡contrata ahora!
                </v-btn>
              </td>
              <td>
                <v-btn rounded outlined color="white" style="font-weight: 900">
                  ¡contrata ahora!
                </v-btn>
              </td>
              <td>
                <v-btn rounded outlined color="orange" style="font-weight: 900">
                  ¡contrata ahora!
                </v-btn>
              </td>
            </tr>
          </table>
        </div>
        <!-- *************************************************************************************************** -->
        <div class="tabs">
          <input
            class="input"
            name="tabs"
            type="radio"
            id="tab-1"
            checked="checked"
          /><label class="label" for="tab-1">Mas Comprado</label>
          <div class="panel">
            <table class="mobile-table">
              <tr>
                <td colspan="2" class="fila-mobile">
                  <div class="circle1">
                    <div class="circle2">
                      <v-img src="~@/assets/img/paperplane.svg" />
                    </div>
                  </div>
                  <br />
                  <h4 class="nomproduct2">Basico</h4>
                </td>
              </tr>
              <tr>
                <th>Tiempo</th>
                <td>3 MESES</td>
              </tr>
              <tr>
                <th>PUNTOS NFC INSTALADOS PARA CONTROL DE SEGURIDAD</th>
                <td>6</td>
              </tr>
              <tr>
                <th>DISPOSITIVOS</th>
                <td>5</td>
              </tr>
              <tr>
                <th>GARANTIA</th>
                <td>6 MESES</td>
              </tr>
              <tr>
                <th>CONTROL DE ACCESO</th>
                <td><img
                    src="~@/assets/img/check-solid.svg"
                    width="25px"
                    alt=""
                  /></td>
              </tr>
              <tr>
                <th>GESTIÓN</th>
                <td>
                  
                </td>
              </tr>
              <tr>
                <th>SOPORTE</th>
                <td></td>
              </tr>
              <tr>
                <th>CARACTERISTICA 8</th>
                <td></td>
              </tr>
              <tr>
                <th>CARACTERISTICA 9</th>
                <td></td>
              </tr>
              <tr>
                <th>Precio</th>
                <td>desde $59.990</td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <v-btn rounded outlined color="orange" class="mt-2 mb-2">
                    contratar
                  </v-btn>
                </td>
              </tr>
            </table>
          </div>
          <input class="input" name="tabs" type="radio" id="tab-2" /><label
            class="label"
            for="tab-2"
            >Recomendado</label
          >
          <div class="panel">
            <table class="mobile-table">
              <tr>
                <td colspan="2" class="fila-mobile">
                  <div class="circle1">
                    <div class="circle2">
                      <v-img src="~@/assets/img/airplane.svg" />
                    </div>
                  </div>
                  <br />
                  <h4 class="nomproduct2">Premium</h4>
                </td>
              </tr>
              <tr>
                <th>Tiempo</th>
                <td>12 MESES</td>
              </tr>
              <tr>
                <th>PUNTOS NFC INSTALADOS PARA CONTROL DE SEGURIDAD</th>
                <td>15</td>
              </tr>
              <tr>
                <th>DISPOSITIVOS</th>
                <td>12</td>
              </tr>
              <tr>
                <th>GARANTIA</th>
                <td>12 MESES</td>
              </tr>
              <tr>
                <th>CONTROL DE ACCESO</th>
                <td>
                  <img
                    src="~@/assets/img/check-solid.svg"
                    width="25px"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <th>GESTIÓN</th>
                <td>
                  <img
                    src="~@/assets/img/check-solid.svg"
                    width="25px"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <th>SOPORTE</th>
                <td>
                  <img
                    src="~@/assets/img/check-solid.svg"
                    width="25px"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <th>CARACTERISTICA 8</th>
                <td></td>
              </tr>
              <tr>
                <th>CARACTERISTICA 9</th>
                <td></td>
              </tr>
              <tr>
                <th>Precio</th>
                <td>desde $99.990</td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <v-btn rounded outlined color="orange" class="mt-2 mb-2">
                    contratar
                  </v-btn>
                </td>
              </tr>
            </table>
          </div>
          <input class="input" name="tabs" type="radio" id="tab-3" /><label
            class="label"
            for="tab-3"
            >Barato</label
          >
          <div class="panel">
            <table class="mobile-table">
              <tr>
                <td colspan="2" class="fila-mobile">
                  <div class="circle1">
                    <div class="circle2">
                      <v-img src="~@/assets/img/aeroplane.svg" />
                    </div>
                  </div>
                  <br />
                  <h4 class="nomproduct2">Empresarial</h4>
                </td>
              </tr>
              <tr>
                <th>Tiempo</th>
                <td>24 MESES</td>
              </tr>
              <tr>
                <th>PUNTOS NFC INSTALADOS PARA CONTROL DE SEGURIDAD</th>
                <td>ILIMITADOS</td>
              </tr>
              <tr>
                <th>DISPOSITIVOS</th>
                <td>30</td>
              </tr>
              <tr>
                <th>GARANTIA</th>
                <td>48 MESES</td>
              </tr>
              <tr>
                <th>CONTROL DE ACCESO</th>
                <td>
                  <img
                    src="~@/assets/img/check-solid.svg"
                    width="25px"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <th>GESTIÓN</th>
                <td>
                  <img
                    src="~@/assets/img/check-solid.svg"
                    width="25px"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <th>SOPORTE</th>
                <td>
                  <img
                    src="~@/assets/img/check-solid.svg"
                    width="25px"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <th>CARACTERISTICA 8</th>
                <td>
                  <img
                    src="~@/assets/img/check-solid.svg"
                    width="25px"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <th>CARACTERISTICA 9</th>
                <td>
                  <img
                    src="~@/assets/img/check-solid.svg"
                    width="25px"
                    alt=""
                  />
                </td>
              </tr>
              <tr>
                <th>Precio</th>
                <td>desde $129.990</td>
              </tr>
              <tr>
                <th></th>
                <td>
                  <v-btn rounded outlined color="orange" class="mt-2 mb-2">
                    contratar
                  </v-btn>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.contenedor-plan {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-bottom: 80px;
}
.wave-planes {
  position: relative;
  left: 0;
  top: 0;
}
.titulo-planes{
  text-align: center;
}
body.dark .titulo-planes{
  color: #fff;
}
body.dark .wave-planes path {
  fill: #0300c2;
}
body.dark .contenedor-plan {
  background-color: #020085;
}
.tabla-comparativa {
  width: 85%;
  margin-top: 50px;
  background-color: #ffffff;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.5);
}
body.dark .tabla-comparativa {
  background-color: #2e2bff;
  box-shadow: 0 0 25px 0 rgb(40, 54, 255);
}

.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
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
.input,
.label,
.tabs {
  display: none;
}
.normal-table td:nth-child(3) {
  background-color: #2e2bff;
  color: #fff;
}
body.dark .normal-table td:nth-child(3) {
  background-color: #ff8800;
}
.normal-table {
  font-family: arial;
  font-size: 0.8rem !important;
  vertical-align: middle;
  border-collapse: collapse;
  width: 100%;
  margin: auto;
}
.normal-table th {
  text-transform: uppercase;
  font-size: 0.7rem !important;
  border: 0.1px solid #c0c0c0;
  width: 25%;
  padding: 0 1rem;
  text-align: center;
  color: #000000;
}
.normal-table td {
  padding: 10px 10px;
  text-align: center;
  border: 0.1px solid #c0c0c0;
  color: #000000;
}
body.dark .normal-table td {
  color: #fff;
  border: 0.5px solid #646464;
}
body.dark .normal-table th {
  color: #fff;
  border: 0.5px solid #646464;
}
.normal-table .tag1,
.normal-table .tag2,
.normal-table .tag3 {
  width: 25%;
  padding: 0 5px !important;
  text-align: center;
  text-transform: uppercase;
  font-size: 0.9rem !important;
  font-weight: bold;
  color: rgb(0, 0, 0);
  height: 2.5rem !important;
}

.normal-table .tag2 {
  background-color: #0044ff !important;
}
body.dark .normal-table .tag2 {
  background-color: #ff8800 !important;
}

.normal-table .prodimg {
  margin-bottom: 5px;
  max-height: 100px !important;
}

.normal-table .nomproduct {
  text-transform: uppercase;
  font-weight: 700;
  margin: 1rem 0;
  font-size: 1.4rem;
  color: #111;
}
.normal-table .linkprod {
  background-color: gold;
  font-size: 0.7rem;
  padding: 0.35rem 0.7rem;
  border: 0.09rem solid #e9e1e1;
  border-radius: 5px;
  color: rgb(0, 4, 255);
  text-decoration: none;
  box-shadow: inset 0px 0px 0.5px #555555;
}
/* ===================== MOBILE VERSION =====================*/
@media screen and (max-width: 768px) {
  .normal-table {
    display: unset;
    display: none;
  }
  .mobile-table {
    display: inline-table;
  }
  .mobile-table h4 {
    font-size: 0.8rem;
    text-transform: uppercase;
  }
  .mobile-table,
  .mobile-table td {
    width: 100%;
    font-size: 0.8rem;
    text-align: center;
    padding: 0 0.8rem;
    border-collapse: collapse;
    border: 0.5px solid #b8b8b8;
    border-top: none;
  }
  .mobile-table th {
    border: 0.5px solid #b8b8b8;
    border-collapse: collapse;
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    text-align: left;
    padding: 0.8rem 1rem;

    font-size: 0.7rem;
    font-weight: 300;
    text-transform: uppercase;
  }
  body.dark .mobile-table th {
    background-color: #2e2bff;
    color: #fff;
  }
  body.dark .mobile-table td {
    background-color: #2e2bff;
    color: #fff;
  }

  .mobile-table .prodimg2 {
    max-height: 75px !important;
  }
  .mobile-table .fila-mobile {
    padding: 1.5rem 0 0 0;
  }
  .mobile-table .nomproduct2 {
    margin: 0.8rem 0 0.8rem 0;
  }
  .tabs-table {
    position: relative;
    display: unset;
    font-family: arial;
    box-sizing: border-box;
  }
  .tabs {
    width: 100%;
    display: inline-flex;
    flex-wrap: wrap;
  }
  .input {
    display: unset;
    left: 0%;
    top: 0%;
    position: absolute;
    opacity: 0;
  }
  .label {
    display: unset;
    border: 0.5px solid #b8b8b8;
    width: 33.3%;
    padding: 1rem 0;
    text-align: center;
    background-color: #fff;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8rem;
    color: #7f7f7f;

    transition: background 0.1s, color 0.1s;
  }
  body.dark .label {
    background-color: #2e2bff;
    color: #fff;
  }
  .input:focus + .label {
    z-index: 1;
  }
  .input:checked + .label {
    width: 33.4%;
    border-bottom: none;
    border-top: 0.2rem solid #ff7300;
    background: #fff;
    box-shadow: inset 0px 0px 0px #878787;
    color: #000;
  }
  body.dark .input:checked + .label {
    background-color: #2e2bff;
    color: #fff;
  }
  .panel {
    display: none;
    margin: 0 auto;
    width: 100%;
    background: #fff;
    order: 99;
  }
  .input:checked + .label + .panel {
    display: block;
  }
}
</style>
