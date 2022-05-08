import {ReactNode} from "react";

interface ContainerProps {
    children: ReactNode
}

export function Container({children}: ContainerProps) {
    return (
        <div className={"h-screen w-screen bg-gray-200"}>
            <div className={"container flex justify-center"}>
                <div className={"flex flex-col justify-start w-96 mt-12"}>
                    {children}
                </div>
            </div>
        </div>
    )
}