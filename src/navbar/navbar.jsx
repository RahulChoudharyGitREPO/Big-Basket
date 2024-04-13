import logo from '../assets/logo.png'
import { IoBagHandleOutline } from "react-icons/io5";
import offers from '../assets/offers.png'

export default function Navbar() {
    return (
        <>
            <div className='gap-8  pb-2 shadow-lg cursor-pointer w-90% '>
                <header className='flex justify-center gap-4 sm:gap-8 sm:px-4'>
                    <img src={logo} alt="" className='max-xl:h-16 max-lg:h-16 max-md:h-14 max-sm:h-10' />
                    <form className='flex items-center justify-start max-xl:w-[90%] search-input w-full max-sm:w-[40rem] max-sm:h-[6px]  md:w-1/2  '>
                        <input type="text" name="textInput" placeholder=" Search for products" className='w-full h-8 text-sm border rounded border-slate-600 placeholder-sm max-sm:mt-10' />
                    </form>
                    <div className='flex items-center '>
                        <button className="flex items-center h-8 px-3 py-1 text-xs rounded-md login-botton login-button sm:h-10 sm:text-sm cssbuttons-io">
                            <span>Login/SignUp</span>
                        </button>
                    </div>

                    <div className='flex items-center sm:ml-4 max-sm:h-2 max-sm:w-4 max-sm:mt-4 max-sm:mr-3'>
                        <div
                            style={{
                                backgroundColor: '#bb0202',
                                paddingLeft: '8px',
                                paddingRight: '8px',
                            }}
                            className='bag flex items-center h-10 rounded-[50%] rounded-t-full rounded-b-full'
                        >
                            <IoBagHandleOutline
                                style={{
                                    color: '#fafafa',
                                    flexWrap: 'wrap'

                                }}
                            />
                        </div>
                    </div>
                </header>

                <header className='flex justify-center hidden sm:flex '>
                    <div className='flex items-center '>
                        <button className="flex items-center h-10 px-2 py-1 text-sm bg-green-500 rounded-md cssbuttons-io2">
                            <span className='flex items-start'>Shop By Category</span>
                        </button>
                        <div className='flex justify-center px-6'>
                            <button className='pr-5 transition duration-300 ease-in-out transform md:pr-10 hover:text-red-600 hover:text-white'>Exotic fruits & V...</button>
                            <button className='px-4 transition duration-300 ease-in-out transform md:px-8 hover:text-red-600 hover:text-white'>Tea</button>
                            <button className='px-5 transition duration-300 ease-in-out transform md:px-10 hover:text-red-600 hover:text-white'>Ghee</button>
                            <button className='px-5 transition duration-300 ease-in-out transform md:px-10 hover:text-red-600 hover:text-white'>Nandni</button>
                            <div className=''>
                                <img src={offers} alt="" className='h-8 md:h-10' />
                            </div>
                        </div>
                    </div>
                </header>
            </div>


        </>
    );
}


