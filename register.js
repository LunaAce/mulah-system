// create a new Vue app
var app = new Vue({
    // specify the HTML element to attach to
    el: '#app',

    // define your data properties
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