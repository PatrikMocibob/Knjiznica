<template>
  <q-page padding>
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h3 text-weight-bolder">Prijava</div>
      </q-card-section>

      <!-- Forma za prijavu -->
      <q-form @submit="submitLogin">
        <q-card-section>
          <!-- Email -->
          <q-input 
            v-model="formData.email" 
            label="Email" 
            filled 
            :rules="[val => !!val || 'Email je obavezan']"
            class="q-mb-md"
            type="email"
          />
          <!-- Lozinka -->
          <q-input 
            v-model="formData.password" 
            label="Lozinka" 
            filled 
            :rules="[val => !!val || 'Lozinka je obavezna']"
            class="q-mb-md"
            type="password"
          />
        </q-card-section>

        <q-card-actions>
          <!-- Gumb za prijavu -->
          <q-btn label="Prijavi se" color="primary" type="submit" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Podaci forme
      formData: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    // Obrada prijave forme
    submitLogin() {
      // Proverava da li su svi podaci validni
      this.$refs.form.validate().then(success => {
        if (success) {
          // Ako su podaci validni, izvršavamo logiku za prijavu
          console.log("Prijava uspešna!", this.formData);
          // Ovde možete dodati poziv API-ja za prijavu korisnika
        } else {
          console.log("Validacija nije prošla.");
        }
      });
    }
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
