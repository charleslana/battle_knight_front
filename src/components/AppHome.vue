<template>
  <div class="background-container">
    <div class="app-bar">
      <v-container>
        <v-btn class="sound-btn" icon @click="toggleSound">
          <v-icon>{{ soundOn ? 'mdi-volume-high' : 'mdi-volume-off' }}</v-icon>
        </v-btn>
      </v-container>
    </div>
    <div class="container-1">
      <v-container>
        <div class="text-h1 font-logo text-center">
          Battle Knight
        </div>
      </v-container>
    </div>
    <div class="container-1">
      <v-btn size="x-large" @click="dialogLoginVisible = true">
        Entrar
      </v-btn>
    </div>
    <div class="footer">
      <v-container>
        <div class="footer-left">
          Criado por Charles Lana @2024 - {{ currentYear }}
        </div>
        <div class="footer-right">
          Versão: {{ packageJson.version }}
        </div>
      </v-container>
    </div>
  </div>
  <login-dialog v-model="dialogLoginVisible" :overlay="overlay" @close="handleDialogLoginClose"
                @loading="handleOverlayChange" @register="handleOpenDialogRegister"
  />
  <register-dialog v-model="dialogRegisterVisible" :overlay="overlay" @close="handleDialogRegisterClose"
                   @loading="handleOverlayChange"
  ></register-dialog>
  <v-overlay v-model="overlay" persistent scroll-strategy="none"></v-overlay>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import packageJson from '@/../package.json';

const soundOn = ref(true);
const dialogLoginVisible = ref(false);
const dialogRegisterVisible = ref(false);
const overlay = ref(false);

const currentYear = new Date().getFullYear();

const toggleSound = () => {
  soundOn.value = !soundOn.value;
};

const handleDialogLoginClose = () => {
  dialogLoginVisible.value = false;
}

const handleDialogRegisterClose = () => {
  dialogRegisterVisible.value = false;
}

const handleOverlayChange = (value: boolean) => {
  overlay.value = value;
}

const handleOpenDialogRegister = () => {
  dialogRegisterVisible.value = true;
}
</script>

<style scoped>
.background-container {
  background-image: url('@/assets/images/home/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-bar {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.container-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.font-logo {
  font-family: 'Vartek', serif;
  color: white;
  text-shadow: 2px 2px 0 #212121,
  -2px -2px 0 #212121,
  2px -2px 0 #212121,
  -2px 2px 0 #212121;
}

.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  font-size: 12px;
}

.footer-left,
.footer-right {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
