<template>
  <q-header>
    <q-toolbar-title style="font-size: 50px;">
      Login stranica
    </q-toolbar-title>
  </q-header>

  <p style="font-size:30px ;">
    Ovdje možete ući u svoj korisnički račun
  </p>

  <q-page padding>
    <q-form @submit="submitLogin" class="q-pa-md" :lazy-validation="true">
      
      
      <q-input
        v-model="formData.korisnickoIme"
        label="Korisničko ime"
        outlined
        required
        style="width: 300px; margin-bottom: 15px;"
      />

      
      <q-input
        v-model="formData.lozinka"
        label="Lozinka"
        outlined
        type="password"
        required
        style="width: 300px; margin-bottom: 15px;"
      />

      
      <q-btn
        label="Potvrdi"
        color="primary"
        type="submit"
        style="width: 300px; margin-top: 20px;"
      />
    </q-form>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        korisnickoIme: '',
        lozinka: ''
      }
    };
  },
  methods: {
    submitLogin() {
      console.log('Korisničko ime:', this.formData.korisnickoIme);
      console.log('Lozinka:', this.formData.lozinka);

      
      alert('Uspješno ste se prijavili!');
    }
  }
};
</script>

<style scoped>
</style>

