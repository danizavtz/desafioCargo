<template>
  <div class="container">
    <h1>Filtrar repositório por linguagem</h1>
    <b-form autocomplete="off" action="." @submit.prevent="sendInput()" method="POST">
      <label for="keyword">Palavra-chave:</label>
      <input type="text" id="keyword" name="keyword" v-model="keyword" />
      <label for="language">Linguagem:</label>
      <input type="text" id="language" name="language" v-model="language" />
      <input type="submit" value="Procurar" />
    </b-form>
    <div class="my-2" v-if="qtdItens && exibindo">
      <span>Exibindo {{ exibindo }} de {{ qtdItens }} resultados possíveis.</span>
    </div>
    <Lista :listaElementos="repositoriosFiltrados"></Lista>
  </div>
</template>
<script>
import Lista from "@/components/Lista.vue";
export default {
  name: "Filtrar",
  components: {
    Lista
  },
  data() {
    return {
      repositoriosFiltrados: [],
      language: "",
      keyword: "",
      qtdItens: "",
      exibindo: ""
    };
  },
  methods: {
    async sendInput() {
      try {
        const { data } = await this.$http.get("search/repositories", {
          params: {
            q: `${this.keyword}+language:${this.language}`,
            sort: 'stars',
            order: 'desc'
          }
        });
        this.repositoriosFiltrados = data.items;
        this.qtdItens = data.total_count;
        this.exibindo = data.items.length;
      } catch (e) {
        console.log("Houve um erro ao executar tarefa. Detalhe: " + e.message);
      }
    }
  }
};
</script>