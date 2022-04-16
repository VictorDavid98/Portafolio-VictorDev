<template>
  <div class="sobre-mi">
    <div class="contenedor">
      <div class="content">
        <h1 style="font-size: 45px">Sobre Mi</h1>
        <p>Hola! Recientemente egrese de ingeniería en informática en el instituto Duoc UC, Sede San Bernardo. Me gusta la programación y todo lo relacionado con la tecnología, aprendo algo nuevo cada día para así ser mejor profesional y mejor persona, con ello, poder enfrentar los desafios de hoy y del mañana. Mi visión en convertirme en programador Full-Stack. Me considero una persona comprometida, autónomo y dinámico.</p>
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
  width: 100%;
  display: flex;
  justify-content: center;
}


.contenedor {
  width: 90%;
  display: flex;
  align-items: center;
  background: rgb(255, 153, 0);
  background: linear-gradient(
    93deg,
    rgba(255, 153, 0, 1) 0%,
    rgba(255, 252, 42, 1) 100%
  );
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
  margin: 50px 50px;
  padding: 20px;
}
body.dark .contenedor {
  background: rgb(7,0,255);
background: linear-gradient(93deg, rgba(7,0,255,1) 0%, rgba(42,211,255,1) 100%);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

}
.content{
  

  margin: 0;
}
.content p{
  font-size: 17px;
}

@media screen and (max-width: 968px) {
  .content {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
}
</style>
