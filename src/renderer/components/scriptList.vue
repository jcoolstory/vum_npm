<template>
<div>
    {{commands}}
    <ul>
        <li v-for="key in Object.keys(commands)"> 
            <button v-on:click="run(key)">{{key}}</button> 
        </li>
    </ul>
    <simple-command></simple-command>
</div>
</template>
<script>
import runCommand from "../../main/runCommands";
import simpleCommand from "./simpleCommand.vue";
export default {
  name: 'script-list',
  props : {
      jsondata : Object
  },
  data (){
      return {
          commands : []
      }
  },
  watch : {
      jsondata() {
          if (this.jsondata["scripts"]) {
              var data =
              this.commands = this.jsondata["scripts"];//Object.keys(data).map(key => ({ [key]: data[key] }));
          }
        }
  },
  methods :{
      run(command) {
          console.log(this.commands[command]);
          runCommand(command);
      }
  },
  components : {
      "simple-command" : simpleCommand
  }
}
</script>
<style scoped>
div {
    text-align:left
}
ul {
    text-align : left;
    list-style: none;
}
</style>
