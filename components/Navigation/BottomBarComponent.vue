<script lang="ts" setup>
const route = useRoute()
</script>

<template>
  <div class="bg-white top-shadow py-4 relative">
    <UContainer class="flex justify-between items-center gap-6">
      <div class="w-[20%] text-center">
        <NuxtLink to="/">
          <UIcon :name="route.path === '/' ? 'i-ph-house-line-fill' : 'i-ph-house-line-bold'" class="h-6 w-6" :class="route.path === '/' ? 'text-dangerColor' : 'text-gray-500'" />
          <p class="text-[10px] -mt-1" :class="{'text-dangerColor': route.path === '/'}">
            Home
          </p>
        </NuxtLink>
      </div>
      <div class="w-[20%] text-center">
        <NuxtLink to="/attendances">
          <UIcon :name="route.path === '/attendances' ? 'i-ph-calendar-check-fill' : 'i-ph-calendar-check-bold'" class="h-6 w-6" :class="route.path === '/attendances' ? 'text-dangerColor' : 'text-gray-500'" />
          <p class="text-[10px] -mt-1" :class="{'text-dangerColor': route.path === '/attendances'}">
            Attendance
          </p>
        </NuxtLink>
      </div>
      <div class="w-[30%] text-center">
        <NuxtLink to="/checkout">
          <div class="bg-dangerColor w-16 h-16 text-white rounded-full absolute bottom-1/2 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <UIcon name="i-mdi-logout" class="h-6 w-6 text-white" />
          </div>
          <p class="text-[10px] absolute left-1/2 transform -translate-x-1/2 mt-1.5">
            Check Out
          </p>
        </NuxtLink>
      </div>
      <div class="w-[20%] text-center">
        <NuxtLink to="/forms">
          <UIcon :name="route.path === '/forms' ? 'i-mdi-file-document' : 'i-mdi-file-document-outline'" class="h-6 w-6" :class="route.path === '/forms' ? 'text-dangerColor' : 'text-gray-500'" />
          <p class="text-[10px] -mt-1" :class="{'text-dangerColor': route.path === '/forms'}">
            Form
          </p>
        </NuxtLink>
      </div>
      <div class="w-[20%] text-center">
        <NuxtLink to="/settings">
          <UIcon :name="route.path === '/settings' ? 'i-mdi-cog' : 'i-mdi-cog-outline'" class="h-6 w-6" :class="route.path === '/settings' ? 'text-dangerColor' : 'text-gray-500'" />
          <p class="text-[10px] -mt-1" :class="{'text-dangerColor': route.path === '/settings'}">
            Setting
          </p>
        </NuxtLink>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
