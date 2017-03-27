import axios from 'axios';

// log helper
function logHelper(data) {
    console.log(data);
    return data;
}

// retrieve Github user info as a promise
function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username)
}

// fetch user repos
// @param {string} username - name of the Github user
function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos?per_page=5');
}

// calculate all the stars that the user has
// @param {object} repos - an object representing a Github repo
function getTotalStars(repos) {
    return repos.data.reduce(function (prev, current) {
        return prev + current.stargazers_count
    }, 0)
}

// return a Github player's info for calculating score
// @param {object} players - an object contains a player's info
// use console.log(JSON.stringify(player, null, ' ')); to look into the object
function getPlayersData(player) {
    return getRepos(player.login) // return the player's repo
        .then(getTotalStars) // return the player's total Github stars
        .then((totalStars) => { // return an object representing the player
            return {
                followers: player.followers,
                totalStars: totalStars
            }
        })
}

// return an array containing the scores
// @param {object} players - an object representing the player
function calculateScores(players) {
    return [
        players[0].followers * 3 + players[0].totalStars,
        players[1].followers * 3 + players[1].totalStars,
    ]
}

const helpers = {
    // @param {array} players - names of two players
    // it loops over the array, and for each element in the array it returns a promise
    // axios.all checks if each of the promise in the array is resolved
    // when are the promises in the array are resolved, moves to .then()
    getPlayersInfo: function(players) {
        return axios.all(players.map((username) => {
            return getUserInfo(username);
        })).then((info) => { // loop over the array to retrieve data property from each element
            return info.map((user) => {
                return user.data;
            })
        }).catch((err) => {
            console.log("Error in getPlayersInfo", err);
        })
    },

    // @param {array} players - two players' info
    battle: function(players) {
        // getPlayersData returns an object representing the user
        const playerOneData = getPlayersData(players[0]);
        const playerTwoData = getPlayersData(players[1]);
        return axios.all([playerOneData, playerTwoData])
            .then(calculateScores) // return an array containing two player's scores
            .catch((err) => {
                console.log("Error in getPlayersInfo", err);
            })
    }
}

export default helpers;