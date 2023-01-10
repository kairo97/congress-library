let library = {

    fetchLibrary: function() {
       fetch ('https://www.loc.gov/search/fo=json/')
        .then((response) => response.json())
        .then((data) => console.log(data))
}}

library.fetchLibrary();

