import topoffer1 from '../assets/topoffer1.webp'
import topoffer2 from '../assets/topoffer2.webp'
import topoffer3 from '../assets/topoffer3.webp'
import topoffer4 from '../assets/topoffer4.webp'


export default function topOffers() {
    return (
        <>

            <div className='max-md:mt-[260vh] max-sm:mt-[290vh] max-lg:mt-[100vh]'>
                <h1 className='flex justify-start mx-5 my-10 text-2xl font-bold md:mx-28 '>Bank Offers</h1>

                <div className="flex flex-col justify-center gap-8 m-5 max-sm:px-4 md:flex-row md:mx-28">
                    <div className='w-full md:w-[calc(25% - 2rem)] shadow-xl rounded-xl'><img src={topoffer1} alt="" className='w-full rounded-xl' /></div>
                    <div className='w-full md:w-[calc(25% - 2rem)] shadow-xl rounded-xl'><img src={topoffer2} alt="" className='w-full rounded-xl' /></div>
                    <div className='w-full md:w-[calc(25% - 2rem)] shadow-xl rounded-xl'><img src={topoffer3} alt="" className='w-full rounded-xl' /></div>
                    <div className='w-full md:w-[calc(25% - 2rem)] shadow-xl rounded-xl'><img src={topoffer4} alt="" className='w-full rounded-xl' /></div>
                </div>
            </div>

        </>
    );
}
