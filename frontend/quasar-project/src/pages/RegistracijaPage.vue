<template>
  <q-header>
    <q-toolbar-title style="font-size: 50px;">
      Registracija
    </q-toolbar-title>
  </q-header>

  <p style="font-size:30px ;">
    Ovdje možete kreirati korisnički račun
  </p>

  <q-page padding>
    <q-form @submit="submitRegistration" class="q-pa-md" :lazy-validation="true">
      <q-input
        v-model="formData.ime"
        label="Ime"
        outlined
        required
        autofocus
        style="width: 300px; margin-bottom: 15px;"
      />
      <q-input
        v-model="formData.prezime"
        label="Prezime"
        outlined
        required
        style="width: 300px; margin-bottom: 15px;"
      />
      <q-input
        v-model="formData.email"
        label="Email"
        outlined
        type="email"
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
      <q-input
        v-model="formData.potvrdiLozinku"
        label="Potvrdi lozinku"
        outlined
        type="password"
        required
        :rules="['validerajLozinku']"
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
        ime: '',
        prezime: '',
        email: '',
        lozinka: '',
        potvrdiLozinku: ''
      }
    };
  },
  methods: {
    validerajLozinku(val) {
      return val === this.formData.lozinka || 'Lozinke se ne podudaraju';
    },
    submitRegistration() {
      console.log('Podaci korisnika:', this.formData);
      if (this.formData.lozinka !== this.formData.potvrdiLozinku) {
        console.error('Lozinke se ne podudaraju!');
        return;
      }
      alert('Korisnik je uspješno registriran!');
    }
  }
};
</script>

<style scoped>
</style>
