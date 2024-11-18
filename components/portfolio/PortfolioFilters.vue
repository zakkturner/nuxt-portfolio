<script setup lang="ts">
import {ref, onMounted} from 'vue';
import axios from "axios";
import {Category} from "~/components/types";
const categories = ref<Category[]>([]);
const api_url = useRuntimeConfig().public.api_url
    onMounted(async ()=>{
      const response = await axios.get(`${api_url}/api/v1/categories`);
      if (response.status === 200){
        categories.value = response.data;
      }
    })
</script>

<template>

  <ul id="portfolio_filters" class="portfolio-filters">
    <li class="active">
      <a class="filter btn btn-sm btn-link active" data-group="all"
      >All</a
      >
    </li>
    <li v-for="category in categories" :key="category.id" >
      <a class="filter btn btn-sm btn-link" :data-group="category.name"
      >{{category.name}}</a
      >
    </li>
  </ul>
</template>

<style scoped>
.filter{
  text-transform: capitalize;
}
</style>