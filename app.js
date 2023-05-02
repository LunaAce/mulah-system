var app = new Vue({
    el: '#app',
    data: {
      mobileNumber: '',
      isLoggedIn: false
    },
  
    methods: {
      login: function () {
  
        if (this.mobileNumber === '1234567890') {
          this.isLoggedIn = true;
          navigateToPage()
  
        } else {
          alert('Invalid input credentials!');
        }
      }
    }
  })
  
  function navigateToPage() {
    window.location.replace('register.html');
  }