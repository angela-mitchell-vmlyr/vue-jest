<template>

    <div class="container mt-5">

        <Chat :handleSubmitChatMessage="this.handleSubmitChatMessage" :messages="this.$data.messages"/>

    </div>

</template>

<script>

    import { ChatMessageService } from './services/chatMessageService/index.js';

    export default {

        data(){

            return {

                messages: []
            }

        },
        async mounted(){

            console.log(ChatMessageService);
            const messages = await ChatMessageService.getMessages();
            this.$data.messages.push(... messages);

        },
        methods:{

            async handleSubmitChatMessage(content){

                const message = {
                    content,
                    sender: "YOU"
                }

                await ChatMessageService.submitMessage(message);

                this.$data.messages.push(message);

            }

        }

    }

</script>