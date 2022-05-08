import {realClassNames} from "./RealClassNames";
import {fakeClassNames} from "./FakeClassNames";

export function getRandomElementFromStringArray(array: string[]) {
    return array[Math.floor(Math.random() * array.length)]
}

export function getRandomRealClassName() {
    return getRandomElementFromStringArray(realClassNames)
}

export function getRandomFakeClassNames(total: number) {
    const classes: string[] = []

    while (classes.length < total) {
        classes.push(getRandomElementFromStringArray(fakeClassNames))
    }

    return classes
}