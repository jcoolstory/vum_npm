<template>
<div>
    <h5>Command</h5>
    <ul>
        <li v-for="key in Object.keys(commands)"> 
            <button v-on:click="run(key)">{{key}}</button> 
        </li>
    </ul>
    <simple-command></simple-command>
    <div>log</div>
    <pre>
        {{logs}}
    <pre>
</div>
</template>
<script>
import runCommand from "../../main/runCommands";
import simpleCommand from "./simpleCommand.vue";
export default {
  name: 'script-list',
  props : {
      jsondata : Object,
      strlog : ""
  },
  data (){
      return {
          commands : [],
          logs: "empty",
          strlog: "",
      }
  },
  watch : {
      jsondata() {
          if (this.jsondata["scripts"]) {
              var data =
              this.commands = this.jsondata["scripts"];//Object.keys(data).map(key => ({ [key]: data[key] }));
          }
        },
      strlog() {
        this.logs = this.strlog;
      }
  },
  methods :{
      run(command) {
          runCommand(command, (log)=> {
            console.log(":: log", log);
            this.strlog = this.strlog || ""
            this.strlog += "\n" + log;

          });
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
    padding: 5px;
}
</style>
