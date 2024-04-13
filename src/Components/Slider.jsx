import SimpleImageSlider from 'react-simple-image-slider';
import images1 from '../assets/silder1.webp'
import images2 from '../assets/silder2.webp'
import images3 from '../assets/slider3.webp'
import images4 from '../assets/silder4.webp'



const images = [
    images1,
    images2,
    images3,
    images4
];


const Slider = () => {
    return (
        <div className='flex justify-center mt-20 h-[90vh] w-[100%] flex-wrap'>
            <SimpleImageSlider
                width={1099}
                height={404}
                images={images}
                showBullets={true}
                showNavs={true}
                borderRadius={5000}
            />
        </div>

    );
}


export default Slider;
