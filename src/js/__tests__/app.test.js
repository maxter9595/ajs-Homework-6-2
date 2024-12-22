const extractSpecialAttacks = require('../app');

describe('extractSpecialAttacks', () => {
    test('should extract special attacks with default description', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: [{
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...'
                }
            ]
        };
        const expected = [{
                id: 8,
                name: 'Двойной выстрел',
                description: 'Двойной выстрел наносит двойной урон',
                icon: 'http://...'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                description: 'Описание недоступно',
                icon: 'http://...'
            }
        ];
        expect(extractSpecialAttacks(character)).toEqual(expected);
    });

    test('should extract special attacks with all descriptions', () => {
        const character = {
            special: [{
                    id: 8,
                    name: 'Двойной выстрел',
                    icon: 'http://...',
                    description: 'Двойной выстрел наносит двойной урон'
                },
                {
                    id: 9,
                    name: 'Нокаутирующий удар',
                    icon: 'http://...',
                    description: 'Нокаутирующий удар наносит критический урон'
                }
            ]
        };
        const expected = [{
                id: 8,
                name: 'Двойной выстрел',
                description: 'Двойной выстрел наносит двойной урон',
                icon: 'http://...'
            },
            {
                id: 9,
                name: 'Нокаутирующий удар',
                description: 'Нокаутирующий удар наносит критический урон',
                icon: 'http://...'
            }
        ];
        expect(extractSpecialAttacks(character)).toEqual(expected);
    });

    test('should return an empty array if special is undefined', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
        };
        expect(extractSpecialAttacks(character)).toEqual([]);
    });

    test('should return an empty array if special is null', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: null
        };
        expect(extractSpecialAttacks(character)).toEqual([]);
    });

    test('should return an empty array if special is not array', () => {
        const character = {
            name: 'Лучник',
            type: 'Bowman',
            health: 50,
            level: 3,
            attack: 40,
            defence: 10,
            special: 123
        };
        expect(extractSpecialAttacks(character)).toEqual([]);
    });

    test('should return an empty array if no data provided', () => {
        expect(extractSpecialAttacks()).toEqual([]);
    });
});
