<script lang="ts" setup>
import type { INewsDetail } from '~/types/INewsDetail'

interface IProps {
  news: INewsDetail
}
const props = defineProps<IProps>()
</script>

<template>
  <div class="p-4 shadow-md rounded-xl mb-2 h-44">
    <div class="flex items-center justify-between mb-4">
      <div class="flex items-center gap-2.5">
        <NuxtImg :src="props?.news?.avatar" class="rounded-full" width="45" height="45" :alt="`Contributor - ${props?.news?.contributor}`" />
        <h1 class="text-dangerColor font-semibold text-sm">
          {{ props?.news?.contributor }}
        </h1>
      </div>
      <div class="text-end">
        <p class="text-[10px]">
          Jum'at
        </p>
        <p class="text-[10px]">
          17 Mei 2024
        </p>
      </div>
    </div>
    <p class="text-xs line-clamp-4">
      {{ props?.news?.description }}
    </p>
  </div>
</template>

<style scoped></style>
