var app = new Vue({
    el: '#app',
    data: {
        name: '',
        dd: '',
        mm: '',
        yy: '',
        email: '',
    },
    methods: {
        handleSubmit() {
            const data = {
                name: this.name,
                dd: this.dd,
                mm: this.mm,
                yy: this.yy,
                email: this.email
            }
            console.log('submitted')
        }


    }
})

function navigateToPage() {
    window.location.assign('result.html');
}