import { FC } from "react";
import { HeroesList } from "../components/HeroesList";
import { useTitle } from "../hook/useTitle";

export const Heroes:FC = ()=>{
    useTitle(`Heroes`)

    return<HeroesList/>
}

