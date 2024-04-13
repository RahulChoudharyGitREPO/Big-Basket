import Navbar from './navbar/navbar'
import HomePage from './HomePage'
import SmartBasket from './mySmartBasket';
import BankOffers from './Components/bankOffers'
import TopOffers from './Components/TopOffers'
import BestSeller from './Components/BestSellers';
import FreshVeges from './Components/FreshVegetables';
import SnackStore from './Components/SnacksStore'
import Cleaning from './Components/CleaningHousehold'
import YourDailyStaples from './Components/Yourdailystaples'
import AutoSlider from './Components/Slider'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>

      <Navbar />
      <HomePage />
      <SmartBasket />
      <BankOffers />
      <BestSeller />
      <TopOffers />
      <FreshVeges />
      <YourDailyStaples />
      <SnackStore />
      < Cleaning />
      < AutoSlider />
      <Footer />

    </div>
  );
};

export default App;
