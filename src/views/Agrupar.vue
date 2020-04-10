<template>
  <div class="container">
    <h1>Agrupar repositórios por linguagem</h1>
    <b-button class="mx-1" variant="danger" @click="sendInput('c')">C</b-button>
    <b-button class="mx-1" variant="primary" @click="sendInput('java')">Java</b-button>
    <b-button class="mx-1" variant="secondary" @click="sendInput('nodejs')">Nodejs</b-button>
    <b-button class="mx-1" variant="success" @click="sendInput('python')">Python</b-button>
    <b-button class="mx-1" variant="warning" @click="sendInput('swift')">Swift</b-button>
    <b-button class="mx-1" variant="info" @click="sendInput('sql')">SQL</b-button>
    <b-button class="mx-1" variant="dark" @click="sendInput('c#')">C#</b-button>
    <div class="my-2" v-if="qtdItens && exibindo">
      <span>Exibindo {{ exibindo }} de {{ qtdItens }} resultados possíveis.</span>
    </div>
    <Lista :listaElementos="repositoriosAgrupados"></Lista>
    <b-pagination v-if="qtdItens && exibindo" align="fill" v-model="currentPage" :total-rows="rows" :per-page="perPage"></b-pagination>
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
      repositoriosAgrupados: [],
      qtdItens: "",
      exibindo: "",
      rows: 0,
      perPage: 1,
      currentPage: 1,
      currentGroupLanguage: "",
    };
  },
  watch: {
    currentPage: function(newPage) {
      this.nextElementPage(newPage);
    }
  },
  methods: {
    async sendInput(btnLabel) {
      try {
        this.currentGroupLanguage = btnLabel
        const { data, headers } = await this.$http.get("search/repositories", {
          params: {
            q: `${btnLabel}+language:${btnLabel}`,
            sort: 'stars',
            order: 'desc',
            page: 1,
          }
        });
        this.repositoriosAgrupados = data.items
        this.qtdItens = data.total_count
        this.exibindo = data.items.length
        const arrPages = headers.link.split(",")
        this.rows = this.pageCountIndex(arrPages[1])
      } catch (e) {
        console.log("Houve um erro ao executar tarefa. Detalhe: " + e.message);
      }
    },
    async nextElementPage(pageNumber) {
      try{
        const { data } = await this.$http.get("search/repositories", {
          params: {
            q: `${this.currentGroupLanguage}+language:${this.currentGroupLanguage}`,
            sort: 'stars',
            order: 'desc',
            page: pageNumber
          }
        })
        this.repositoriosAgrupados = data.items
      } catch (e) {
        console.log("Houve um erro ao executar tarefa. Detalhe: " + e.message);
      }
    },
    pageCountIndex(valor) {
      try {
        const queryparamspage = valor.substring(valor.indexOf("page="),valor.lastIndexOf(">"));
        const tmp = queryparamspage.split('=')
        const queryparamsvalue = tmp.length > 0 ? queryparamspage.split('=')[1] : 0
        return queryparamsvalue
      } catch (e) {
        console.log('Houve um erro ao executar tarefa: Detalhe'+ e.message)
        return 0
      }
    }
  }
};
</script>