<template>
  <q-header>
    <q-toolbar-title style="font-size: 50px;">
      Popis Knjiga
    </q-toolbar-title>
  </q-header>

  <p style="font-size:30px;">
    Naš popis knjiga:
  </p>

  <q-page padding>
    <!-- Table displaying dummy book data -->
    <q-table
      :rows="books"
      :columns="columns"
      row-key="id"
      :rows-per-page-options="[5, 10, 15]"
      v-model:pagination="pagination" <!-- Use v-model:pagination instead of .sync -->
    />
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      // Dummy data for books
      books: [
        { id: 1, title: 'Harry Potter', author: 'J.K. Rowling', description: 'A young wizard\'s journey', image: 'https://via.placeholder.com/100', condition: 20 },
        { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien', description: 'A fantasy novel about a hobbit', image: 'https://via.placeholder.com/100', condition: 15 },
        { id: 3, title: '1984', author: 'George Orwell', description: 'A dystopian novel', image: 'https://via.placeholder.com/100', condition: 30 },
        { id: 4, title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A novel about racial injustice', image: 'https://via.placeholder.com/100', condition: 10 },
        { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', description: 'A romantic novel about manners and marriage', image: 'https://via.placeholder.com/100', condition: 25 },
      ],
      // Define table columns
      columns: [
        { name: 'id', label: 'ID', align: 'center', field: row => row.id },
        { name: 'title', label: 'Naslov', align: 'left', field: row => row.title },
        { name: 'author', label: 'Autor', align: 'left', field: row => row.author },
        { name: 'description', label: 'Opis', align: 'left', field: row => row.description },
        { name: 'image', label: 'Slika', align: 'center', field: row => row.image, format: val => `<img src="${val}" alt="book image" style="max-width: 50px; max-height: 50px;">` },
        { name: 'condition', label: 'Stanje', align: 'center', field: row => row.condition },
      ],
      pagination: {
        page: 1,
        rowsPerPage: 5
      }
    };
  }
}
</script>

<style scoped>
/* Optional: Custom styles */
</style>
