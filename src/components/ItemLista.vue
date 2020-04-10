<template>
  <b-list-group-item :href="`http://github.com/${linha.full_name}`" class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Usuário: {{ linha.name }}</h5>
    </div>
    <p class="mb-1">Descrição: {{ linha.description }}</p>
  </b-list-group-item>
</template>
<script>
export default {
  name: "ItemLista",
  props: {
    linha: {
      type: Object,
      required: true,
      default() {
        return { full_name: null, name: null, description: null };
      }
    }
  }
};
</script>