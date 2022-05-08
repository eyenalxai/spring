import {ClassButton} from "./ClassButton";
import {ClassSHape, getRandomFakeClassNames, getRandomRealClassName, shuffleStringArray} from "../../util/Stuff";
import {useEffect, useState} from "react";
import {RestartButton} from "../RestartButton";

export function ClassSelection() {
    const [selected, setIsSelected] = useState<boolean>(false)
    const [shuffledArray, setShuffledArray] = useState<ClassSHape[] | undefined>(undefined)

    useEffect(() => {
        if (!selected) {
            const realClassName = getRandomRealClassName()
            const fakeClassNames = getRandomFakeClassNames(4)
            setShuffledArray(shuffleStringArray([...fakeClassNames, realClassName]));
        }
    }, [selected])

    if (!shuffledArray) return <h1>Loading...</h1>

    return (
        <div>
            <div className={"flex flex-col gap-2 w-96"}>
                {
                    shuffledArray.map((className, idx) => {
                        return <ClassButton
                            key={idx}
                            className={className.className}
                            isReal={className.isReal}
                            selected={selected}
                            setIsSelected={setIsSelected}
                        />
                    })
                }
            </div>
            <div className={"flex justify-center"}>
                <RestartButton selected={selected} setIsSelected={setIsSelected}/>
            </div>
        </div>
    )
}