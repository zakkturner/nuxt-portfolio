<template>
  <ClientOnly>
    <div class="form-message">
      <span>{{ message }}!</span>
    </div>
  </ClientOnly>

</template>
<script setup>
const props = defineProps({
  message: String | undefined,

})
</script>
<style scoped>
.form-message {
  width: fit-content;
  background: #4cae4c;
  color: #fff;
  padding-inline: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
}
</style>