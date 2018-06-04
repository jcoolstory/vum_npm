<template>
<div> {
    <ul>
        <li v-for="(value, key) in json"> 
            <span>{{ key}} :  </span> <span v-if="typeof(value) === 'object'" >["object"]  <json-view v-bind:jsondata="value"></json-view>  </span><span v-else>{{ value }} </span>
        </li>
    </ul>
}
</div>
</template>
<script>
export default {
  name: 'json-view',
  data () {
    
  },
  computed : {
      json : function(){
          //console.log(this.jsondata);
        //   console.log(this.jsondata,"typeof : " ,typeof(this.jsondata));
          return this.jsondata;
      }
  },
  props : {
      jsondata : Object
  },
  mounted : function(){
      console.log(this.jsondata,"typeof : " ,typeof(this.jsondata));
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
