const axios = require('axios')

module.exports = async (n = 20) => {
    const url = "https://dog.ceo/api/breeds/image/random"
    let response = []
    for (let i = 0; i < n; i++) {
        const res = await axios.get(url)
        const dogs = res.data
        response.push(dogs.message)
    }
    console.log(response)
    return response
} 
// this is sample 4th change.