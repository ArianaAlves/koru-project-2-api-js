const characterURL = "https://rickandmortyapi.com/api/character";

async function getCharacterById(id) {
    const response = await fetch(`${characterURL}/${id}`);
    const data = await response.json();
    return data;
}

async function main() {
    try {
        const character = await getCharacterById(1);
        console.log(character);
    } catch (error) {
        console.error("Erro ao buscar personagem:", error);
    }
}

main();