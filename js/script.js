function newFact() {

    url = 'https://cat-fact.herokuapp.com/facts/random/';

    fetch(url)
    .then(response => response.json())
    .then(function(data) {

        var fact_id = document.getElementById('p_facts');
        var text = data.text;
        
        fact_id.innerHTML = text
})
}

function newImage() {
    url = 'https://api.thecatapi.com/v1/images/';

    fetch(url + 'search/')
        .then(response => response.json())
        .then(function(data) {

            var cat_url = data[0].url;
            var cat_id= document.getElementById('images');
            
            cat_id.innerHTML = "<img src='" + cat_url + "'>";
        })
}

url = 'https://api.thecatapi.com/v1/breeds/';

fetch(url)
    .then(response => response.json())
    .then(function(data) {
        console.log(data)

        var breed_id = document.getElementById("breeds")
        
        for(let i = 0; i < data.length; i++)
        {
            var breed_id= document.getElementById('breeds');
            var breed = data[i]

            breed_id.innerHTML += 
                "<div class='dropdown'> \
                    <li class='dropbtn'><a href='" + breed.vetstreet_url +"'>" + breed.name + "</a></li> \
                    <div class='dropdown-content'> \
                        <h1>" + breed.name + "</h1>" + 
                        "<p>" + breed.description + "</p>\
                    </div>\
                </div>";
        }
})
