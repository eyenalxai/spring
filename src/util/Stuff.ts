import {realClassNames} from "./RealClassNames";
import {fakeClassNames} from "./FakeClassNames";

export interface ClassShape {
    className: string
    isReal: boolean
}

function getRandomIntUpTo(max: number): number {
    return Math.floor(Math.random() * max);
}

export function getRandomElementFromStringArray(array: string[]): string {
    return array[getRandomIntUpTo(array.length)]
}

export function getRandomRealClassName(): ClassShape {
    return {
        className: getRandomElementFromStringArray(realClassNames),
        isReal: true
    }
}

export function getRandomFakeClassNames(total: number): ClassShape[] {
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


export function shuffleArray(array: ClassShape[]): ClassShape[] {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}