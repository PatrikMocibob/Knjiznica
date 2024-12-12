<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

       

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
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
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Pocetna',
    caption: 'Pocetna stranica',
    icon: 'home',
    link: '#/'
  },
  {
    title: 'Popis knjiga',
    caption: 'Popis svih knjiga u knjiznici',
    icon: 'book',
    link: '#/PopisKnjiga'
  },
  {
    title: 'Pretrazivanje',
    caption: 'Trazilica knjiga',
    icon: 'search',
    link: '#/Pretrazivanje'
  },
  {
    title: 'O nama',
    caption: 'O knjiznici',
    icon: 'record_voice_over',
    link: '#/Onama'
  },
  {
    title: 'Lokacija',
    caption: 'Gdje se nalazimo',
    icon: 'map',
    link: '#/Lokacija'
  },
  {
    title: 'Login',
    caption: 'Login',
    icon: 'public',
    link: '#/Login'
  },
  
  {
    title: 'Registracija',
    caption: 'Kreiraj racun',
    icon: 'favorite',
    link: '#/Registracija'
  },

  {
    title: 'PopisKnjigaBaza',
    caption: 'baza',
    icon: 'book',
    link: '#/Baza'
  },

  {
    title: 'Rezervacije',
    caption: 'Rezervacije',
    icon: 'book',
    link: '#/Rezervacije'
  }



]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
