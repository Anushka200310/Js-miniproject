let getJokeBtn = document.querySelector('.btn');
let jokes = document.querySelector('.jokes');
let url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit";

let getJoke = () => {
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        if (data.type === "single") {
            jokes.textContent = data.joke;
        } else if (data.type === "twopart") {
            jokes.textContent = `${data.setup} ${data.delivery}`;
        } else {
            jokes.textContent = "No joke found!";
        }
    })
}

getJokeBtn.addEventListener('click', getJoke);