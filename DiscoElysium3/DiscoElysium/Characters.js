async function getResponse() {
    let content = [
        {
            id: 1,
            name: "Harry Du Bois",
            description: "A detective with amnesia, trying to solve a murder while piecing together his own identity.",
            img: "minor2025/DiscoElysium3/DiscoElysium/images/harry.png"
        },
        {
            id: 2,
            name: "Kim Kitsuragi",
            description: "A precise and methodical lieutenant from the 41st precinct, your partner in the investigation.",
            img: "https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/9/94/Portrait_kitsuragi.png/revision/latest?cb=20220221100148"
        },
        {
            id: 3,
            name: "Cuno",
            description: "A foul-mouthed street kid who becomes an unlikely ally in your investigation.",
            img: "https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/d/d1/Portrait_cuno.png/revision/latest?cb=20191028100230"
        },
        {
            id: 4,
            name: "Joyce Messier",
            description: "A representative of the Wild Pines Group with crucial information about the case.",
            img: "https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/b/be/Portrait_joyce.png/revision/latest?cb=20191028100305"
        },
        {
            id: 5,
            name: "Titus Hardie",
            description: "Leader of the Hardie Boys, a local dockworkers' union with secrets to hide.",
            img: "https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/8/8c/Portrait_titus.png/revision/latest?cb=20191028100358"
        },
        {
            id: 6,
            name: "Evrart Claire",
            description: "A charismatic and manipulative union leader with his own agenda.",
            img: "https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/9/95/Portrait_evrart.png/revision/latest?cb=20191028100247"
        },
        {
            id: 7,
            name: "Klaasje",
            description: "A mysterious woman staying at the Whirling-in-Rags with connections to the victim.",
            img: "https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/6/69/Portrait_klaasje.png/revision/latest?cb=20191028100307"
        },
        {
            id: 8,
            name: "The Smoker on the Balcony",
            description: "A philosophical smoker who provides unexpected insights into the nature of reality.",
            img: "https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/0/00/Portrait_smoker.png/revision/latest?cb=20191028100347"
        },
        {
            id: 9,
            name: "Garte",
            description: "The manager of Whirling-in-Rags, trying to keep his establishment running amidst chaos.",
            img: "https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/c/c7/Portrait_garte.png/revision/latest?cb=20191028100259"
        },
        {
            id: 10,
            name: "Ruby",
            description: "A hardened mercenary with crucial knowledge about the case's darker aspects.",
            img: "https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/5/5e/Portrait_ruby.png/revision/latest?cb=20191028100339"
        },
        {
            id: 11,
            name: "Measurehead",
            description: "A racist dockworker obsessed with phrenology and racial purity.",
            img: "https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/4/4e/Portrait_measurehead.png/revision/latest?cb=20191028100319"
        },
        {
            id: 12,
            name: "Lena",
            description: "An elderly woman with a passion for cryptids and the supernatural.",
            img: "https://static.wikia.nocookie.net/discoelysium_gamepedia_en/images/1/15/Portrait_lena.png/revision/latest?cb=20191028100309"
        }
    ]

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
