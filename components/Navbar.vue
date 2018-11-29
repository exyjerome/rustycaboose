<template>
    <nav class="navbar navbar-expand-lg navbar-expand-sm navbar-dark bg-dark mb-3">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <img src="/svg/eftwiki.svg" alt="EFT Wiki">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample07">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link">items</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">about</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/flea-market" class="nav-link">flea market</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">loadout builder</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">quests</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">maps</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">guides</a>
            </li>
            <li class="nav-item">
              <a href="https://discord.me/ghv2" class="nav-link" target="_blank">discord</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>
<script>
    export default {}
</script>