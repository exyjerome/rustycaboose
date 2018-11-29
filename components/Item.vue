<template>
    <div>
        {{ test }}
    </div>
</template>
<script>
    export default {
        props: ['model'],
        methods: {},
        data() {
            return {test: 'baz'}
        }
    }
</script>
