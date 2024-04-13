import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import firstImage from './assets/firstImage.webp'
import second from './assets/carrot.webp'
import thrirdImage from './assets/coriander.webp'
import fourthImage from './assets/cucumber.webp'


export default function SmartBasket() {
    return (
        <>
            <div className='bg-[#F7F7F7] h-[130vh] w-[80vw] flex flex-col m-auto mt-10 max-sm:bg-white'>

                <div className='flex justify-between mt-10'>
                    <div className="flex p-4 left">
                        <h1 className='text-2xl font-bold'>My Smart Basket</h1>
                    </div>
                    <div className="flex justify-center gap-2 p-4 right">
                        <span className="flex items-center h-6 p-2 bg-white rounded shadow-2xl cursor-pointer hover:bg-gray-200 "><IoArrowBackOutline />
                        </span>
                        <span className="flex items-center h-6 p-2 bg-white rounded shadow-2xl cursor-pointer hover:bg-gray-200 "><IoArrowForward /></span>
                    </div>
                </div>
                <div className="flex flex-wrap flex-shrink mt-8 justify-evenly">
                    <div className="bg-white rounded-xl w-[12.5rem] h-[90vh] max-sm:h-[85vh] flex-shrink-2 shadow-xl max-sm:mt-3">
                        <span className="flex justify-center ">
                            <img src={firstImage} alt="" className="h-[10rem]  p-3 m-3 border border-gray-300 rounded-xl" />
                        </span>
                        <div className="flex mt-4">
                            <h1 className="text-[#807f7f] flex ml-3 ">Fresho</h1>
                        </div>
                        <div className="flex justify-center p-3">
                            <h1 className="text-xl ">Capsicum - Green (Loose)</h1>
                        </div>
                        <div className="flex justify-center mt-8 ">
                            <select name="1 Kg" id="vegetables" className="border  w-[90%] rounded-lg">
                                <option value="carrot"><span>250gm  17Rs </span></option>
                                <option value="broccoli">500gm 34Rs</option>
                                <option value="tomato">1kg 51Rs</option>
                                <option value="cucumber">2kg out of stock</option>
                            </select>
                        </div>
                        <div className="flex justify-center">
                            <button className="text-red-500 hover:bg-red-800 border transition duration-300 hover:text-white w-[14vw] mt-6 p-2 border-red-500 rounded ">Buy Now</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl w-[12.5rem] h-[90vh] shadow-xl  max-sm:mt-3">
                        <span className="flex justify-center ">
                            <img src={second} alt="" className="h-[10rem]  p-3 m-3 border border-gray-300 rounded-xl" />
                        </span>
                        <div className="flex mt-4">
                            <h1 className="text-[#807f7f] flex ml-3 ">Fresho</h1>
                        </div>
                        <div className="flex justify-center p-3">
                            <h1 className="text-xl ">Carrot - Orange (Loose)</h1>
                        </div>
                        <div className="flex justify-center mt-8 ">
                            <select name="1 Kg" id="vegetables" className="border  w-[90%] rounded-lg">
                                <option value="carrot"><span>250gm  17Rs </span></option>
                                <option value="broccoli">500gm 34Rs</option>
                                <option value="tomato">1kg 51Rs</option>
                                <option value="cucumber">2kg out of stock</option>
                            </select>
                        </div>
                        <div className="flex justify-center">
                            <button className="text-red-500 hover:bg-red-800 border transition duration-300 hover:text-white w-[14vw] mt-6 p-2 border-red-500 rounded ">Buy Now</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl w-[12.5rem] h-[90vh] shadow-xl  max-sm:mt-3">
                        <span className="flex justify-center ">
                            <img src={thrirdImage} alt="" className="h-[10rem]  p-3 m-3 border border-gray-300 rounded-xl" />
                        </span>
                        <div className="flex mt-4">
                            <h1 className="text-[#807f7f] flex ml-3 ">Fresho</h1>
                        </div>
                        <div className="flex justify-center p-3">
                            <h1 className="text-xl ">Coriander Leaves</h1>
                        </div>
                        <div className="flex justify-center mt-8 ">
                            <select name="1 Kg" id="vegetables" className="border  w-[90%] rounded-lg">
                                <option value="carrot"><span>250gm  17Rs </span></option>
                                <option value="broccoli">500gm 34Rs</option>
                                <option value="tomato">1kg 51Rs</option>
                                <option value="cucumber">2kg out of stock</option>
                            </select>
                        </div>
                        <div className="flex justify-center mt-7">
                            <button className="text-red-500 hover:bg-red-800 border transition duration-300 hover:text-white w-[14vw] mt-6 p-2 border-red-500 rounded ">Buy Now</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl w-[12.5rem] h-[90vh] shadow-xl  max-sm:mt-3">
                        <span className="flex justify-center ">
                            <img src={fourthImage} alt="" className="h-[10rem]  p-3 m-3 border border-gray-300 rounded-xl" />
                        </span>
                        <div className="flex mt-4">
                            <h1 className="text-[#807f7f] flex ml-3 ">Fresho</h1>
                        </div>
                        <div className="flex justify-center p-3">
                            <h1 className="text-xl ">Cucumber</h1>
                        </div>
                        <div className="flex justify-center mt-8 ">
                            <select name="1 Kg" id="vegetables" className="border  w-[90%] rounded-lg">
                                <option value="carrot"><span>250gm  17Rs </span></option>
                                <option value="broccoli">500gm 34Rs</option>
                                <option value="tomato">1kg 51Rs</option>
                                <option value="cucumber">2kg out of stock</option>
                            </select>
                        </div>
                        <div className="flex items-center justify-center mt-7">
                            <button className="text-red-500 hover:bg-red-800 border transition duration-300 hover:text-white w-[14vw] mt-6 p-2 border-red-500 rounded ">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>



        </>
    );
}
