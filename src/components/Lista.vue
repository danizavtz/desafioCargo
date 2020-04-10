<template>
    <section>
    <b-list-group v-for="item in listaElementos" v-bind:key="item.id">
        <ItemLista :linha="item"></ItemLista>
    </b-list-group>
    </section>
</template>
<script>
import ItemLista from '@/components/ItemLista.vue'
export default {
    name: "Lista",
    components: {
        ItemLista
    },
    props: {
        listaElementos : {
            type: Array,
            required: true
        }
    }
}
</script>