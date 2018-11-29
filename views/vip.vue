<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 pb-3">
                <p class="text-muted text-center">Monthly Donation Goal</p>
                <div class="progress progress--gold" style="height: 1px;">
                    <div class="progress-bar" role="progressbar" style="width: 25%;"></div>
                </div>
                <p class="progress-amount"><span>£15.00</span> of £80.00</p>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-auto">
                <div class="list-group text-center">
                    <a href="#" class="list-group-item list-group-item--gold">
                        <i class="fas fa-star"></i> VIP PERKS
                    </a>
                    <a v-for="item in items" class="list-group-item">{{ item }}</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [
                'Reserved Slot',
                'Unique Tag Ingame',
                'Input on new maps',
                'Increased Tool Durability (25%)'
            ]
        }
    }
}
</script>