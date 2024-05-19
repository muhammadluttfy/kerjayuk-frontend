<script lang="ts" setup></script>

<template>
  <div class="bg-white top-shadow py-4 relative">
    <UContainer class="flex justify-between items-center gap-6">
      <div class="w-[20%] text-center">
        <UIcon name="i-ph-house-line-fill" class="h-6 w-6 text-dangerColor" />
        <p class="text-[10px] -mt-1 text-dangerColor">
          Home
        </p>
      </div>
      <div class="w-[20%] text-center">
        <NuxtLink to="/">
          <UIcon name="i-ph-calendar-check-bold" class="h-6 w-6 text-gray-500" />
          <p class="text-[10px] -mt-1">
            Attendance
          </p>
        </NuxtLink>
      </div>
      <div class="w-[30%] text-center">
        <NuxtLink to="/">
          <div class="bg-dangerColor w-16 h-16 text-white rounded-full absolute bottom-1/2 left-1/2 transform -translate-x-1/2 flex items-center justify-center">
            <UIcon name="i-mdi-logout" class="h-6 w-6 text-white" />
          </div>
          <p class="text-[10px] absolute left-1/2 transform -translate-x-1/2 mt-1.5">
            Check Out
          </p>
        </NuxtLink>
      </div>
      <div class="w-[20%] text-center">
        <NuxtLink to="/">
          <UIcon name="i-mdi-file-document-outline" class="h-6 w-6 text-gray-500" />
          <p class="text-[10px] -mt-1">
            Form
          </p>
        </NuxtLink>
      </div>
      <div class="w-[20%] text-center">
        <NuxtLink to="/">
          <UIcon name="i-mdi-cog-outline" class="h-6 w-6 text-gray-500" />
          <p class="text-[10px] -mt-1">
            Setting
          </p>
        </NuxtLink>
      </div>
    </UContainer>
  </div>
</template>

<style scoped></style>
