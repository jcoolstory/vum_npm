<template>
    <div> {{ currentPath }}
        <button v-on:click="openDialog">...</button>
    </div>
</template>

<script>
import {ipcRenderer} from "electron";
export default {
  name: 'package-explorer',
  props : {
      jsondata : Object
  },
  data (){
      return {
          currentPath : undefined
      }
  },
  methods : {
      openDialog(){
        ipcRenderer.send("showDialog");
      }
  },
  mounted () {
    ipcRenderer.on("selectPath", (selectPath,data)=>{        
        this.currentPath = data;
    })

  }
}
</script>

