import React, {useState} from 'react';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {img: "./images/nav-1.svg", text: "30-DAY SATISFACTION GUARANTEE"},
    {img: "./images/nav-2.svg", text: "Free delivery on orders over $40.00"},
    {img: "./images/nav-3.svg", text: "50.000+ HAPPY CUSTOMERS"},
    {img: "./images/nav-4.svg", text: "100% Money Back Guarantee"}
  ];

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div className="App">
      <nav className="bg-gray-custom text-white h-[50px]">
        <div className="max-w-screen-xl flex justify-between mx-auto uppercase h-full text-[12px]">

          {/* Arrows (visible on mobile) */}
          <div onClick={prevItem} className="lg:hidden flex items-center ml-3">
            <img src="./images/arrow-left.svg" alt=""/>
          </div>

          {items.map((item, index) => (
            <div key={index} className={`flex items-center ${index !== currentIndex ? 'hidden lg:flex' : 'flex'}`}>
              <img src={item.img} alt="Description" className="mr-2"/>
              <p>{item.text}</p>
            </div>
          ))}

          {/* Arrows (visible on mobile) */}
          <div onClick={nextItem} className="lg:hidden flex items-center mr-3">
            <img src="./images/arrow-right.svg" alt=""/>
          </div>

        </div>
      </nav>

      <div className="max-w-screen-xl mx-auto bg-gray-background lg:bg-white">

        <div className="flex justify-between bg-white p-5">
          <div>
            <img src="./images/icon-clarifion.png" alt="Clarifion Icon" className="h-[20px] lg:h-[32px]"/>
          </div>
          <div className="flex">
            <img src="./images/icon-mc-afee.png" alt="McAfee Secure Icon" className="h-[16px] lg:h-[32px] mr-6"/>
            <img src="./images/icon-norton.png" alt="Norton by Symantex Icon" className="h-[16px] lg:h-[32px]"/>
          </div>
        </div>

        <div className="p-8 px-6 lg:pt-0 lg:pb-12 lg:px-0">

          <div className="text-center capitalize">
            <h1 className="text-[32px] lg:text-[48px]">
              Wait ! your order in progress.
            </h1>
            <p className="text-[16px] lg:text-[24px] pt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing
            </p>
          </div>

          <div className="flex justify-between py-4 lg:py-12 text-[12px] lg:text-[20px] text-center lg:text-left">

            <div className="flex flex-col lg:flex-row items-center">
              <img className="h-[20px] lg:h-[40px]" src="./images/step-1.png" alt=""/>
              <p className="lg:ml-4">
                <span className="hidden lg:inline">Step 1 : </span>Cart Review
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center">
              <img className="h-[20px] lg:h-[40px]" src="./images/step-2.png" alt=""/>
              <p className="lg:ml-4">
                <span className="hidden lg:inline">Step 2 : </span>Checkout
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center">
              <img className="h-[20px] lg:h-[40px]" src="./images/step-3.png" alt=""/>
              <p className="lg:ml-4 font-bold">
                <span className="hidden lg:inline">Step 3 : </span>Special Offer
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center">
              <img className="h-[20px] lg:h-[40px]" src="./images/step-4.png" alt=""/>
              <p className="lg:ml-4">
                <span className="hidden lg:inline">Step 4 : </span>Confirmation
              </p>
            </div>

          </div>

          <div className="bg-gray-background lg:p-10 rounded-xl">
            <div className="flex flex-wrap">
              <div className="hidden lg:block w-full lg:w-1/2">
                <div>
                  <img src="./images/satisfaction_guarantee.png" alt=""/>
                </div>

                <div className="bg-white p-6 mt-6 rounded-xl">

                  <div className="flex items-center">
                    <img className="h-[48px]" src="./images/pic-review.png" alt=""/>
                    <div className="ml-4">
                      <img className="h-[12px]" src="./images/icon-stars.png" alt=""/>
                      <div className="flex items-center mt-1">
                        <div className="font-bold font text-[14px]">
                          Ken T.
                        </div>
                        <img className="h-[16px] mx-3" src="./images/icon-verified.png" alt=""/>
                        <div className="text-green-verified text-[12px]">
                          Verified Customer
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3">
                    “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I
                    went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe
                    better.
                    Wonderful.”
                  </div>
                </div>

              </div>

              <div className="w-full lg:w-1/2 lg:pl-10">

                <div className="text-center lg:text-left text-[24px] lg:text-[32px]">
                  <span className="text-blue-highlight">ONE TIME ONLY</span> special price for 6 extra Clarifion for
                  only <span className="text-blue-highlight">$14 each</span> ($84.00 total!)
                </div>

                <div className="flex mt-5 items-center">
                  <img className=" h-[80px] lg:h-[134px]" src="./images/icon-clarifion-air-purifier.png" alt=""/>

                  <div className="grow pl-6">

                    <div className="flex justify-between items-center pb-1">
                      <div className="text-[14px] lg:text-[20px]">
                        Clarifion Air Ionizer
                      </div>
                      <div className="flex items-center">
                      <span className="text-[10px] lg:text-[16px] text-gray-crossed line-through mr-2">
                        $180
                      </span>
                        <span className="text-[14px] lg:text-[22px] text-blue-highlight font-semibold">
                        $84
                      </span>
                      </div>
                    </div>

                    <div>
                      <img className="h-[12px] lg:h-[18px]" src="./images/icon-stars.png" alt=""/>
                    </div>

                    <div className="flex items-center pt-2">
                      <img className="h-[12px] lg:h-[16px] hover:cursor-pointer" src="./images/radio-button.png"
                           alt=""/>
                      <div className="ml-4 text-black-stock text-[12px] lg:text-[16px]">
                        12 left in Stock
                      </div>
                    </div>

                    <div className="text-black-copy hidden lg:block pt-2">
                      Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a
                      simple.
                    </div>
                  </div>

                </div>

                <div className="text-black-copy text-center text-[12px] pt-4 lg:hidden">
                  Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a
                  simple.
                </div>

                <div className="mt-6 text-[12px] lg:text-[16px]">
                  <div className="flex items-center">
                    <img className="h-[16px] lg:h-[22px]" src="./images/tick-mark.png" alt=""/>
                    <div className="ml-4">
                      Negative Ion Technology may <span className="font-bold">help with allergens</span>
                    </div>
                  </div>

                  <div className="flex items-center py-5">
                    <img className="h-[16px] lg:h-[22px]" src="./images/tick-mark.png" alt=""/>
                    <div className="ml-4">
                      Designed for <span className="font-bold">air rejuvenation</span>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <img className="h-[16px] lg:h-[22px]" src="./images/tick-mark.png" alt=""/>
                    <div className="ml-4">
                      <span className="font-bold">Perfect for every room</span> in all types of places.
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-light-blue-background flex p-4 my-6 items-center">
                  <img className="h-[24px] lg:h-[32px]" src="./images/icon-percentage.png" alt=""/>
                  <div className="ml-4 text-[14px] lg:text-[16px]">
                    Save <span className="text-blue-highlight">53%</span> and get <span className="text-blue-highlight">6 extra Clarifision</span> for
                    only <span className="text-blue-highlight">$14 Each</span>.
                  </div>
                </div>

                <div
                  className="bg-green-claim rounded-full h-[51px] lg:h-[59px] flex items-center justify-center text-white uppercase hover:cursor-pointer hover:opacity-90">
                  <div className="font-bold text-[14px] lg:text-[20px]">
                    Yes - Claim my discount
                  </div>
                  <img className="ml-3 w-[16px]" src="./images/icon-arrow.svg" alt=""/>
                </div>

                <div
                  className="mt-4 border rounded flex flex-wrap justify-evenly lg:justify-between items-center h-[71px] lg:h-[33px] text-[12px] px-4 py-1 lg:py-0">
                  <div>
                    Free shipping
                  </div>

                  <img className="h-[16px]" src="./images/vertical-line-gray.png" alt=""/>

                  <div className="flex items-center">
                    <img className="h-[12px]" src="./images/icon-lock-gray.png" alt=""/>
                    <div className="pl-3">
                      Secure 256-bit SSL encryption.
                    </div>
                  </div>

                  <img className="h-[16px] hidden lg:block" src="./images/vertical-line-gray.png" alt=""/>

                  <div className="flex w-full lg:hidden">
                    <img className="w-full" src="./images/horizontal-line-gray.png" alt=""/>
                  </div>

                  <div className="flex w-full lg:w-auto justify-center">
                    <img className="h-[14px]" src="./images/icon-cards.png" alt=""/>
                  </div>
                </div>

                <div
                  className="text-red-warning uppercase text-center text-[12px] lg:text-[18px] my-5 underline hover:cursor-pointer">
                  No thanks, I don’t want this.
                </div>

                <div className="flex items-center">
                  <img src="./images/icon-satisfaction-guarantee.png" alt="Satisfaction 100% Guarantee"
                       className="h-[48px] lg:h-[88px]"/>
                  <div className="pl-6 text-[12px] lg:text-[16px]">
                    If you are not completely thrilled with your Clarifion - We have a <span className="font-bold">30 day satisfaction guarantee</span>.
                    Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>

      <footer className="bg-gray-custom text-white h-[100px] lg:h-[88px] text-[12px] lg:text-[16px] py-3 lg:py-0">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center h-full">
          <div className="flex w-full lg:w-auto items-center justify-center">
            <div>
              Copyright (c) 2023
            </div>
            <img className="h-[24px] mx-4" src="./images/vertical-line.png" alt=""/>
            <div>
              Clarifionsupport@clarifion.com
            </div>
          </div>
          <div className="flex w-full lg:w-auto items-center justify-center">
            <img className="h-[16px]" src="./images/icon-encryption.png" alt=""/>
            <div className="ml-3">
              Secure 256-bit SSL encryption.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
