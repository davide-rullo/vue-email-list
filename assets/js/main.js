const { createApp } = Vue
createApp({
    data() {
        return {
            randomEmails: ''
        }

    },

    mounted() {
        console.log(axios);

        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response => {
            console.log(response);
            this.randomEmails = response.data.response;
            
        })
    }

}).mount('#app')