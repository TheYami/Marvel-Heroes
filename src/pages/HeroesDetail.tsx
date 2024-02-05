import { useLocation, useRoute } from "wouter";
import { useHeroes } from "../hook/useHeroes";
import { useTitle } from "../hook/useTitle";

export const HeroesDetail = ()=>{
    const [,params] = useRoute('/heroes/:heroesName')
    const heroesName = decodeURI(params!.heroesName)

    const {getHeroesByName} = useHeroes()

    const {imghuman,link,biography} = getHeroesByName(heroesName)

    const [,setLocation] = useLocation()

    useTitle(`Heroes |   ${heroesName}`)

    return(
        <div className="flex flex-col items-center p-8 min-h-screen bg-gray-800 text-white">
            <div className="flex flex-col md:flex-row md:gap-4 md:w-[calc(80%+1rem)] lg:w-[calc(70%+1rem)] items-center py-5 px-2 border-dashed border-2 rounded-xl">
                <div className="flex flex-col items-center w-full">
                    <a href={link} target="blank">
                        <p className="font-mono font-bold text-2xl lg:text-3xl hover:text-gray-300">
                            {heroesName}
                        </p>
                    </a>
                    <img src={imghuman} alt={heroesName} className="lg:h-40 md:h-28 object-cover my-3"/>
                </div>

                <p className="font-mono md:text-base lg:text-lg p-3 lg:p-0">
                    {biography}
                </p>
            </div>

                <button onClick={()=>setLocation('/heroes')} className="text-black bg-white rounded-lg p-3 font-bold mt-3">
                    Go Back
                </button>
        </div>
    )
}

export default HeroesDetail