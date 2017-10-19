<template>
    <div>
        <input type="text" class="coupon-code" v-model="code" @input="validate">

        <p v-text="feedback"></p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                code: '',

                // In real life, you wouldn't hardcode this coupons array.
                // Instead, your validate() method would fire an AJAX
                // request to your server to check if the coupon is real.
                // To keep the demo simple, we'll hardcode the list.
                coupons: [
                    {
                        code: '10OFF',
                        message: '10% Off!',
                        discount: 10
                    },
                    {
                        code: 'FREE',
                        message: 'Entirely Free!',
                        discount: 100
                    }
                ],
                valid: false
            };
        },

        computed: {
            selectedCoupon () {
                return this.coupons.find(coupon => coupon.code == this.code);
            },

            message () {
                return this.selectedCoupon.message;
            },

            feedback () {
                if (this.valid) {
                    return `Coupon Redeemed: ${this.message}`;
                }

                return 'Invalid Coupon Code';
            }
        },

        methods: {
            validate () {
                this.valid = !! this.selectedCoupon;

                if (this.valid) {
                    this.$emit('applied', this.selectedCoupon.discount);
                }
            }
        }
    }
</script>
