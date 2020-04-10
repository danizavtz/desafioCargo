<template>
  <b-container>
    <h1>Listar repositórios</h1>
    <Lista :listaElementos="listaRepositorios"></Lista>
    <b-pagination align="fill" v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
  </b-container>
</template>
<script>
import Lista from "@/components/Lista.vue";
export default {
  name: "Listar",
  components: {
    Lista
  },
  data() {
    return {
      listaRepositorios: [],
      rows: 1000,
      perPage: 1,
      currentPage: 1,
      itemsPerPage: 100
    };
  },
  watch: {
    currentPage: function() {
      this.nextElementPage();
    }
  },
  async beforeMount() {
    try {
      const { data } = await this.$http.get("/repositories");
      this.listaRepositorios = data;
    } catch (e) {
      console.log("Houve um erro ao executar tarefa. Detalhe: " + e);
    }
  },
  methods: {
    async nextElementPage() {
      try {
        const { data } = await this.$http.get('/repositories', {
        params: {
          since: this.ultimoElementoLista()
          }
        })
        this.listaRepositorios = data;
      } catch (e) {
        console.log("Houve um erro ao executar tarefa. Detalhe: " + e);
      }
    },
    ultimoElementoLista() {
      if (this.listaRepositorios.length) {
        return this.listaRepositorios[this.listaRepositorios.length - 1].id;
      }
      return 1;
    }
  }
};
</script>