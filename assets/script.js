let library = {
    apiKey: "aBreJwLLU04TrAMbvm4OSIuUHWcI3RYGg4UcVLKV",

    fetchLibrary: function(search) {
       fetch ('https://www.loc.gov/search/?q=cats&fo=json')
        .then((response) => response.json())
        .then((data) => console.log(data))
}}

library.fetchLibrary();

