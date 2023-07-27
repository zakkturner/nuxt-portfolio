<template>
  <figure class="item" :data-groups="JSON.stringify(categories)">
    <a :href="site" target="_blank">
      <img :src="`images/portfolio/${image}`" alt="" />
      <div>
        <h5 class="name">{{ name }}</h5>
        <p class="description">{{ description }}</p>
        <small>{{ short_description }}</small>
        <i class="pe-7s-icon pe-7s-display2"></i>
      </div>
    </a>
  </figure>
</template>

<script setup lang="ts">
const props = defineProps({
  name: String,
  description: String,
  short_description: String,
  categories: Array<String>,
  image: String,
  site: String,
});
</script>

<style scoped>
.description {
  color: #000;
}
</style>
