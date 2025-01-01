<template>
  <footer class="footer">
    <v-btn
      v-ripple="false"
      :color="currentTab === 'main' ? 'default' : 'blue-grey-lighten-2'"
      class="footer-btn"
      @click="navigateTo('main')"
    >
      <div class="icon-text">
        <i :class="{ active: currentTab === 'main' }" class="ra ra-castle-emblem"></i>
        <span>Principal</span>
      </div>
    </v-btn>
    <v-btn
      :color="currentTab === 'heroes' ? 'default' : 'blue-grey-lighten-2'"
      class="footer-btn"
      @click="navigateTo('heroes')"
    >
      <div class="icon-text">
        <i :class="{ active: currentTab === 'heroes' }" class="ra ra-hood"></i>
        <span>Heróis</span>
      </div>
    </v-btn>
    <v-btn
      :color="currentTab === 'knight' ? 'default' : 'blue-grey-lighten-2'"
      class="footer-btn"
      @click="navigateTo('knight')"
    >
      <div class="icon-text">
        <i :class="{ active: currentTab === 'knight' }" class="ra ra-knight-helmet"></i>
        <span>Cavaleiro</span>
      </div>
    </v-btn>
    <v-btn
      :color="currentTab === 'guild' ? 'default' : 'blue-grey-lighten-2'"
      class="footer-btn"
      @click="navigateTo('guild')"
    >
      <div class="icon-text">
        <i :class="{ active: currentTab === 'guild' }" class="ra ra-wyvern"></i>
        <span>Guilda</span>
      </div>
    </v-btn>
  </footer>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';

const currentTab = ref('main');
const router = useRouter();
const route = useRoute();

const tabRoutes: Record<string, string> = {
  '/main': 'main',
  '/heroes': 'heroes',
  '/knight': 'knight',
  '/guild': 'guild',
};

const navigateTo = (tab: string) => {
  currentTab.value = tab;
  router.push(`/${tab}`);
};

onMounted(() => {
  currentTab.value = tabRoutes[route.path] || 'main';
});
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  padding: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: none;
  color: white;
  padding: 5px;
}

.footer-btn .icon-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-btn .icon-text i {
  font-size: 24px;
  color: white;
}

.footer-btn .icon-text span {
  margin-top: 5px;
  font-size: 12px;
  color: white;
}

.footer-btn .icon-text i.active {
  color: white;
}

.bg-blue-grey-lighten-2 {
  background-color: transparent !important;
}
</style>
