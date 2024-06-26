<template>
    <div class="layout">
        <div>
            <h1>Layout</h1>
            <p>{{ greetJs }}</p>
            <p>{{ greetTs }}</p>
            <p>{{ greetNameJs }}</p>
            <p>{{ greetNameTs }}</p>
        </div>
        <slot />
    </div>
</template>

<script setup>
const greetJs = useGreetJs();
const greetTs = useGreetTs();   
const greetNameJs = useGreetNameJs();
const greetNameTs = useGreetNameTs();
</script>

<style>
.layout {
    margin: 2rem;
    padding: 2rem;
    border: 2px solid red;
    background-color: lightpink;
    font-family: sans-serif;
}

h1, h2, h3 {
    margin: 0;
    text-transform: uppercase;
}

p {
    font-weight: bold;
}

</style>