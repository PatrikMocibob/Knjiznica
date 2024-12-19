<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />



        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Essential Links
        </q-item-label>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

defineOptions({
  name: 'AdminLayout'
})



const linksList = [
  {
    title: 'Pocetna',
    caption: 'Pocetna stranica',
    icon: 'home',
    link: '#/admin'
  },
  {
    title: 'Popis knjiga',
    caption: 'Popis svih knjiga u knjiznici',
    icon: 'book',
    link: '#/admin/PopisKnjiga'
  },
  {
    title: 'Pretrazivanje',
    caption: 'Trazilica knjiga',
    icon: 'search',
    link: '#/admin/Pretrazivanje'
  },
  {
    title: 'Popis Korisnika',
    caption: 'Popis korisnika',
    icon: 'local_library',
    link: '#/admin/Popis_korisnika'
  },
  {
    title: 'Unos knjiga',
    caption: 'Unos knjiga',
    icon: 'local_library',
    link: '#/admin/Unos_knjiga'
  },
  {
    title: 'Logout',
    caption: 'Logout',
    icon: 'public',
    link: '#/admin/Logout'
  },

]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
