$(function() {
  var IDme = {
    access_token: window.location.hash.split("access_token=")[1].split("&")[0],

    params: function() {
      return {
        url: `https://api.id.me/api/public/v3/attributes.json?access_token=${this.access_token}`,
        dataType: "jsonp"
      }
    },

    request: async function() {
      if (this.access_token) {
        fetch(this.params().url).then(function(response) {
          return response.json();
        }).then(function(data) {
          if (data.status[0].verified) {
            $("#idme-verification").hide();
            $("#idme-verification").before(`<span>Thank you ${data.attributes[0].value} for verifying your ${data.status[0].subgroups[0]} status with ID.me.</span>`);
          }
          console.log(data);
        }).catch(function() {
          console.log("Booo");
        });
      }
    }
  };

  IDme.request();
});
