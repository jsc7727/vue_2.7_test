<template>
    <div>
        Count: {{ count }}
        <button @click="increment()">Increment</button>
    </div>
</template>

<script lang="js">

import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  setup() {
    const count = ref(0)

    onMounted(() => {
      count.value = 1
    })

    function increment() {
      count.value += 1
    }

    return { count, increment }
  },
})
</script>
