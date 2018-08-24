<template>
  <div>
    <parent/>
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue,
  } from 'vue-property-decorator';
  import Parent from '@/components/Parent.vue';
  
  @Component({
    components: {
      Parent,
    },
  })
  export default class GrandFather extends Vue {}
</script>