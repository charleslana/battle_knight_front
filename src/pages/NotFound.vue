<template>
  <div class="not-found">
    <h1>Página Não Encontrada</h1>
    <p>Desculpe, a rota que você tentou acessar não existe.</p>
    <router-link to="/">Voltar para a página inicial</router-link>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 50px;
  color: #fff;
  background-color: gray;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
