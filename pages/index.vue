<script lang="ts" setup>
definePageMeta({
  colorMode: 'light',
  alias: '/'
})

useSeoMeta({
  applicationName: 'KerjaYuk!',
  title: 'KerjaYuk! - Absensi Lebih Mudah, Lebih Efisien!',
  description: 'Solusi absensi modern untuk bisnis Anda. Lacak kehadiran karyawan dengan mudah dan akurat. Absensi lebih mudah, lebih efisien dengan KerjaYuk!'
})

const pcsNews = [
  {
    avatar: 'https://i.ibb.co/d0PRzss/4-avatar-children.webp',
    contributor: 'John Doe',
    title: 'Informasi Hari Libur Nasional',
    description: 'Kepada seluruh karyawan, kami informasikan bahwa tanggal 17 Agustus akan menjadi hari libur nasional dalam rangka memperingati Hari Kemerdekaan Indonesia. Harap dicatat dan persiapkan rencana kerja Anda sesuai dengan informasi ini. Terima kasih.'
  },
  {
    avatar: 'https://i.ibb.co/yPtBnj8/2-avatar-man.webp',
    contributor: 'Michael Smith',
    title: 'Maintenance Sistem',
    description: 'Kami akan melakukan maintenance rutin pada sistem pada tanggal 25 Juni mulai pukul 22:00 hingga 02:00. Selama periode ini, beberapa layanan mungkin tidak dapat diakses. Terima kasih atas pengertian dan kerjasamanya.'
  },
  {
    avatar: 'https://i.ibb.co/cy5bQhz/3-avatar-women.webp',
    contributor: 'William',
    title: 'Program Pelatihan Karyawan Baru',
    description: 'Kami dengan senang hati mengumumkan bahwa program pelatihan karyawan baru akan dimulai pada tanggal 1 Juli. Semua karyawan baru diharapkan hadir dan berpartisipasi aktif dalam sesi pelatihan ini. Terima kasih.'
  },
  {
    avatar: 'https://i.ibb.co/cy5bQhz/3-avatar-women.webp',
    contributor: 'Olivia',
    title: 'Pemberitahuan Pemadaman Listrik',
    description: 'Diberitahukan kepada seluruh karyawan bahwa akan ada pemadaman listrik di gedung kantor pada tanggal 5 Juli dari pukul 10:00 hingga 12:00. Harap pastikan semua pekerjaan penting telah disimpan sebelum waktu tersebut. Terima kasih.'
  },
  {
    avatar: 'https://i.ibb.co/cy5bQhz/3-avatar-women.webp',
    contributor: 'Isabella ',
    title: 'Rapat Strategi Pemasaran',
    description: 'Kami mengundang seluruh anggota tim pemasaran untuk menghadiri rapat strategi pemasaran yang akan diadakan pada tanggal 10 Juli pukul 14:00 di ruang konferensi. Harap hadir tepat waktu dan siapkan ide-ide kreatif Anda. Terima kasih.'
  }
]

</script>

<template>
  <div>
    <!-- START:: Profile Card Section -->
    <section class="mb-8">
      <UContainer>
        <h3 class="text-base text-darkColor mb-4">
          Hi, Good Morning!
        </h3>
        <PartialProfileCardComponent />
      </UContainer>
    </section>
    <!-- END:: Profile Card Section -->

    <!-- START:: Today Activity Section -->
    <section class="mb-8">
      <UContainer>
        <h1 class="text-base font-semibold text-darkColor mb-4">
          Today's activity
        </h1>
        <div class="flex justify-between items-start gap-4 px-8">
          <div class="col-span-4 text-center">
            <UIcon name="i-mdi-clock-time-eight-outline" class="h-8 w-8 text-dangerColor" />
            <p class="text-sm font-semibold">
              08:30
            </p>
            <p class="text-[10px]">
              Check In
            </p>
          </div>
          <div class="col-span-4 text-center">
            <UIcon name="i-ph-clock-clockwise-bold" class="h-8 w-8 text-dangerColor" />
            <p class="text-sm font-semibold">
              03:00:00
            </p>
            <p class="text-[10px]">
              Working Hours
            </p>
          </div>
          <div class="col-span-4 text-center">
            <UIcon name="i-mdi-clock-time-six-outline" class="h-8 w-8 text-dangerColor" />
            <p class="text-sm font-semibold">
              --:--
            </p>
            <p class="text-[10px]">
              Check Out
            </p>
          </div>
        </div>
      </UContainer>
    </section>
    <!-- END:: Today Activity Section -->

    <!-- START:: PCS News Section -->
    <section class="mb-8">
      <UContainer class="mb-4">
        <h1 class="text-base font-semibold text-darkColor">
          PCS News
        </h1>
      </UContainer>
      <Swiper
        :space-between="10"
        :slides-per-view="1.2"
        :centered-slides="true"
        :loop="true"
      >
        <SwiperSlide v-for="(item, index) in pcsNews" :key="index">
          <PartialPcsNewsCardComponent :news="item" />
        </SwiperSlide>
      </Swiper>
    </section>
    <!-- END:: PCS News Section -->
  </div>
</template>

<style scoped></style>
