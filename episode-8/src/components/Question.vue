<template>
    <div>
        <!-- Viewing the question. -->
        <div v-if="! editing">
            <h1 v-text="question.title"></h1>
            <div class="body" v-text="question.body"></div>

            <button id="edit" @click="editing = true">Edit</button>
        </div>

        <!-- Editing the question. -->
        <div v-if="editing">
            <input type="text" name="title" v-model="form.title">
            <textarea name="body" v-model="form.body"></textarea>

            <button id="cancel" @click="cancel">Cancel</button>
            <button id="update" @click="update">Update</button>
        </div>

        <p v-if="feedback">Your question has been updated.</p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        props: ['dataQuestion'],

        data () {
            return {
                question: this.dataQuestion,
                form: {
                    title: this.dataQuestion.title,
                    body: this.dataQuestion.body,
                },
                editing: false,
                feedback: false
            };
        },

        methods: {
            cancel () {
                this.editing = false;
            },

            update () {
                this.question.title = this.form.title;
                this.question.body = this.form.body;

                axios.post('/questions/1', this.form)
                    .then(({data}) => {
                        this.feedback = true;
                    });

                this.editing = false;
            }
        }
    }
</script>
