import {useState,FC} from 'react'
import { Link } from 'wouter'

interface Props {
    children?: React.ReactNode;
  }

export const Navbar:FC<Props> = ({ children }) => {

    const [showMenu,setShowMenu] = useState<boolean>(false);

    return(
        <div className='min-h-full backdrop-blur-xl'>
            <nav className='sticky top-0 z-10 bg-red-500 '>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <Link to='/'>
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" className='w-15 h-10' />
                                </Link>
                            </div>

                            <div className='hidden md:block'>
                                <div className="ml-3 flex items-baseline space-x-2">
                                    <Link to='/' className='text-white hover:bg-red-800 px-3 py-2 text-md font-medium rounded-md'>
                                        Home
                                    </Link>
                                </div>
                            </div>

                            <div className='hidden md:block'>
                                <div className="ml-3 flex items-baseline space-x-2">
                                    <Link to='/heroes' className='text-white hover:bg-red-800 px-3 py-2 text-md font-medium rounded-md'>
                                        Heroes
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="flex mr-10 md:hidden">
                            <p className='text-white font-bold'>
                                Marvel Character
                            </p>
                        </div>

                        {/*    hamberger menu */}
                        <div className='mr-2 md:hidden'>
                                <button onClick={()=>setShowMenu(!showMenu)} 
                                className='inline-flex items-center p-2 rounded-md text-white hover:bg-red-800 focus:outline-none'
                                aria-control='mobile-menu'
                                aria-expanded='false'
                            >
                                <span className='sr-only'>Open Main Menu</span>
                                <svg className='block h-6 w-6 ' xmlns='http://www.w3.org/2000/svg'
                                    fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                    
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'/>
                                </svg>

                                <svg className='hidden h-6 w-6 ' xmlns='http://www.w3.org/2000/svg'
                                    fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                                    
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'/>
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
                    {/* show mobile menu */}
                    {showMenu && (
                        <div className={'flex flex-col px-2 pt-3 pb-3 space-y-1 sm:px-3'}>
                            <Link to='/' className='text-white hover:bg-red-800 px-3 py-2 rounded-md text-sm font-medium'>Home</Link>
                            <Link to='/' className='text-white hover:bg-red-800 px-3 py-2 rounded-md text-sm font-medium'>Hero</Link>
                        </div>
                    )}
            </nav>

            {children}
        </div>
    )
}
