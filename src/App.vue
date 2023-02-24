<script lang="ts">
import { defineComponent } from 'vue';
import pioneers from './assets/pioneers.json'

export default defineComponent({
  data() {
    return {
      pioneers: [...pioneers].sort(() => Math.random() - 0.5),
    }
  },
  mounted() {
    (this as any).$confetti.start();
    setTimeout(() => {
      (this as any).$confetti.stop();
    }, 1000);
  },
});
</script>

<template>
  <main>
    <h1 class="bohr__title" data-bohr-cms data-bohr-file="src/App.vue" data-bohr-index="1" data-bohr-dist-file="index.html" data-bohr-dist-index="1"><img alt="bohr.io" border="0" data-v-58f9af68="" data-v-62cd5784="" data-v-c7b06533="" height="80" hspace="0" src="https://pioneiros.bohr.io/logo_bohr.png" style="width: 320px; height: 80px; margin: 0px; border: 0px solid black;" vspace="0" width="320" /></h1>
    <div class="hero__text" data-bohr-cms data-bohr-file="src/App.vue" data-bohr-index="2" data-bohr-dist-file="index.html" data-bohr-dist-index="2"><p data-v-58f9af68="" data-v-62cd5784="" data-v-c7b06533="">O bohr.io nasce com objetivo de impactar positivamente a experiência de quem programa, principalmente na etapa de deploy.<br data-v-c7b06533="" />
Essa página registra o grupo das primeiras pessoas que acreditaram no potencial e resolveram apoiar a plataforma.<br data-v-c7b06533="" />
Obrigado a cada um de vocês, <strong data-v-c7b06533="">100 Pioneiro</strong><strong>s</strong> do bohr.io!<br data-v-c7b06533="" />
Publicado em 2023/02/24</p>
</div>
    <ul class="pioneers__list">
      <li
        class="pioneer__card"
        v-for="pioneer in pioneers"
        :key="pioneer.user"
      >
        <a
          :href="`https://github.com/${pioneer.user}`"
          target="_blank"
          rel="noreferrer"
        >
          <img
            class="pioneer__image"
            width="80"
            height="80"
            :src="pioneer.imgURL"
            alt=""
          />
          <p class="pioneer__name">{{ pioneer.user }}</p>
        </a>
      </li>
    </ul>
  </main>
</template>

<style scoped>
.bohr__title {
  text-align: center;
  font-size: 0;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 2rem;
}

.bohr__title img {
  max-width: 100%;
  height: auto;
}

.hero__text {
  text-align: center;
}

.pioneers__list {
  box-sizing: border-box;
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  margin-top: 20px;
}

.pioneer__card {
  position: relative;
  flex-grow: 1;
  width: 100%;
  aspect-ratio: 1/1;
  transition: transform 250ms ease-in-out;
}

.pioneer__card:hover {
  z-index: 10;
  transform: scale(2);
}

.pioneer__image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.pioneer__name {
  box-sizing: border-box;
  display: none;
  position: absolute;
  top: 100%;
  margin: 0;
  padding: 2px;
  width: 100%;
  background: linear-gradient(180deg, #F26419 0%, #E84855 100%);
  text-align: center;
  color: hsl(0, 0%, 100%);
  font-size: 0.5rem;
  transition: opacity 250ms ease-in-out;
}

.pioneer__card:hover .pioneer__name {
  display: block;
}

@media (min-width: 640px) {
  .pioneers__list {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
}
@media (min-width: 1280px) {
  .pioneers__list {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
}
</style>
