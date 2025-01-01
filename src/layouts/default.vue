<template>
  <v-app>
    <div class="layout-wrapper">
      <div class="layout-container">
        <v-main>
          <router-view/>
        </v-main>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.layout-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  min-height: 100vh;
}

.layout-container {
  width: 600px;
  background-color: grey;
  min-height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
