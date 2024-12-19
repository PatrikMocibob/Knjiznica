<template>
  <q-page>
    <q-table :rows="rezervacije" :columns="columns" row-key="id" />
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'RezervacijePage',
  setup() {
    const rezervacije = ref([]);
    const columns = [
      { name: 'id', label: 'ID', align: 'left', field: row => row.id },
      { name: 'datum_rez', label: 'Datum rezervacije', align: 'center', field: row => row.datum_rezervacije },
      { name: 'knjiga', label: 'Naslov knjige', align: 'left', field: row => row.naslov },
      { name: 'korisnik', label: 'Korisnik', align: 'left', field: row => row.korisnik }
    ];

    const fetchRezervacije = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/rezervirane_knjige');
        rezervacije.value = response.data;
      } catch (error) {
        console.error('Greška pri dohvaćanju rezervacija:', error);
      }
    };

    onMounted(() => {
      fetchRezervacije();
    });

    return {
      rezervacije,
      columns
    };
  }
};
</script>
