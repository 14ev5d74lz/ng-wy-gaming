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
                question: "_FAQ_ITEMS.HOW_TO_PLAY",
                answer: "_FAQ_ITEMS.HOW_TO_PLAY_ANS"
            },
            {
                sequence: 2,
                question: "_FAQ_ITEMS.HOW_MANY_AGE_IS_REQUIRED",
                answer: "_FAQ_ITEMS.HOW_MANY_AGE_IS_REQUIRED_ANS"
            },
            {
                sequence: 3,
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
            },
            {
                code: "PAYPAL",
                title: "_PAYMENT_METHODS.PAYPAL",
                image: "assets/images/payment/paypal.png"
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
}