<template>
    <div class="logo-container">
        <div class="logo-container__inner">
            <div class="logo-container__top">
                <span v-for="letter in rusty">{{ letter }}</span>
            </div>
            <div class="logo-container__bottom">
                <span v-for="letter in caboose">{{ letter }}</span>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                rusty: 'RUSTY'.split(''),
                caboose: 'caboose'.split(''),
            }
        }
    }
</script>