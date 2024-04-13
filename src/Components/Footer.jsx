import footer from '../assets/Footer.png'

export default function Footer() {
    return (
        <>
            <div className="flex flex-wrap text-white bg-[#101010] justify-evenly">
                <div className="lg:mt-4">
                    <h4>Bigbasket</h4>
                    <ul className="mt-3 lg:mt-0 space-y-2 text-[0.78rem] list-none">
                        <li className="no-underline">About Us</li>
                        <li className="no-underline">Become A bigbasket Rider</li>
                        <li className="no-underline">In News</li>
                        <li className="no-underline">Green bigbasket</li>
                        <li className="no-underline">Privacy Policy</li>
                        <li className="no-underline">Affiliate</li>
                        <li className="no-underline">Terms and Conditions</li>
                        <li className="no-underline">Careers At bigbasket</li>
                        <li className="no-underline">bb Instant</li>
                        <li className="no-underline">bb Daily</li>
                        <li className="no-underline">bb Blog</li>
                        <li className="pb-4 no-underline">bb now</li>
                    </ul>
                </div>
                <div className="lg:mt-4">
                    <h4>Help</h4>
                    <ul className="mt-3 lg:mt-0 space-y-2 list-none text-[0.78rem]">
                        <li className="no-underline">FAQs</li>
                        <li className="no-underline">Contact Us</li>
                        <li className="no-underline">bb Wallet FAQs</li>
                        <li className="no-underline">bb Wallet T&Cs</li>
                        <li className="no-underline">Vendor Connect</li>
                    </ul>
                </div>
                <div className="lg:mt-4">
                    <ul className="list-none">
                        <li className="no-underline">
                            <span>
                                <img src={footer} alt="" className="h-[40vh]" />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>


        </>
    );
}
