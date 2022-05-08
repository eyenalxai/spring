import {realClassNames} from "./RealClassNames";
import {fakeClassNames} from "./FakeClassNames";

export interface ClassSHape {
    className: string
    isReal: boolean
}

export function getRandomElementFromStringArray(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)]
}

export function getRandomRealClassName(): ClassSHape {
    return {
        className: getRandomElementFromStringArray(realClassNames),
        isReal: true
    }
}

export function getRandomFakeClassNames(total: number): ClassSHape[] {
    const classes = []

    while (classes.length < total) {
        const randomClassName: string = getRandomElementFromStringArray(fakeClassNames)
        classes.push({
            className: randomClassName,
            isReal: false
        })
    }

    return classes
}

export function shuffleStringArray(array: ClassSHape[]) {
    return array.sort(() => {
        const randomTrueOrFalse = Math.random() > 0.5;
        return randomTrueOrFalse ? 1 : -1
    })
}