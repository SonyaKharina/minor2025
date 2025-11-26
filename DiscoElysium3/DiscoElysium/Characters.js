async function getCharacters() {
    try {
        let response = await fetch("./data/characters.json");
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        let content = await response.json();
        const charactersData = content.characters;

        console.log("Loaded characters:", charactersData);

        let container = document.getElementById("characters-container");

        charactersData.forEach((character, index) => {
            const card = document.createElement("div");
            card.className = "character-card";

            card.innerHTML = `
                <img class="character-portrait" src="${character.portrait}" alt="${character.name}" onerror="this.src='./images/placeholder.jpg'">
                <div class="character-name">${character.name}</div>
                <div class="character-description">${character.description}</div>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        console.error("Error loading characters:", error);
        document.getElementById("characters-container").innerHTML =
            "<p style='text-align: center; color: #ff9b53;'>Failed to load characters. Please try again later.</p>";
    }
}

document.addEventListener('DOMContentLoaded', getCharacters);
