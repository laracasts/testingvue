<template>
    <div>
        <input class="new-reminder" v-model="newReminder">
        <button @click="add">Add Reminder</button>

        <ul v-if="reminders.length">
            <li v-for="(reminder, index) in reminders" :key="reminder">
                {{ reminder }}

                <button class="remove" @click="remove(reminder, index)">Remove</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                newReminder: '',
                reminders: []
            };
        },

        methods: {
            add () {
                this.reminders.push(this.newReminder);

                this.newReminder = '';
            },

            remove (reminder, index) {
                this.reminders.splice(index, 1);
            }
        }
    }
</script>