// Page initialisation
let movies = [
    { id: 0, title: 'Parasite', genre: "thriller", director: "Bong Joon_ho", releaseDate: "05/30/19", runningTime: 132 },
    { id: 1, title: 'Joker', genre: "Drama", director: "Todd Phillips", releaseDate: "10/04/19", runningTime: 122 },
    { id: 2, title: 'Titanic', genre: "Drama", director: "James Cameron", releaseDate: "12/19/97", runningTime: 195 },
    { id: 3, title: 'Pirates of the Caribbean : The Curse of the Black Pearl', genre: "Adventure", director: "Gore Verbinski", relereleaseDatease: "06/09/03", runningTime: 143 },
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
    let name = document.getElementById('tfName').value;

    // Be careful because in JS "Parasite" is not equal to "parasite" but it still
    // the same movie
    let moviefound = movies.find(movie => movie.title == name);


    if (moviefound !== undefined) {
        let data = document.getElementById('moviesList');
        data.removeChild(data.children[moviefound.id]);
        // ERROR dere : in the function splice the first parameter 
        // should be the index of the element you want to delete
        movies.splice(moviefound.id, 1)

        // May be you can just call the "loader" function, like that we are sure to
        // display the list of movies. It just a suggestion
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
    let runtime = document.getElementById('tfRunTime').value;
    let id = movies.length;
    // The variable 'information" is only used inside the "if" block so you should move
    // this statement inside the 'if' block also. 
    // We don't need to create this variable if the condition is not true
    let information = { id: id, title: title, genre: genre, director: director, releaseDate: releaseDate, runningTime: runtime };
    if (title != '' && genre != '' && director != '' && releaseDate != '' && runtime != '') {
        movies.push(information);
        // This code is can of duplicate code, may be you can just call the "loader" function
        var ul = document.getElementById('moviesList')
        var list = document.createElement('LI');
        list.innerHTML = title;
        ul.appendChild(list);
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

    let name = document.getElementById('tfSearch').value;

    let moviefound = movies.find(movie => {
        // Be careful because in JS "Parasite" is not equal to "parasite" but it still
        // the same movie
        return movie.title == name;
    })


    if (moviefound !== undefined) {
        alert("Id:" + moviefound.id +
            "\nTitle: " + moviefound.title +
            "\nGenre: " + moviefound.genre +
            "\nDirector: " + moviefound.director +
            "\nRelease Date: " + moviefound.releaseDate +
            "\nRunning Time: " + moviefound.runningTime)
        document.getElementById('tfSearch').value = "";
    } else {
        alert("Movie not found!")
    }
}
// Sakto na !



// Question 5 : Write a function used to filter movies by genre.
// Steps :
//      Gets the movie's genre from the HTML file
//      Filter the movies inside the movies array
//      Display the movies filtered


function filteredSearch() {
    let genre = document.getElementById('tfFilteredSearch').value.toLowerCase();
    console.log(genre)
    let moviefound = movies.filter(movie => {
        // Be careful because in JS "Drama" is not equal to "drama" but it still
        // the same genre
        return movie.genre == genre;
    })

    if (moviefound.length != 0) {
        // Same advice try to answer to this question using a for Each
        moviefound.forEach(element => {
            let ul = document.getElementById('moviesList')
            let name = element.title;
            let list = document.createElement('LI');
            list.innerHTML = name;
            ul.appendChild(list);
        });
        for (index in moviefound) {
            var ul = document.getElementById('filteredList')
            var name = moviefound[index].title;
            var list = document.createElement('LI');
            list.innerHTML = name;
            ul.appendChild(list);
        }
        document.getElementById('tfFilteredSearch').value = "";
    } else {
        alert("Movie not found!")
    }




}

// This function is never called !
function Clear() {
    var data = document.getElementById('filteredList');
    if (data.children.length != 0) {
        while (data.children.length > 0) {
            data.removeChild(data.children[data.children.length - 1]);
        }
    }
}