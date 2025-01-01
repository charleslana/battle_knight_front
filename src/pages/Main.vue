<template>
  <layout>
    <div v-for="n in 1" :key="n">
      <h1>Main</h1>
    </div>
    <v-carousel height="300" hide-delimiters>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        class="img-carousel"
        cover
        position="top"
      >
        <div class="d-flex fill-height justify-center align-end">
          <div class="text-h2 text-carousel">
            {{ item.text }}
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </layout>
</template>

<script lang="ts" setup>
import bgCarousel1 from '@/assets/images/main/bg_carousel.jpg';
import bgCarousel2 from '@/assets/images/main/bg_carousel.jpg';
import bgCarousel3 from '@/assets/images/main/bg_carousel.jpg';
import bgCarousel4 from '@/assets/images/main/bg_carousel.jpg';

const items = [
  {src: bgCarousel1, text: 'História'},
  {src: bgCarousel2, text: 'Desafios'},
  {src: bgCarousel3, text: 'Arena'},
  {src: bgCarousel4, text: 'Torre'},
];
</script>

<style scoped>
.img-carousel {
  border: 5px solid lightblue;
  border-radius: 100px 100px 100px 100px;
  overflow: hidden;
}

.text-carousel {
  background: rgba(0, 0, 0, 0.5);
  border-radius: 100px 100px 100px 100px;
  width: 100%;
  text-align: center;
}
</style>
