import { useHeroes } from "../hook/useHeroes";
import { HeroesItems } from "./HeroesItems";

export const HeroesList = ()=>{
    const {loading,heroes} = useHeroes();

    return(
        <div className="bg-gray-800 min-h-screen p-3">
            <h1 className="font-semibold text-white font-mono text-3xl text-center py-4">
                Heroes
            </h1>

            <div className="flex gap-4 lg:gap-6 flex-wrap justify-center ">
                {loading ?(
                    <p>Loading...</p>
                ):(
                    heroes.map((data,index)=><HeroesItems key={index} heroes={data}/>)
                )}
            </div>
        </div>
    )
}