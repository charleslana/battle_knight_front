<template>
  <div class="background-container">
    <slot name="app-bar"/>
    <v-container style="height: 100%; overflow: auto">
      <slot name="content"/>
    </v-container>
    <bottom-bar/>
  </div>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.background-container {
  background-image: url('@/assets/images/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
