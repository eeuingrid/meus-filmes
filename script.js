fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDYwMmQyYTg2NzdhN2I5ZWY5MGRhMjU3NjY2ODZlMSIsIm5iZiI6MTc3MTU0MjgwNy4wOTcsInN1YiI6IjY5OTc5OTE3MjRjM2VjMDlhMTEzYmI2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SCkmxIbaN2tcM4ayLa-iuEDIe9TVhNf0yafts99J6R0'
    }
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data.results);
    })
