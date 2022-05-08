interface ClassButtonProps {
    className: string
    isReal: boolean
    selected: boolean
    setIsSelected: (state: boolean) => void
}

function style(isReal: boolean, selected: boolean) {
    if (selected) {
        return isReal ? "bg-green-300 text-gray-800" : "bg-gray-300 text-gray-500"
    }

    return "bg-gray-300 text-gray-800 hover:bg-slate-300"
}

export function ClassButton({className, isReal, selected, setIsSelected}: ClassButtonProps) {
    return (
        <button
            onClick={() => setIsSelected(true)}
            className={
                `text-left text-sm md:text-lg p-2 rounded 
                transition-colors duration-300 ${style(isReal, selected)}`
            }>
            {className}
        </button>
    )
}