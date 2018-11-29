<template>
    <footer class="footer mt-3">
      <div class="container">
        <span class="text-muted">{{ year }} &mdash; RUSTY Caboose &copy;</span>
      </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
            year: (new Date()).getFullYear()
        }
    }
}
</script>