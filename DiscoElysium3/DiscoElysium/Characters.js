async function getResponse() {
    let response = await fetch("./data/characters.json")
    let content = await response.text()
    console.log(content)
    content = JSON.parse(content)
    content = content.characters
    console.log(content)

    let key
    for (key in content) {
        console.log(content[key].id, content[key].name)
        console.log(content[key])
    }

    let node_for_insert = document.getElementById("characters-container")
    for (key in content) {
        node_for_insert.innerHTML += `
        <div class="character-card">
            <img class="character-portrait" src="${content[key].img}" alt="${content[key].name}">
            <div class="character-name">${content[key].name}</div>
            <div class="character-description">${content[key].description}</div>
        </div>
        `
    }
}
getResponse()
