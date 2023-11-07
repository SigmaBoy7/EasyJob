<template>
    <button @click="$emit(onClick)"
    class="px-10 py-4 bg-green-500 text-lg font-bold"
    >
        <slot></slot>
    </button>
</template> 

<script>
    export default {
        name: 'app-button'
    }
</script>

<script setup>
</script>
