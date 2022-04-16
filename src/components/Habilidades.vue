<template>
    <div class="contenedor-h">
        <div class="habilidades"></div>
    </div>
</template>
<script>


export default({

})
</script>
<style scoped>
.contenedor-h{
    width: 100%;
    display: flex;
    justify-content: center;
}
.habilidades{
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
</style>