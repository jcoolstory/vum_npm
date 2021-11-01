<template>
<div>    
    <input type="text" v-model="command"> <button v-on:click="run">  run </button>    
    <ul>
        <li v-for="line in log">
            <p>{{line}}</p>
        </li>
    </ul>
</div>
</template>
<script>
import {runCommand} from "../../main/runCommands";
export default {
  name: 'simple-command',
  props : {
      jsondata : Object
  },
  data (){
      return {
          command : undefined,
          log : []
      }
  },
  methods :{
      run() {
          runCommand(this.createCommand(this.command));
      },

      createCommand(command) {
          let v = this;
            return {
                name:command,
                stdout: function(out) {
                    console.log(out);
                    v.log.push(out);
                },
                stderr: function(out) {
                    console.error(out);
                },
                exit: function(code) {
                    console.log(code);
                    //
                    // 이 부분에서는 code 가 전달되는데
                    // 모듈 스크립트에서 에러코드를 반환하는 부분입니다.
                    // 예를들어 0~127 으로 사용하는 bash errorcode 같은 형식입니다.
                    // pyhton; sys.exit(0), sys.exit(127) 이런식으로요. 이를 판단하여 에러로그를 처리합니다.
                    //
                }
          }
      }

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
