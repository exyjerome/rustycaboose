<template>
    <div class="container pb-3">
        <div class="row justify-content-center">
            <div class="col-12 pb-3">
                <p class="text-center">Monthly Donation Goal</p>
                <div class="progress progress--gold" style="height: 1px;">
                    <div class="progress-bar" role="progressbar" style="width: 25%;"></div>
                </div>
                <p class="progress-amount"><span>£0.00</span> of £84.10</p>
            </div>
        </div>
        <div class="row text text-justify">
            <div class="col-12">
                <p>Donations go directly back into funding the server, we currently host on a Intel Xeon E3-1270v6 - 32GB DDR4 ECC 2400 MHz with two nvme drives to ensure performance from the start. This currently sets me back £78.28 a month including taxes.</p>
                <p>Hosting the site costs roughly £5.85 a month, which brings us to £84.10 as the donation goal, any amount above this will stay in the pot for the next month</p>
                <p>Any perks/benefits of donating will be delivered instantly and can be redeemed in-game</p>
                <hr>
            </div>
        </div>
        <div class="row justify-content-center">
            <div v-for="item in groups" class="col-md-4 col-sm-12 col-xs-12">
                <div class="list-group text-center pb-5">
                    <a v-html="item.name" class="list-group-item list-group-item--gold"></a>
                    <a v-for="perks in item.perks" v-html="perks" class="list-group-item"></a>
                    <a v-html="item.price" class="list-group-item list-group-item--gold"></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            groups: [
                {
                    name: '<i class="fas fa-running"></i> QUEUE SKIPPER',
                    perks: [
                        'Skip Queue'
                    ],
                    price: '£5 / month'
                },
                {
                    name: '<i class="fas fa-star"></i> VIP',
                    perks: [
                        'Reserved Slot',
                        'Input on new maps',
                        'Starter Kit (once per wipe)',
                        'Increased Tool Durability (by 15%)',
                        '[VIP] tag in game'
                    ],
                    price: '£10 / month'
                },
                {
                    name: '<i class="fas fa-chess-king"></i> THE KING',
                    perks: [
                        'Reserved Slot',
                        'The Kings Kit (once per wipe)',
                        'Increased Tool Durability (by 30%)',
                        '[KING] tag in game'
                    ],
                    price: '£15 / month'
                }
            ]
        }
    }
}
</script>