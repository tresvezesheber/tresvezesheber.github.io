axios
  .get("https://restcountries.eu/rest/v2/all")
  .then(function(response) {
    console.log(response);

    var countries = response.data;
    var listCountries = document.querySelector("#app ul");

    for (item of countries) {
      var itemCountry = document.createElement("li");
      var flagCountry = document.createElement("img");
      flagCountry.setAttribute('src', item.flag)

      itemCountry.appendChild(flagCountry)
      var textItem = document.createTextNode(item.name);
      itemCountry.appendChild(textItem);
      listCountries.appendChild(itemCountry);
    }
  })
  .catch(function(error) {
    console.warn(error);
  });
