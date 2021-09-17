fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=900682dacbbb52b2571df5364ca9b5e2')
.then(res => res.json())
.then (data => setMovies(data.results));

const setMovies = (movies) =>{
    const movieContainer = document.getElementById('movie-row');
    for(const movie of movies){
        // console.log(movie);
        const details = document.createElement('div');
        details.classList.add('col-md-3');
        const imgeUrl = "https://image.tmdb.org/t/p/original" + movie.poster_path;
        console.log(imgeUrl);
        details.innerHTML =`
            <div class="shadow rounded p-3 m-2">
                <img class="img-fluid" src=${imgeUrl}>
                <h5>${movie.title}</h5>
                <p>${movie.overview.slice(0, 150)}</p>
            </div>
        `;
        movieContainer.appendChild(details);
    }

}