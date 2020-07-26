// Page initialisation
let movies = [
    { id: 0, title: 'Parasite', genre: "thriller", director: "Bong Joon_ho", releaseDate: "05/30/19", runningTime: 132 },
    { id: 1, title: 'Joker', genre: "Drama", director: "Todd Phillips", releaseDate: "10/04/19", runningTime: 122 },
    { id: 2, title: 'Titanic', genre: "Drama", director: "James Cameron", releaseDate: "12/19/97", runningTime: 195 },
    { id: 3, title: 'Pirates of the Caribbean : The Curse of the Black Pearl', genre: "Adventure", director: "Gore Verbinski", releaseDate: "06/09/03", runningTime: 143 },
]

// Question 1 : Write a function used to display the movies name.
// Use forEach

document.addEventListener("load", loader());

function loader() {
    document.getElementById('moviesList').innerHTML = "";
    movies.forEach(element => {
        let ul = document.getElementById('moviesList')
        let name = element.title;
        let list = document.createElement('LI');
        list.innerHTML = name;
        ul.appendChild(list);
    });
};



// Question 2 : Write a function used to delete a movie by it's name.
// Steps :
//      Create a function
//      If the movie exist delete it from the movies array
//      Update the view ( be careful to not duplicate code )

function deletemovie() {
    let name = document.getElementById('tfName').value.toLowerCase();

    var moviefound = movies.find(movie => {
        return movie.title.toLowerCase() == name;
    })

    if (moviefound !== undefined) {
        movies.splice(moviefound.id, 1)
        loader()
            // clear the input field
        document.getElementById('tfName').value = ""
    } else {
        alert("Movie not found!")
    }
}



// Question 3 : Write a function used to add a movie.
// Steps :
//      Gets all the values from the HTML file
//      Add a new movie in the movies array
//      Update the view ( be careful to not duplicate code )

function addmovie() {
    let title = document.getElementById('tfTitle').value;
    let director = document.getElementById('tfDirector').value;
    let genre = document.getElementById('tfGenre').value;
    let releaseDate = document.getElementById('tfReleasedate').value;
    let runningTime = document.getElementById('tfRunTime').value;
    let id = movies.length;

    if (title != '' && genre != '' && director != '' && releaseDate != '' && runningTime != '') {
        let information = { id, title, genre, director, releaseDate, runningTime };
        movies.push(information);
        loader()
            //Clears the input fields after saving
        document.getElementById('tfTitle').value = "";
        document.getElementById('tfDirector').value = "";
        document.getElementById('tfGenre').value = "";
        document.getElementById('tfReleasedate').value = "";
        document.getElementById('tfRunTime').value = "";

    } else {
        alert("Fill out the information correctly!")
    }


}



// Question 4 : Write a function used to display all the detail of
// a movie in an alert popup.
// Steps :
//      Gets the movie's name from the HTML file
//      Search the movie inside the movies array
//      Display the alert popup with all the information of the movie

function showDetails() {

    let name = document.getElementById('tfSearch').value.toLowerCase();

    let moviefound = movies.find(movie => movie.title.toLowerCase() == name)


    if (moviefound !== undefined) {
        alert("Id:" + moviefound.id +
                "\nTitle: " + moviefound.title +
                "\nGenre: " + moviefound.genre +
                "\nDirector: " + moviefound.director +
                "\nRelease Date: " + moviefound.releaseDate +
                "\nRunning Time: " + moviefound.runningTime)
            //Clear the input field
        document.getElementById('tfSearch').value = "";
    } else {
        alert("Movie not found!")
    }
}



// Question 5 : Write a function used to filter movies by genre.
// Steps :
//      Gets the movie's genre from the HTML file
//      Filter the movies inside the movies array
//      Display the movies filtered


function filteredSearch() {
    let genre = document.getElementById('tfFilteredSearch').value.toLowerCase();
    let moviefound = movies.filter(movie => movie.genre.toLowerCase() == genre);
    if (moviefound.length != 0) {
        moviefound.forEach(element => {
            let ul = document.getElementById('filteredList')
            let name = element.title;
            let list = document.createElement('LI');
            list.innerHTML = name;
            ul.appendChild(list);
        });
        document.getElementById('tfFilteredSearch').value = "";
    } else {
        document.getElementById('tfFilteredSearch').value = "";
        alert("Movie not found!")
    }




}