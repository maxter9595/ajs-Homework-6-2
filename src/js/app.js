function extractSpecialAttacks(character) {
    if (!character || !character.special || !Array.isArray(character.special)) {
        return [];
    }

    const { special } = character;

    return special.map(({
        id,
        name,
        icon,
        description = 'Описание недоступно',
    }) => ({
        id,
        name,
        description,
        icon,
    }));
}

module.exports = extractSpecialAttacks;
