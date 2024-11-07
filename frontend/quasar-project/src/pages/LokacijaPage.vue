<template>
  <q-page padding>
    <!-- Q-Card for "O nama" content -->
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <q-img 
          src="https://www.rijeka.hr/wp-content/uploads/2023/12/Nova-knji%C5%BEnica-4-901x600.jpg">
          <div class="text-h3 text-weight-bolder absolute-bottom text-center">O nama</div>
        </q-img>
      </q-card-section>

      <q-card-section class="text-h4 text-justify">
        {{ o_nama }}
      </q-card-section>
    </q-card>

    <!-- Map container -->
    <div id="map" style="height: 500px; margin-top: 20px;"></div>
  </q-page>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default {
  setup() {
    const initialMap = ref(null);

    onMounted(() => {
      // Initialize the map and set its view
      initialMap.value = L.map('map').setView([45.3312, 14.4322], 13); // Latitude, Longitude, Zoom level

      // Add OpenStreetMap tile layer
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(initialMap.value);

      // Optional: Add a marker to indicate a specific location
      L.marker([45.3312, 14.4322]).addTo(initialMap.value)
        .bindPopup('<b>Gradska knjižnica Rijeka</b>')
        .openPopup();
    });

    return {
      initialMap
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
