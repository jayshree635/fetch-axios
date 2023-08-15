const axios = require('axios');
const baseURL = `https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json`

//sort data by name ascending order
async function fetchData(req, res) {
    try {
        const response = await axios.get(baseURL);
        const allData = await response.data;

        // const sortedName = allData.slice().sort((a, b) => a.name > b.name ? -1 : 1); 
        const sortedName = allData.slice().sort((a, b) => a.name < b.name ? -1 : 1);
        return res.status(210).json({
            message: 'get Data successfully',
            data: sortedName
        });
    } catch (error) {
        console.log(error);
        return res.error
    }
}

//sort data ascending order by version
async function getAscendingData(req, res) {
    try {
        const response = await axios.get(baseURL);
        const allData = await response.data;

        allData.sort((a, b) => a.version - b.version)
        return res.status(210).json({
            message: 'get Data successfully',
            data: allData
        });
    } catch (error) {
        console.log(error);
    }
}

//..........sort data by id
async function sortById(req, res) {
    try {
        const response = await axios.get(baseURL);
        const allData = await response.data;

        allData.sort((a, b) => a.id - b.id)
        return res.status(210).json({
            message: 'get Data successfully',
            data: allData
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    fetchData,
    getAscendingData,
    sortById
}