<template>
  <q-page padding>
    <!-- Popis knjiga u tablici -->
    <q-card dark bordered class="bg-grey-9 my-card">
      <q-card-section>
        <div class="text-h3 text-weight-bolder">Popis knjiga</div>
      </q-card-section>

      <q-card-section>
        <!-- Tablica sa dummy podacima -->
        <q-table
          :rows="books"
          :columns="columns"
          :rows-per-page-options="[5, 10, 15]"
          row-key="id"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  setup() {
    // Dummy podaci o knjigama
    const books = [
      { id: 1, title: "1984", author: "George Orwell", year: 1949, genre: "Dystopian" },
      { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, genre: "Fiction" },
      { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925, genre: "Classic" },
      { id: 4, title: "Moby-Dick", author: "Herman Melville", year: 1851, genre: "Adventure" },
      { id: 5, title: "Pride and Prejudice", author: "Jane Austen", year: 1813, genre: "Romance" },
      { id: 6, title: "War and Peace", author: "Leo Tolstoy", year: 1869, genre: "Historical" },
      { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937, genre: "Fantasy" },
      { id: 8, title: "Crime and Punishment", author: "Fyodor Dostoevsky", year: 1866, genre: "Psychological" },
      { id: 9, title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, genre: "Fiction" },
      { id: 10, title: "Brave New World", author: "Aldous Huxley", year: 1932, genre: "Science Fiction" }
    ];

    // Kolone tablice
    const columns = [
      { name: 'title', label: 'Naslov', align: 'left', field: 'title' },
      { name: 'author', label: 'Autor', align: 'left', field: 'author' },
      { name: 'year', label: 'Godina', align: 'center', field: 'year' },
      { name: 'genre', label: 'Žanr', align: 'left', field: 'genre' }
    ];

    return {
      books,
      columns
    };
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
</style>
