<template>
  <layout>
    <template #app-bar>
      <app-bar>
        <template #left>
          <v-btn
            class="me-2 text-none"
            color="#5865f2"
            elevation="2"
            prepend-icon="mdi-account-plus"
            variant="flat"
          >
            Recrutar
          </v-btn>
        </template>
      </app-bar>
    </template>
    <template #content>
      <v-card class="mx-auto mb-8" elevation="16">
        <v-card-item>
          <v-card-title class="text-center">
            Heróis
          </v-card-title>
        </v-card-item>
        <v-card-text>
          <v-select
            v-model="selected"
            :items="filter"
            class="mb-5"
            clearable
            hint="Por padrão o filtro retorna todos"
            label="Selecione um filtro a aplicar"
            multiple
            persistent-hint
          ></v-select>
          <v-row>
            <v-col
              v-for="(item, index) in 10"
              :key="index"
              cols="6"
              sm="6"
              xs="6"
            >
              <v-card class="grid-item" outlined>
                <v-img
                  :src="getHeroImage(index + 1)"
                  color="surface-variant"
                  cover
                  height="150"
                >
                  <div class="hero-level">40</div>
                  <div class="hero-stars">
                    <v-icon v-for="star in 5" :key="star" class="star-icon">mdi-star</v-icon>
                  </div>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </template>
  </layout>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {getHeroImage} from "@/utils/hero-utils";

const selected = ref<string[]>([]);
const filter: string[] = ['Lendários', 'Épicos', 'Raro', 'Normal', 'Comum'];
</script>

<style scoped>
.grid-item {
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
  overflow: hidden;
}

.hero-level {
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: black;
  color: white;
  border-radius: 50%;
  padding: 8px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
}

.hero-stars {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 4px;
}

.star-icon {
  background-color: black;
  border: 1px solid white;
  border-radius: 50%;
  padding: 4px;
  color: white;
  font-size: 20px;
}
</style>
