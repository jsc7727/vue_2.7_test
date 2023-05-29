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
import api from './../common/plugin/axios'
// import { ref } from 'vue'

// Access QueryClient instance
const queryClient = useQueryClient()

// const todos = ref([{id:Date.now(),title:"asdfqwer"}]);


const getTodos = async () =>{
  const result = await api.get("http://localhost:4000/getData");
  console.log(result)
    return result.data;
}

const postTodo = async (newData) =>{
    const result = await api.post("http://localhost:4000/addData",{data:newData});
    console.log(result);
    return;
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
