<template>
  <layout>
    <v-card
      class="mx-auto my-8"
      elevation="16"
    >
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
            md="4"
            sm="6"
            xs="4"
          >
            <v-card class="grid-item" outlined>
              <v-card-text>
                <p>{{ index + 1 }} - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius.</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </layout>
</template>

<script lang="ts" setup>
import {ref} from 'vue';

const selected = ref<string[]>([]);
const filter: string[] = ['Lendários', 'Épicos', 'Raro', 'Normal', 'Comum'];
</script>

<style scoped>
.grid-item {
  height: 150px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
