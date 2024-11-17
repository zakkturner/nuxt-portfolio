<template>
  <figure class="item" :data-groups="JSON.stringify(['all', project.category.name])">

    <a :href="project.site" target="_blank">
      <img :src="project.img_src" alt="" />
      <div>
        <h5 class="name">{{ project.name }}</h5>
        <p class="description">{{ project.description }}</p>
        <small>{{ project.short_description }}</small>
        <i class="pe-7s-icon pe-7s-display2"></i>
      </div>
    </a>
  </figure>
</template>

<script setup lang="ts">
import {Project} from "~/components/types";

interface Props {
  project: Project
}
const props = defineProps<Props>()


</script>

<style scoped>
.description {
  color: #000;
}
</style>
