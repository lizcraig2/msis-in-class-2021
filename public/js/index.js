const Counter = {
    data() {
      return {
        counter: 0
        foo: 0,
        msg: "I hate D&S",
        list: ["red", "green", "blue"]
      }
    }
  },
  created() {
    fetch('https://randomuser.me/api')
    .then(
      function(response) {
        return response.json()
    } 
    )
    .then(
      function(json) {
        console.log(json);
        this.result = json.results[0];
      }
    )
    .catch( () )
  }
  
  Vue.createApp(Offer).mount('#offerApp')