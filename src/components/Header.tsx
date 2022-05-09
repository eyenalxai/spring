export function Header() {
    return (
        <>
            <h1 className={"text-3xl text-gray-800 dark:text-gray-200"}>
                Try to guess which one of these classes is real in
            </h1>
            <a
                className={"mb-8 text-3xl underline text-gray-800 dark:text-gray-200 hover:text-blue-800 dark:hover:text-blue-200 transition-colors duration-300"}
                href={"https://spring.io"}>
                Spring Framework
            </a>
        </>
    )
}