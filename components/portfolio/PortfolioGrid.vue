<script setup lang="ts">

import PortfolioItem from "~/components/portfolio/PortfolioItem.vue";
import {Project} from "~/components/types";
interface Props {
  projects: Project[]
}
const props = defineProps<Props>()
</script>

<template>
  <div
      id="portfolio_grid"
      class="portfolio-grid portfolio-masonry masonry-grid-3"
      v-if="projects.length > 0"
  >
    <!-- Portfolio Item  -->
    <PortfolioItem
        v-for="project in projects"
        :key="project.id"
        :project="project"
    />
    <!-- /Portfolio Item  -->
  </div>
  <div v-else>
    <h2>No Projects at the moment. Please wait until Zach updates his portfolio!</h2>
  </div>
</template>

<style scoped>
.portfolio-grid{
  height: 200px;
}
</style>