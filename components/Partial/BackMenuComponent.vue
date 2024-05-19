<script lang="ts" setup>
interface IProps {
  to: string,
  title: string
}
const props = defineProps<IProps>()
</script>

<template>
  <section class="bg-white py-5 shadow-md">
    <UContainer class="flex items-center gap-2.5">
      <NuxtLink :to="props.to" class="flex items-center">
        <UIcon name="i-ph-arrow-left-bold" class="w-5 h-5" />
      </NuxtLink>
      <h3 class="text-dangerColor font-bold text-base">
        {{ props?.title }}
      </h3>
    </UContainer>
  </section>
</template>

<style scoped></style>
