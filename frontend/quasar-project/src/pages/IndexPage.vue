<template>
  <q-page class="flex flex-center">
    <!-- Kartica koja sadrži naslov i opis -->
    <q-card class="q-pa-md" style="max-width: 600px; width: 100%">
      <!-- Sekcija za naslov -->
      <q-card-section class="text-center">
        <div class="text-h2 text-weight-bold">Knjižnica Rijeka</div>
      </q-card-section>

      <!-- Sekcija za opis knjižnice -->
      <q-card-section>
        <div class="text-body1 text-center">
          Gradska knjižnica Rijeka središnja je narodna knjižnica grada Rijeke
          i matična knjižnica za narodne i školske knjižnice Primorsko-goranske županije.
          Ona je informacijsko, obrazovno, kulturno, komunikacijsko i socijalno središte
          Rijeke i okolice usmjereno prema novom stvaralaštvu, održivom razvoju i kvaliteti razvoja
          zajednice i čitateljske kulture.
        </div>
      </q-card-section>

      <!-- Slika knjižnice (samo primer) -->
      <q-card-section class="q-mt-md">
        <q-img
          src="https://www.rijeka.hr/wp-content/uploads/2023/12/Nova-knji%C5%BEnica-4-901x600.jpg"
          alt="Nova knjižnica Rijeka"
          class="q-mb-md"
          style="height: 200px; object-fit: cover"
        />
      </q-card-section>

      <!-- Dugme za preusmeravanje na stranicu s knjigama -->
      <q-card-actions class="justify-center">
        <q-btn label="Pogledaj našu ponudu knjiga" color="primary" :to="{ path: '/PopisKnjiga' }" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'IndexPage'
});
</script>

<style scoped>
.q-page {
  background-color: #f5f5f5;
}
</style>
