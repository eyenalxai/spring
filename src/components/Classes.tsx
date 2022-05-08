import {Class} from "./Class";
import {getRandomFakeClassNames, getRandomRealClassName} from "../util/Stuff";
import {useState} from "react";

function shuffleStringArray(array: string[]) {
    return array.sort(() => {
        const randomTrueOrFalse = Math.random() > 0.5;
        return randomTrueOrFalse ? 1 : -1
    })
}

export function Classes() {
    const [selected, setIsSelected] = useState<boolean>(false)

    const fakeClassNames: string[] = getRandomFakeClassNames(4)
    const realClassName: string = getRandomRealClassName()

    const shuffledArray = shuffleStringArray([...fakeClassNames, realClassName])

    return (
        <div className={"container flex justify-center items-center pt-4"}>
            <div>
                {
                    shuffledArray.map((className, idx) => {
                        return <Class
                            key={idx}
                            className={className}
                            isReal={realClassName === className}
                            selected={selected}
                            setIsSelected={setIsSelected}
                        />
                    })
                }
            </div>
        </div>
    )
}