<script lang="ts" setup>
definePageMeta({
  colorMode: 'light',
  alias: '/notifications'
})

useSeoMeta({
  applicationName: 'KerjaYuk!',
  title: 'KerjaYuk! - Notifikasi',
  description: 'Solusi absensi modern untuk bisnis Anda. Lacak kehadiran karyawan dengan mudah dan akurat. Absensi lebih mudah, lebih efisien dengan KerjaYuk!'
})

const notifications = [
  {
    icon: 'https://example.com/icon1.png',
    title: 'Reminder: Harap Mengisi Absensi',
    description: 'Jangan lupa untuk mengisi absensi harian Anda sebelum pukul 9 pagi. Absensi adalah kewajiban bagi semua karyawan untuk mencatat kehadiran mereka setiap hari kerja.',
    isRead: false
  },
  {
    icon: 'https://example.com/icon2.png',
    title: 'Pengumuman Penting: Perubahan Jadwal Rapat',
    description: 'Mohon diperhatikan bahwa jadwal rapat bulanan telah berubah. Rapat akan diadakan pada tanggal 25 Mei 2024 pukul 11 pagi di ruang konferensi.',
    isRead: true
  },
  {
    icon: 'https://example.com/icon3.png',
    title: 'Pemberitahuan Cuti: Persetujuan Anda Dibutuhkan',
    description: 'Anda telah mengajukan cuti pada tanggal 30 Mei - 3 Juni 2024. Mohon segera konfirmasi persetujuan atau penolakan cuti Anda melalui sistem cuti.',
    isRead: false
  },
  {
    icon: 'https://example.com/icon4.png',
    title: 'Informasi Terbaru: Panduan Kerja dari Rumah',
    description: 'Silakan baca panduan kerja dari rumah terbaru yang telah diperbarui untuk memastikan kelancaran kerja dari jarak jauh. Panduan ini berisi tips dan saran untuk bekerja efektif dari rumah.',
    isRead: true
  },
  {
    icon: 'https://example.com/icon5.png',
    title: 'Peringatan: Batas Waktu Pengajuan Laporan Bulanan',
    description: 'Ingat, hari ini adalah batas waktu terakhir untuk pengajuan laporan bulanan. Pastikan untuk menyelesaikan dan mengirimkan laporan Anda sebelum pukul 5 sore hari ini.',
    isRead: false
  },
  {
    icon: 'https://example.com/icon6.png',
    title: 'Informasi Terkini: Perubahan Kebijakan Kesehatan dan Keselamatan',
    description: 'Mohon diperhatikan bahwa telah ada perubahan kebijakan kesehatan dan keselamatan di tempat kerja. Silakan baca kebijakan yang diperbarui di intranet perusahaan.',
    isRead: true
  },
  {
    icon: 'https://example.com/icon7.png',
    title: 'Pemberitahuan Karyawan: Pelatihan Obligasi Kebakaran',
    description: 'Seluruh karyawan diharapkan menghadiri pelatihan wajib tentang tindakan darurat dan protokol kebakaran yang akan diadakan pada hari Kamis, 27 Mei 2024, pukul 10 pagi.',
    isRead: false
  },
  {
    icon: 'https://example.com/icon8.png',
    title: 'Pengumuman Khusus: Program Kesejahteraan Karyawan',
    description: 'Kami senang mengumumkan peluncuran program kesejahteraan karyawan baru kami. Program ini menyediakan berbagai manfaat dan layanan untuk meningkatkan kesejahteraan fisik dan mental karyawan.',
    isRead: true
  },
  {
    icon: 'https://example.com/icon9.png',
    title: 'Pemberitahuan: Penutupan Kantor untuk Perbaikan',
    description: 'Mohon diperhatikan bahwa kantor akan ditutup untuk perbaikan teknis pada hari Sabtu, 29 Mei 2024. Kami mohon maaf atas ketidaknyamanan yang ditimbulkan.',
    isRead: false
  },
  {
    icon: 'https://example.com/icon10.png',
    title: 'Pemberitahuan Penting: Perubahan Sistem Keamanan',
    description: 'Untuk meningkatkan keamanan sistem, kami akan melakukan pemeliharaan pada sistem keamanan pada hari Minggu, 30 Mei 2024, mulai pukul 8 malam hingga pukul 12 malam.',
    isRead: true
  },
  {
    icon: 'https://example.com/icon11.png',
    title: 'Peringatan Libur: Libur Nasional Hari Raya Idul Fitri',
    description: 'Kantor akan tutup pada hari Minggu, 2 Juni 2024, dan Senin, 3 Juni 2024, dalam rangka perayaan Hari Raya Idul Fitri. Selamat merayakan kepada yang merayakan!',
    isRead: false
  },
  {
    icon: 'https://example.com/icon12.png',
    title: 'Pengumuman Penerimaan: Selamat Bergabung dengan Tim',
    description: 'Kami senang mengumumkan bahwa Anda telah diterima sebagai anggota baru dalam tim kami. Selamat bergabung dan semoga sukses dalam peran Anda!',
    isRead: true
  },
  {
    icon: 'https://example.com/icon13.png',
    title: 'Pemberitahuan: Pemeliharaan Sistem IT',
    description: 'Pemeliharaan sistem IT akan dilakukan pada hari Rabu, 28 Mei 2024, mulai pukul 9 malam hingga pukul 12 malam. Harap bersiap-siap untuk kemungkinan gangguan sementara.',
    isRead: false
  },
  {
    icon: 'https://example.com/icon14.png',
    title: 'Pengingat: Pelatihan Daring Bulan Depan',
    description: 'Ingatkan untuk mendaftar dan menghadiri pelatihan daring tentang keamanan data yang akan diadakan pada tanggal 10-12 Juni 2024. Pelatihan ini wajib diikuti oleh semua karyawan IT.',
    isRead: true
  },
  {
    icon: 'https://example.com/icon15.png',
    title: 'Pemberitahuan Cuti: Pengajuan Cuti di Bulan Depan',
    description: 'Pemberitahuan awal: Mohon persiapkan pengajuan cuti Anda untuk bulan Juni 2024. Silakan konsultasikan jadwal cuti Anda dengan atasan langsung Anda sebelum tanggal 1 Juni 2024.',
    isRead: false
  }
]

function handleReadNotification (item: any) {
  if (item?.isRead) {
    // handle read notification
  }
}
</script>

<template>
  <div>
    <!-- START:: Back Menu Section -->
    <section class="sticky top-0 z-50">
      <PartialBackMenuComponent to="/" title="Notification" />
    </section>
    <!-- END:: Back Menu Section -->

    <!-- START:: Notification Card Section -->
    <section>
      <div class="grid grid-cols-12">
        <div v-for="(item, index) in notifications" :key="index" class="col-span-12">
          <div class="py-3 bg-white" :class="{'bg-blue-100 cursor-pointer': item?.isRead}" @click="handleReadNotification(item)">
            <UContainer class="flex items-start gap-3.5">
              <div class="bg-gradient-to-r from-[#E7242B] to-[#C41060] rounded-lg p-3 text-white">
                .......
              </div>
              <div>
                <h3 class="font-bold text-sm">
                  {{ item?.title }}
                </h3>
                <div class="text-xs">
                  {{ item?.description }}
                </div>
              </div>
            </UContainer>
          </div>
        </div>
      </div>
    </section>
    <!-- END:: Notification Card Section -->
  </div>
</template>

<style scoped></style>
