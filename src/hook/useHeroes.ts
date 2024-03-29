import { useEffect, useState } from 'react'
import { Heroes } from '../interface'
import data from '../data/hero.json'

export const useHeroes = () => {
    const [heroes, setHeroes] = useState<Heroes[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const getHeroesByName = (nameHeroes: string) => {
        return heroes.find(data => data.hero === nameHeroes) ?? ({} as Heroes)
    }

    useEffect(() => {
        setTimeout(() => {
            setHeroes(data)
            setLoading(false)
        }, 300)
    }, [])

    return {
        heroes,
        loading,
        getHeroesByName
    }
}