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
    <h1 class="bohr__title" data-bohr-cms data-bohr-file="src/App.vue" data-bohr-index="1" data-bohr-dist-file="index.html" data-bohr-dist-index="1">
      <img width="500" height="125" src="/logo_bohr.png" alt="bohr.io" />
    </h1>
    <div class="hero__text" data-bohr-cms data-bohr-file="src/App.vue" data-bohr-index="2" data-bohr-dist-file="index.html" data-bohr-dist-index="2">
      <p>Teste paragrafo 1.</p>
      <p>Teste paragrafo 2.</p>
      <p>Teste paragrafo 3.</p>
      <p>Teste paragrafo 4.</p>
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
