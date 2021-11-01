<template>
  <div id="app">
    <package-explorer></package-explorer>
    <hr/>
    <json-view v-bind:jsondata="jsondata"></json-view>
    <hr/>
    <script-list v-bind:jsondata="jsondata"></script-list>
  </div>
</template>

<script>
import fs from "fs";
import jsonView from "./components/jsonView.vue";
import scriptlist from "./components/scriptList.vue";
import packageexplorerVue from './components/packageexplorer.vue';
import {ipcRenderer} from "electron";
export default {
  name: 'app',

  data () {
    return {
      jsondata : {},
    }
  },

  mounted : function() {
    ipcRenderer.on("selectPath", (event,data)=>{
        console.log(data);
        let files = fs.readdirSync('.').filter(f => f== "package.json")
        fs.readFile(files[0], 'utf8',(err,str)=> {
          this.jsondata = JSON.parse(str);
        })
    })
  },

  components : {
    "json-view": jsonView,
    "package-explorer":packageexplorerVue,
    "script-list": scriptlist
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:1em;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
