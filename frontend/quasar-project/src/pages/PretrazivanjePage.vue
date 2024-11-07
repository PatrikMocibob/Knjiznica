<template>
  <q-header>
    <q-toolbar-title style="font-size: 50px;">
      Pretrazivanje
    </q-toolbar-title>
  </q-header>

  <p style="font-size:30px ;">
    Ovdje možete pretraživati knjige
  </p>

  <q-page padding>
    
    <div class="q-pa-md">
      
      <q-input 
        v-model="searchQuery" 
        label="Unesite pojam za pretraživanje" 
        outlined
        debounce="300"
        style="width: 300px; margin-right: 10px;"
      />
      
      
      <q-checkbox 
        v-model="searchByTitle" 
        label="Pretraživanje po naslovu"
        style="margin-right: 20px;"
      />

      
      <q-checkbox 
        v-model="searchByAuthor" 
        label="Pretraživanje po autoru"
        style="margin-right: 20px;"
      />

      
      <q-btn @click="searchBooks" label="Traži" color="primary" />
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '', 
      searchByTitle: false, 
      searchByAuthor: false, 
    }
  },
  methods: {
    
    searchBooks() {
      
      console.log('Traženi pojam:', this.searchQuery);
      console.log('Pretraživanje po naslovu:', this.searchByTitle);
      console.log('Pretraživanje po autoru:', this.searchByAuthor);
      
      
    }
  }
}
</script>

<style scoped>

</style>
