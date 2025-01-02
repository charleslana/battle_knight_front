<template>
  <div class="app-bar">
    <v-container class="d-flex justify-end">
      <v-btn icon @click="goToHome">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-container>
  </div>
</template>

<script lang="ts" setup>
const router = useRouter();

const goToHome = () => {
  router.push('/');
}
</script>

<style scoped>
.app-bar {
  display: flex;
  justify-content: flex-end;
}
</style>
