<template>
    <div class="logo-container">
        <div class="logo-container__inner">
            <div class="logo-container__top" v-html="rusty"></div>
            <div class="logo-container__bottom" v-html="caboose"></div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                rusty: 'RUSTY'.split('').map(l => '<span>' + l + '</span>').join("\n"),
                caboose: 'caboose'.split('').map(l => '<span>' + l + '</span>').join("\n"),
            }
        }
    }
</script>