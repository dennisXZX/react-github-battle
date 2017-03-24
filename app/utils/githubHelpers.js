import axios from 'axios';

// retrieve Github user info as a promise
function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username)
}

const helpers = {
    // getPlayersInfo() accepts an array
    // it loops over the array, and for each element in the array it returns a promise
    // axios.all checks if each of the promise in the array is resolved
    // when are the promises in the array are resolved, moves to .then()
    getPlayersInfo: (playersArray) => {
        return axios.all(playersArray.map((username) => {
            return getUserInfo(username);
        })).then((info) => { // loop over the array to retrieve data property from each element
            return info.map((user) => {
                return user.data;
            })
        }).catch((err) => {
            console.log("Error in getPlayersInfo", err);
        })
    }
}

export default helpers;