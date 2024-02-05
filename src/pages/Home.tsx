import {FC} from 'react'
import { useTitle } from '../hook/useTitle'

export const Home:FC = ()=>{
    useTitle('Marvel Heroes')
    return(
        <div className='flex flex-col items-center min-h-screen bg-gray-800 p-4'>
            <h1 className='text-white text-3xl font-bold font-mono text-center mt-4'>
                Marvel Charater
            </h1>

            <img src="https://i.pinimg.com/564x/dc/9e/95/dc9e955c824b611b7daa336daa38ae80.jpg" 
                className='md:h-6/12 lg:h-2/4 object-cover rounded my-7 shadow-sm shadow-blue-800'/>
        </div>
    )
}