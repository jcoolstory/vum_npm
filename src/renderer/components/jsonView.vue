<template>
<div> {
    <ul>
        <li v-for="(value, key) in jsondata"> 
            <span>{{key}} :  </span> 
            <span v-if="typeof(value) === 'object'" >["object"] 
                <json-view v-bind:jsondata="value"></json-view>  
            </span>
            <span v-else>{{ value }} </span>
        </li>
    </ul>
}
</div>
</template>
<script>
export default {
  name: 'json-view',
  props : {
      jsondata : Object
  },
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
