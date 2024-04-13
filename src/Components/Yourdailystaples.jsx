import topoffer1 from '../assets/attaflour1.webp'
import topoffer2 from '../assets/rice2.webp'
import topoffer3 from '../assets/Dals3.webp'
import topoffer4 from '../assets/cookingoils4.webp'
import five from '../assets/dry5.webp'
import six from '../assets/saltstaples6.webp'



export default function YourDailyStaples() {
    return (
        <>

            <div className='max-md:mt-[20vh] max-sm:mt-[20vh] max-lg:mt-[10vh]'>
                <h1 className='flex justify-start mx-5 my-10 text-2xl font-bold md:mx-28 '>Your Daily Staples</h1>

                <div className="flex flex-col justify-center gap-4 m-5 max-sm:px-4 md:flex-row md:mx-28">
                    <div className='w-full md:w-[calc(25% - 2rem)] shadow-xl rounded-xl'><img src={topoffer1} alt="" className='w-full rounded-xl' /></div>
                    <div className='w-full md:w-[calc(25% - 2rem)] shadow-xl rounded-xl'><img src={topoffer2} alt="" className='w-full rounded-xl' /></div>
                    <div className='w-full md:w-[calc(25% - 2rem)] shadow-xl rounded-xl'><img src={topoffer3} alt="" className='w-full rounded-xl' /></div>
                    <div className='w-full md:w-[calc(25% - 2rem)] shadow-xl rounded-xl'><img src={topoffer4} alt="" className='w-full rounded-xl' /></div>
                    <div className='w-full md:w-[calc(25% - 2rem)] shadow-xl rounded-xl'><img src={five} alt="" className='w-full rounded-xl' /></div>
                    <div className='w-full md:w-[calc(25% - 2rem)] shadow-xl rounded-xl'><img src={six} alt="" className='w-full rounded-xl' /></div>
                </div>
            </div>

        </>
    );
}
