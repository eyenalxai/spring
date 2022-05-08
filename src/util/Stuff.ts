import {realClassNames} from "./RealClassNames";
import {fakeClassNames} from "./FakeClassNames";

export function getRandomElementFromStringArray(array: string[]): string {
    return array[Math.floor(Math.random() * array.length)]
}

export function getRandomRealClassName(): string {
    return getRandomElementFromStringArray(realClassNames)
}

export function getRandomFakeClassNames(total: number): string[] {
    const classes: string[] = []

    while (classes.length < total) {
        classes.push(getRandomElementFromStringArray(fakeClassNames))
    }

    return classes
}