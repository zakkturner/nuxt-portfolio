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
  >
    <!-- Portfolio Item  -->
    <PortfolioItem
        v-for="project in projects"
        :key="project.id"
        :project="project"
    />
    <!-- /Portfolio Item  -->
  </div>
</template>

<style scoped>
.portfolio-grid{
  height: 200px;
}
</style>