async function getMatchData() {
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=b508cccf-7a38-49b4-b013-3b87504b0c75&offset=0")
    .then(data => data.json())
    .then(data => {
        if(data.status != 'success') {
            return;
        }

        const matchList = data.data;

        if(!matchList) {
           return [];
        }

        const relevantData = matchList.map(match => `${match.name} , ${match.status}`);

        console.log(relevantData);

        document.getElementById('matches').innerHTML = relevantData.map(match => `<li>${match}</li>`).join();

        return relevantData;

    })
    .catch(e => console.log(e));
}

getMatchData();