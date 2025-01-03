<template>
  <layout>
    <template #app-bar>
      <app-bar>
        <template #left>
          <v-btn class="mr-5" icon @click="null">
            <v-badge color="red" content="5" overlap>
              <v-icon>mdi-email-outline</v-icon>
            </v-badge>
          </v-btn>
          <v-btn class="mr-5" icon @click="null">
            <v-badge color="blue" content="3" overlap>
              <v-icon>mdi-newspaper-variant-outline</v-icon>
            </v-badge>
          </v-btn>
        </template>
      </app-bar>
    </template>
    <template #content>
      <v-container>
        <v-row align="center" class="mt-4" justify="space-between">
          <v-col class="d-flex justify-center" cols="6" sm="4">
            <v-tooltip location="top" open-on-click>
              <template #activator="{ props }">
                <div class="box" v-bind="props">
                  <img :src="gold" alt="Gold Icon" class="icon"/>
                  <div class="text">1.000</div>
                </div>
              </template>
              <span>Ouro: 1.000</span>
            </v-tooltip>
          </v-col>
          <v-col class="d-flex flex-column align-center" cols="6" sm="4">
            <v-tooltip location="top" open-on-click>
              <template #activator="{ props }">
                <div class="box" v-bind="props">
                  <div class="player-level">
                    <span>12</span>
                  </div>
                  <div class="player-info">
                    <div class="player-name">Charles Lana</div>
                    <v-progress-linear
                      v-model="exp"
                      bg-color="#212121"
                      bg-opacity="1"
                      class="progress-bar"
                      color="indigo"
                      height="25"
                      max="5"
                    >
                      <strong v-if="isMaxLevel">Máximo</strong>
                      <strong v-else>{{ Math.ceil(exp) * 100 / 5 }}%</strong>
                    </v-progress-linear>
                  </div>
                </div>
              </template>
              <span>Jogador: Charles Lana</span>
              <p>Experiência: 1/5</p>
            </v-tooltip>
          </v-col>
          <v-col class="d-flex justify-center" cols="6" sm="4">
            <v-tooltip location="top" open-on-click>
              <template #activator="{ props }">
                <div class="box" v-bind="props">
                  <img :src="silver" alt="Silver Icon" class="icon"/>
                  <div class="text">1.000</div>
                </div>
              </template>
              <span>Prata: 1.000</span>
            </v-tooltip>
          </v-col>
          <v-col class="d-flex justify-center" cols="6" sm="4">
            <v-tooltip location="top" open-on-click>
              <template #activator="{ props }">
                <div class="box" v-bind="props">
                  <img :src="trophy" alt="Trophy Icon" class="icon"/>
                  <div class="text">0</div>
                </div>
              </template>
              <span>Troféus: 0</span>
            </v-tooltip>
          </v-col>
        </v-row>
        <v-carousel class="mt-5" height="300" hide-delimiters>
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            class="img-carousel cursor-pointer"
            cover
            position="top"
            @click="() => handleCarousel(i)"
          >
            <div class="d-flex fill-height justify-center align-end">
              <div class="text-h2 text-carousel">
                {{ item.text }}
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </template>
  </layout>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import bgCarousel1 from "@/assets/images/main/bg_carousel.jpg";
import bgCarousel2 from "@/assets/images/main/bg_carousel_2.jpg";
import bgCarousel3 from "@/assets/images/main/bg_carousel_3.jpg";
import bgCarousel4 from "@/assets/images/main/bg_carousel_4.jpg";
import gold from "@/assets/images/icons/gold.png";
import silver from "@/assets/images/icons/silver.png";
import trophy from "@/assets/images/icons/trophy.png";

const exp = ref(4);
const isMaxLevel = ref(false);

const items = [
  {src: bgCarousel1, text: "História"},
  {src: bgCarousel2, text: "Desafios"},
  {src: bgCarousel3, text: "Arena"},
  {src: bgCarousel4, text: "Torre"},
];

const handleCarousel = (index: number) => {
  console.log(index);
};
</script>

<style scoped>
.img-carousel {
  border: 5px solid lightblue;
  border-radius: 100px;
  overflow: hidden;
}

.text-carousel {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 100px;
  width: 100%;
  text-align: center;
}

.box {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  height: 70px;
  border: 2px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  gap: 5px;
}

.icon {
  width: 50px;
  height: 50px;
}

.text {
  font-size: clamp(1.2rem, 2vw, 1.2rem);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  text-align: center;
  text-shadow: 1px 1px 0 #212121, -1px -1px 0 #212121, 1px -1px 0 #212121, -1px 1px 0 #212121;
}

.player-level {
  width: 82px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #898f8e;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border: 2px dashed white;
}

.player-info {
  text-align: center;
  width: 100%;
  overflow: hidden;
}

.player-name {
  font-size: clamp(0.8rem, 2vw, 1.2rem);
  font-weight: bold;
  margin-bottom: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-shadow: 1px 1px 0 #212121, -1px -1px 0 #212121, 1px -1px 0 #212121, -1px 1px 0 #212121;
}


.progress-bar {
  border-radius: 5px;
}
</style>
