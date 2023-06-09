<template>
  <div>{{ test }}</div>
  <button @click="fn">点击</button>
  <hr>
  <div>{{ hello }}</div>
</template>

<script setup lang="ts">
import { useMoreStore } from '../store/more'
import { useHelloStore } from '../store/helloWorld'
const test = useMoreStore()
const hello = useHelloStore()
const fn =()=>{
    test.setLine('hahahah')
}

</script>
<style scoped></style>
