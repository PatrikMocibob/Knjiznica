<template>
  <q-page padding>
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h3 text-weight-bolder">Registracija</div>
      </q-card-section>

      <!-- Forma za registraciju -->
      <q-form @submit="submitRegistration">
        <q-card-section>
          <!-- Ime -->
          <q-input 
            v-model="formData.name" 
            label="Ime" 
            filled 
            :rules="[val => !!val || 'Ime je obavezno']"
            class="q-mb-md"
          />
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
          <!-- Potvrda lozinke -->
          <q-input 
            v-model="formData.confirmPassword" 
            label="Potvrdi lozinku" 
            filled 
            :rules="[val => val === formData.password || 'Lozinke se ne poklapaju']"
            class="q-mb-md"
            type="password"
          />
        </q-card-section>

        <q-card-actions>
          <!-- Gumb za registraciju -->
          <q-btn label="Registruj se" color="primary" type="submit" />
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
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  methods: {
    // Obrada prijave forme
    submitRegistration() {
      // Proverava da li su svi podaci validni
      this.$refs.form.validate().then(success => {
        if (success) {
          // Ako su podaci validni, izvršavamo logiku za registraciju
          console.log("Registracija uspešna!", this.formData);
          // Ovde možete dodati poziv API-ja za registraciju ili druge radnje
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
