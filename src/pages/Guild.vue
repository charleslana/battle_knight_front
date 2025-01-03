<template>
  <layout>
    <template #app-bar>
      <app-bar/>
    </template>
    <template #content>
      <div v-for="n in 1" :key="n">
        <h1>Guild</h1>
      </div>
    </template>
  </layout>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>
