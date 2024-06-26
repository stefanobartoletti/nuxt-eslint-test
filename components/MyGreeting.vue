<template>
    <div class="component">
        <div>
            <h3>Component</h3>
            <p>{{ greetJs }}</p>
            <p>{{ greetTs }}</p>
        </div>
    </div>
</template>

<script setup>
const greetJs = useGreetJs();
const greetTs = useGreetTs();   
</script>

<style scoped>
.component {
    padding: 2rem;
    border: 2px solid blue;
    background-color: lightblue;
}
</style>