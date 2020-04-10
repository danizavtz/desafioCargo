<template>
  <div>
    <LeadInfo></LeadInfo>
    <Container></Container>
  </div>
</template>

<script>
import LeadInfo from "@/components/LeadInfo.vue";
import Container from "@/components/Container.vue";
export default {
  name: "Home",
  components: {
    LeadInfo,
    Container
  }
};
</script>
