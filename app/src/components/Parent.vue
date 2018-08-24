<template>
  <div>
    <HelloWorld msg="hoge" />
  </div>
</template>

<script lang="ts">
  import {
    Component,
    Prop,
    Vue,
  } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue';
  
  @Component({
    components: {
      HelloWorld,
    },
  })
  export default class Parent extends Vue {}
</script>