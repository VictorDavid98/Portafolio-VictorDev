<template>
  <div class="sobre-mi">
    <div class="contenedor">
      <div class="content">
        <h1 style="font-size: 45px">Sobre Mi</h1>
        <p>
          Mi portafolio web es una colección de mis mejores trabajos en diseño gráfico y desarrollo web. Incluye proyectos como diseño de logotipos, carteles publicitarios, sitios web y aplicaciones móviles que muestran mi creatividad y habilidades técnicas. Además, proporciona detalles sobre mi experiencia y conocimientos en herramientas y tecnologías relacionadas. Es una excelente herramienta para mostrar mi trabajo a potenciales clientes y empleadores, y para diferenciarme de la competencia.
        </p>
      </div>

      <img src="../assets/img/img-sobre-mi.png" alt="" width="40%" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sobre-mi {
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgb(147, 11, 238) 0%,
    rgb(177, 177, 177) 65%
  );
 
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
}
body.dark .sobre-mi {
  background: rgb(0, 17, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 17, 255, 1) 0%,
    rgb(1, 238, 255) 65%
  );
}

.contenedor {
  width: 65%;
  display: flex;
  align-items: center;
  margin: 50px 50px;
  padding-top: 90px;
  padding-bottom: 90px;
}

.content {
  margin: 0;
}
.content p {
  font-size: 19px;
}

@media screen and (max-width: 968px) {
  .content {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}
</style>
