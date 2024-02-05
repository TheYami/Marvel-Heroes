import { useRef,useEffect } from "react";

export const useTitle = (title:string) =>{
    const DefaultTitle = useRef<string>(document.title)

    useEffect(()=>{
        document.title = title || DefaultTitle.current
    },[title])
}