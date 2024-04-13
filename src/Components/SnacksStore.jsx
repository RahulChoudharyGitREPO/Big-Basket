import amazonpay from '../assets/chaiTimesnack1.webp'
import amex from '../assets/MorningStarteer2.webp'
import indus from '../assets/pasta-sauces3.webp'
import tataneuwebp from '../assets/sweet-cravings4.webp'
export default function SnackStore() {
    return (
        <>

            <div className='max-md:mt-[20vh] max-sm:mt-[10vh] max-lg:mt-[00vh]'>
                <h1 className='flex justify-start mx-5 my-10 text-2xl font-bold md:mx-28 '>Snacks Store</h1>

                <div className="flex flex-col justify-center gap-8 m-5 max-sm:px-4 md:flex-row md:mx-28">
                    <div className='w-full md:w-[calc(25% - 2rem)] shadow-xl rounded-xl'><img src={amazonpay} alt="" className='w-full rounded-xl' /></div>
                    <div className='w-full md:w-[calc(25% - 2rem)] shadow-xl rounded-xl'><img src={amex} alt="" className='w-full rounded-xl' /></div>
                    <div className='w-full md:w-[calc(25% - 2rem)] shadow-xl rounded-xl'><img src={indus} alt="" className='w-full rounded-xl' /></div>
                    <div className='w-full md:w-[calc(25% - 2rem)] shadow-xl rounded-xl'><img src={tataneuwebp} alt="" className='w-full rounded-xl' /></div>
                </div>
            </div>

        </>
    );
}
