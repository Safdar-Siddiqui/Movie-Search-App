
let movieDetails = document.getElementById('movieDetails');
let submitBtn = document.getElementById('submitBtn');
let inputBox = document.getElementById('inputBox');



submitBtn.addEventListener('click', function(e){
e.preventDefault();

const movieName = inputBox.value.trim().toLowerCase();
const myAPIKey = `a215aa72`;
const url = `http://www.omdbapi.com/?apikey=${myAPIKey}&t=${movieName}`;


fetch(url)
.then(function(data){
    return data.json()
})
.then(function(data){
        console.log(data);
        if(movieName){
            if(data.Title.toLowerCase().includes(movieName)){
                movieDetails.innerHTML = `
                <div class="moviePoster"> <img src="${data.Poster}"/> </div>
                <div class="movieData"> 
                <h2> ${data.Title} </h2>
                <p> <b> Cast: </b> ${data.Actors} </p>
                <p> <b> Genre: </b> ${data.Genre} </p>
                <p> <b> Release Date: </b> ${data.Released} </p>
                <p> <b> Duration: </b> ${data.Runtime} </p>
                <p> <b> Rating: <span style="color:rgb(236, 236, 16); font-size: 18px;"> &starf; </span>
                </b> ${data.imdbRating} </p>
                <p> <b> Plot: </b> ${data.Plot} </p>
                </div>
                `
            }
            else{
                movieDetails.innerHTML = `<h3> There is no Such Movie! Please enter correct name </h3>`                
            }

    }
    else{
        movieDetails.innerHTML = `<h3 style="margin:auto; text-align:center"> Please Enter a Movie Name to search </h3>`
    }
 })

 .catch(function(error){
    console.error('Error:', error);
});

})
