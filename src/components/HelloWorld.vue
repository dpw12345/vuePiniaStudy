<template>

<div>{{helloStore.title}}</div>
<div>原始值：{{ helloStore }} <button @click="addOrigin">给原始值加点什么</button></div>
<div>解构值：{{ title }} <button @click="addAfter">给解构值加点什么</button></div>
<div>getters值：{{ helloStore.titlePlus }}</div>

</template>

<script setup lang='ts'>
import { useHelloStore } from '../store/helloWorld'
import { storeToRefs } from 'pinia';
const helloStore = useHelloStore()
const {title} = storeToRefs(helloStore)

const addOrigin=()=>{
    helloStore.title+='--'
}
const addAfter =()=>{
    // title+='+'
    helloStore.getTitle()
}
</script>
<style scoped>

</style>