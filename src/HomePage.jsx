import Home from './assets/home.webp'
import neupass from './assets/neupassjpg.jpg'

export default function HomePage() {
    return (
        <>
            <div className='flex items-center justify-center '>
                <img src={Home} alt="" className='max-xl:w-[80%] max-sm:ml-2  height: mt-5 rounded-2xl' />
            </div>
            <div className='flex flex-wrap items-center justify-center gap-8 mt-5'>
                <button className='bg-[#D5D5D5] font-bold  rounded-md p-2 m '>Eggs Fish and br Meat</button>
                <button className='p-2 font-semibold bg-[#D5D5D5] rounded-md m'><img src={neupass} alt="" className='h-8 rounded-md' /></button>
                <button className='bg-[#4B5F20] font-bold  rounded-md p-2 m text-white'>Ayurveda</button>
                <button className='bg-[#D5D5D5] font-bold  rounded-md p-2 m '>Buy more save more</button>
                <button className='bg-[#D5D5D5] font-bold  rounded-md p-2 m '>Deals of the weak</button>
                <button className='bg-[#D5D5D5] font-bold  rounded-md p-2 m '>Combo Store</button>
            </div>


        </>
    );
}
