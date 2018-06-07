<template>
    <div>
        <button v-on:click="openDialog">...</button>
    </div>
</template>

<script>
export default {
  name: 'package-explorer',
  props : {
      jsondata : Object
  },
  methods : {
      openDialog(){
          selectDirectory();
      }
  }
}
</script>

