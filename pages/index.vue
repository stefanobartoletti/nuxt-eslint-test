<template>
    <div class="page">
        <div>
            <h2>Page</h2>
            <p>{{ greetJs }}</p>
            <p>{{ greetTs }}</p>
            <p>{{ greetNameJs }}</p>
            <p>{{ greetNameTs }}</p>
            <MyGreeting />
        </div>
    </div>
</template>

<script setup>
const greetJs = useGreetJs();
const greetTs = useGreetTs();   
const greetNameJs = useGreetNameJs();
const greetNameTs = useGreetNameTs();
</script>

<style scoped>
.page {
    padding: 2rem;
    border: 2px solid green;
    background-color: lightgreen;
}
</style>