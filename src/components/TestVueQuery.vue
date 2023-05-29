<template>
  <div>
    <span v-if="isLoading">Loading...</span>
    <span v-else-if="isError">Error: {{ error.message }}</span>
    <!-- We can assume by this point that `isSuccess === true` -->
    <ul v-else>
      <li v-for="todo in data" :key="todo.id">{{ todo.title }}</li>
    </ul>
    <button @click="onButtonClick">Add Todo</button>
  </div>
</template>


<script setup>
import { useQueryClient, useQuery, useMutation } from '@tanstack/vue-query'
import { ref } from 'vue'

// Access QueryClient instance
const queryClient = useQueryClient()

const todos = ref([{id:Date.now(),title:"asdfqwer"}]);


const getTodos = () =>{
    return todos.value;
}

const postTodo = (newData) =>{
    todos.value.push(newData);
}

// Query
const { isLoading, isError, data, error} = useQuery({
  queryKey: ['todos'],
  queryFn: getTodos,
})

const mutation = useMutation({
  mutationFn: postTodo,
  onSuccess: () => {
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: ['todos'] })
  },
})

function onButtonClick() {
  mutation.mutate({
    id: Date.now(),
    title: 'Do Laundry',
  })
}
</script>
