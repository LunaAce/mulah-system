
var app = new Vue({
  el: '#app',
  data: {
    mobileNumber: '',
    isLoggedIn: false
  },

  methods: {
    login: function () {

      if (this.mobileNumber === '1234567890') {
        console.log("Valid")
        this.isLoggedIn = true;
        
      } else {
        alert('Invalid input credentials!');
      }
    }
  }
})

function navigateToPage() {
  window.location.assign('register.html');
}