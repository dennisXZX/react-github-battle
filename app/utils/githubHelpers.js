import axios from 'axios';

// retrieve Github user info as a promise
function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username)
}

// fetch user repos
function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos?per_page=100');
}

// calculate all the stars that the user has
function getTotalStars(repos) {
    return repos.data.reduce(function (prev, current) {
        return prev + current.stargazers_count
    }, 0)
}

// return object with the data
function getPlayersData(player) {
    return getRepos(player.login)
        .then(getTotalStars)
        .then((totalStars) => {
            return {
                followers: player.followers,
                totalStars: totalStars
            }
        })
}

// return an array containing the scores
function calculateScores(players) {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars,
    ]
}

const helpers = {
    // getPlayersInfo() accepts an array
    // it loops over the array, and for each element in the array it returns a promise
    // axios.all checks if each of the promise in the array is resolved
    // when are the promises in the array are resolved, moves to .then()
    getPlayersInfo: function(playersArray) {
        return axios.all(playersArray.map((username) => {
            return getUserInfo(username);
        })).then((info) => { // loop over the array to retrieve data property from each element
            return info.map((user) => {
                return user.data;
            })
        }).catch((err) => {
            console.log("Error in getPlayersInfo", err);
        })
    },

    battle: function(players) {
        const playerOneData = getPlayersData(players[0]);
        const playerTwoData = getPlayersData(players[1]);
        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores)
            .catch((err) => {
                console.log("Error in getPlayersInfo", err);
            })
    }
}

export default helpers;