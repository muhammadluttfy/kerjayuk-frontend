<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div class="font-poppins min-h-screen relative">
    <div v-if="route.path === '/'" class="bg-white sticky top-0 z-50">
      <NavigationTopBarComponent />
    </div>
    <slot />
    <div v-if="route.path !== '/notifications'" class="bg-white sticky bottom-0 z-50">
      <NavigationBottomBarComponent />
    </div>
  </div>
</template>

<style scoped></style>
