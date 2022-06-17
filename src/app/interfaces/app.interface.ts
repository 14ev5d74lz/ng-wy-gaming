export interface NavItem {
    code: string,
    title: string,
    routerLink: string,
    selected: boolean,
    showInHeader: boolean,
    showInFooter: boolean
}

export interface Faq {
    sequence: number,
    question: string,
    answer: string,
    index?: number
}

export interface PaymentMethod {
    code: string,
    title: string,
    image: string
}

export interface Language {
    code: string,
    title: string,
    selected: boolean
}

export enum FragmentSection {
    BE_IN_CONTROL = "BE_IN_CONTROL",
    HOW_TO_START = "HOW_TO_START"
}

export interface Fragment {
    section: FragmentSection,
    sequence: number,
    title: string,
    description: string,
    icon: string,
    index?: number
}

export class AppConstant {
    public static get NAV_ITEMS(): NavItem[] {
        return [
            {
                code: "HOME",
                title: "_HOME",
                routerLink: "/",
                selected: true,
                showInHeader: true,
                showInFooter: true
            },
            {
                code: "GAMES",
                title: "_GAMES",
                routerLink: "/games",
                selected: false,
                showInHeader: true,
                showInFooter: true
            },
            {
                code: "ABOUT_US",
                title: "_ABOUT_US",
                routerLink: "/about-us",
                selected: false,
                showInHeader: true,
                showInFooter: true
            }
        ]
    }

    public static get FAQS(): Faq[] {
        return [
            {
                sequence: 1,
                question: "_FAQ_ITEMS.WHY_ONLINE_CASINO",
                answer: "_FAQ_ITEMS.WHY_ONLINE_CASINO_ANS"
            },
            {
                sequence: 2,
                question: "_FAQ_ITEMS.HOW_TO_PLAY",
                answer: "_FAQ_ITEMS.HOW_TO_PLAY_ANS"
            },
            {
                sequence: 3,
                question: "_FAQ_ITEMS.HOW_MANY_AGE_IS_REQUIRED",
                answer: "_FAQ_ITEMS.HOW_MANY_AGE_IS_REQUIRED_ANS"
            },
            {
                sequence: 4,
                question: "_FAQ_ITEMS.WHAT_IS_SUPPORTED_CURRENCIES",
                answer: "_FAQ_ITEMS.WHAT_IS_SUPPORTED_CURRENCIES_ANS"
            }
        ]
    }

    public static get PAYMENT_METHODS(): PaymentMethod[] {
        return [
            {
                code: "VISA",
                title: "_PAYMENT_METHODS.VISA",
                image: "assets/images/payment/visa.png"
            },
            {
                code: "MASTER_CARD",
                title: "_PAYMENT_METHODS.MASTER_CARD",
                image: "assets/images/payment/master-card.png"
            }
        ]
    }

    public static get SUPPORTED_LANGUAGES(): Language[] {
        return [
            {
                code: "en",
                title: "_LANGUAGES.EN",
                selected: true
            },
            {
                code: "zh",
                title: "_LANGUAGES.ZH",
                selected: false
            }
        ]
    }

    public static get FRAGMENTS(): Fragment[] {
        return [
            {
                section: FragmentSection.BE_IN_CONTROL,
                sequence: 1,
                title: "_FRAGMENT_SECTION.ACCESS_ANYTIME_ANYWHERE",
                description: "_FRAGMENT_SECTION.ACCESS_ANYTIME_ANYWHERE_DESC",
                icon: "flaticon-bill"
            },
            {
                section: FragmentSection.BE_IN_CONTROL,
                sequence: 2,
                title: "_FRAGMENT_SECTION.ENDLESS_GAME_OPTIONS",
                description: "_FRAGMENT_SECTION.ENDLESS_GAME_OPTIONS_DESC",
                icon: "flaticon-money"
            },
            {
                section: FragmentSection.BE_IN_CONTROL,
                sequence: 3,
                title: "_FRAGMENT_SECTION.QUICK_SYSTEM",
                description: "_FRAGMENT_SECTION.QUICK_SYSTEM_DESC",
                icon: "flaticon-loss"
            },
            {
                section: FragmentSection.BE_IN_CONTROL,
                sequence: 4,
                title: "_FRAGMENT_SECTION.HIGHEST_REBATE",
                description: "_FRAGMENT_SECTION.HIGHEST_REBATE_DESC",
                icon: "flaticon-wallet-1"
            },
            {
                section: FragmentSection.HOW_TO_START,
                sequence: 1,
                title: "_FRAGMENT_SECTION.DOWNLOAD_AND_SIGNUP",
                description: "_FRAGMENT_SECTION.DOWNLOAD_AND_SIGNUP_DESC",
                icon: "flaticon-bill"
            },
            {
                section: FragmentSection.HOW_TO_START,
                sequence: 2,
                title: "_FRAGMENT_SECTION.DEPOSIT_CASH",
                description: "_FRAGMENT_SECTION.DEPOSIT_CASH_DESC",
                icon: "flaticon-wallet"
            },
            {
                section: FragmentSection.HOW_TO_START,
                sequence: 3,
                title: "_FRAGMENT_SECTION.PLAY_AND_ENJOY",
                description: "_FRAGMENT_SECTION.PLAY_AND_ENJOY_DESC",
                icon: "flaticon-casino"
            }
        ]
    }
}