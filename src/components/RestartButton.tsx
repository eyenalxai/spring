interface RestartButtonProps {
    selected: boolean
    setIsSelected: (state: boolean) => void
}

export function RestartButton({selected, setIsSelected}: RestartButtonProps) {

    if (!selected) return null

    return (
        <button
            className={"mt-8 pt-2 pb-2.5 px-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors duration-300"}
            onClick={() => setIsSelected(false)}
        >
            Another!
        </button>
    )
}