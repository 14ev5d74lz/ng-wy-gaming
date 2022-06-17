export interface GameCategory {
    code: string,
    title: string,
    selected: boolean,
    default?: boolean
}

export interface Game {
    title: string,
    backgroundImage: string,
    categoryCode: GameCategory["code"],
    category?: GameCategory,
    href: string
}

export class GamesConstant {
    public static get GAME_CATEGORIES(): GameCategory[] {
        return [
            {
                code: "ALL",
                title: "_GAMES_CATEGORIES.ALL",
                selected: false,
                default: true
            },
            {
                code: "SLOTS",
                title: "_GAMES_CATEGORIES.SLOTS",
                selected: false
            },
            {
                code: "ROULETTE",
                title: "_GAMES_CATEGORIES.ROULETTE",
                selected: false
            },
            {
                code: "BLACK_JACK",
                title: "_GAMES_CATEGORIES.BLACK_JACK",
                selected: false
            },
            {
                code: "POKER_GAMES",
                title: "_GAMES_CATEGORIES.POKER_GAMES",
                selected: false
            },
            {
                code: "OTHER",
                title: "_GAMES_CATEGORIES.OTHER",
                selected: false
            }
        ]
    }

    public static get GAMES(): Game[] {
        return [
            {
                title: "918 Kiss 2",
                backgroundImage: "assets/images/gambling-image/image-2-350x500/1-01.png",
                categoryCode: "SLOTS",
                href: ""
            },
            {
                title: "Lucky Palace",
                backgroundImage: "assets/images/gambling-image/image-2-350x500/2-01.png",
                categoryCode: "ROULETTE",
                href: ""
            },
            {
                title: "XE 88",
                backgroundImage: "assets/images/gambling-image/image-2-350x500/3-01.png",
                categoryCode: "BLACK_JACK",
                href: ""
            },
            {
                title: "Mega 888",
                backgroundImage: "assets/images/gambling-image/image-2-350x500/4-01.png",
                categoryCode: "POKER_GAMES",
                href: ""
            },
            {
                title: "Joker",
                backgroundImage: "assets/images/gambling-image/image-2-350x500/5-01.png",
                categoryCode: "OTHER",
                href: ""
            },
            {
                title: "Pussy 888",
                backgroundImage: "assets/images/gambling-image/image-2-350x500/6-01.png",
                categoryCode: "OTHER",
                href: ""
            },
            {
                title: "Great Wall 99",
                backgroundImage: "assets/images/gambling-image/image-2-350x500/7-01.png",
                categoryCode: "OTHER",
                href: ""
            }
        ]
    }
}