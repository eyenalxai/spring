interface ClassProps {
    className: string
    isReal: boolean
    selected: boolean
    setIsSelected: (state: boolean) => void
}

export function Class({className, isReal}: ClassProps) {
    return <div className={"bg-gray-300 pt-2 pb-2.5 px-2 m-2 rounded"}>{className}</div>
}