<script setup lang="ts">
import {Project} from "~/components/types";

interface Props {
  project: Project
}
const props = defineProps<Props>()

const api_url = useRuntimeConfig().public.api_url
</script>
<template>
  <figure class="item" :data-groups="JSON.stringify(['all', project.category.name])">

    <a  :href=" project.site !== 'none' ? `${project.site}`: '#portfolio'" target="_blank">
      <img :src="`${api_url}/storage/${project.img_src}`" :alt="project.name" />
      <div>
        <h5 class="name">{{ project.name }}</h5>
        <p class="description">{{ project.description }}</p>
        <small>{{ project.short_description }}</small>
        <i class="pe-7s-icon pe-7s-display2"></i>
      </div>
    </a>
  </figure>
</template>



<style scoped>
.description {
  color: #000;
}
</style>
