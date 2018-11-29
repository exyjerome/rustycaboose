<template>
    <div class="row or justify-content-center">
        <div class="col-auto">
            <a :href="`steam://connect/${ip}:${port}`" class="button-outline">
                <i class="fab fa-steam"></i> <span>{{ text }} {{ api.players }}/{{ api.maxplayers }}</span>
            </a>
        </div>
        <div class="col-auto" v-if="api.players == 0">
            <router-link to="/vip" class="button-outline button-outline--gold">
                <i class="fas fa-star"></i> Skip the queue
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        timers: {
            players: {time: 10000, autostart: true, immediate: true}
        },
        data(){
            return {
                ip: 'play.rustycaboo.se',
                port: 28015,
                text: 'Join Now',
                api: {
                    players: 0,
                    maxplayers: 100
                },
                isActive: false
            }
        },
        methods: {
            players: function(){
                this.$http.get('https://rust-servers.net/api/?object=servers&element=detail&key=CwklHdcJj6tIwze2TovcG5FFbpPDQRmjZV').then(resp => {
                    this.api = resp.body;
                });
            }
        }
    }
</script>
