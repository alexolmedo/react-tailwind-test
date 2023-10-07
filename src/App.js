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
        <div className="max-w-screen-xl flex justify-between  mx-auto uppercase h-full text-[12px]">

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

      <div className="max-w-screen-xl mx-auto py-8">

        <div className="flex justify-between">
          <div>
            <img src="./images/icon-clarifion.png" alt="Clarifion Icon" className="h-[32px]"/>
          </div>
          <div className="flex">
            <img src="./images/icon-mc-afee.png" alt="McAfee Secure Icon" className="h-[32px] mr-6"/>
            <img src="./images/icon-norton.png" alt="Norton by Symantex Icon" className="h-[32px]"/>
          </div>
        </div>

        <div className="text-center capitalize">
          <h1 className="text-[48px]">
            Wait ! your order in progress.
          </h1>
          <p className="text-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </p>
        </div>

        <div className="flex justify-between py-12 text-[20px]">

          <div className="flex items-center">
            <img className="h-[20px] lg:h-[40px]" src="./images/step-1.png" alt=""/>
            <p className="lg:ml-4">
              <span>Step 1 : </span>Cart Review
            </p>
          </div>

          <div className="flex items-center">
            <img className="h-[20px] lg:h-[40px]" src="./images/step-2.png" alt=""/>
            <p className="lg:ml-4">
              <span>Step 2 : </span>Checkout
            </p>
          </div>

          <div className="flex items-center">
            <img className="h-[20px] lg:h-[40px]" src="./images/step-3.png" alt=""/>
            <p className="lg:ml-4 font-bold">
              <span>Step 3 : </span>Special Offer
            </p>
          </div>

          <div className="flex items-center">
            <img className="h-[20px] lg:h-[40px]" src="./images/step-4.png" alt=""/>
            <p className="lg:ml-4">
              <span>Step 4 : </span>Confirmation
            </p>
          </div>

        </div>

        <div className="bg-gray-background p-10 rounded-xl">
          <div className="flex">
            <div className="w-1/2">
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

                <div>
                  “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I
                  went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better.
                  Wonderful.”
                </div>
              </div>

            </div>

            <div className="w-1/2 pl-10">

              <div className="text-[32px]">
                <span className="text-blue-highlight">ONE TIME ONLY</span> special price for 6 extra Clarifion for
                only <span className="text-blue-highlight">$14 each</span> ($84.00 total!)
              </div>

              <div className="flex mt-5 items-center">
                <img className="h-[134px]" src="./images/icon-clarifion-air-purifier.png" alt=""/>

                <div className="grow pl-6">

                  <div className="flex justify-between items-center pb-1">
                    <div className="text-[20px]">
                      Clarifion Air Ionizer
                    </div>
                    <div className="flex items-center">
                      <span className="text-[16px] text-gray-crossed line-through mr-2">
                        $180
                      </span>
                      <span className="text-[22px] text-blue-highlight font-semibold">
                        $84
                      </span>
                    </div>
                  </div>

                  <div>
                    <img className="h-[18px]" src="./images/icon-stars.png" alt=""/>
                  </div>

                  <div className="flex items-center py-2">
                    <img className="h-[16px] hover:cursor-pointer" src="./images/radio-button.png" alt=""/>
                    <div className="ml-4 text-black-stock">
                      12 left in Stock
                    </div>
                  </div>

                  <div className="text-black-copy">
                    Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a
                    simple.
                  </div>
                </div>

              </div>

              <div className="mt-8">
                <div className="flex items-center">
                  <img className="h-[22px]" src="./images/tick-mark.png" alt=""/>
                  <div className="ml-4">
                    Negative Ion Technology may <span className="font-bold">help with allergens</span>
                  </div>
                </div>

                <div className="flex items-center py-5">
                  <img className="h-[22px]" src="./images/tick-mark.png" alt=""/>
                  <div className="ml-4">
                    Designed for <span className="font-bold">air rejuvenation</span>
                  </div>
                </div>

                <div className="flex items-center">
                  <img className="h-[22px]" src="./images/tick-mark.png" alt=""/>
                  <div className="ml-4">
                    <span className="font-bold">Perfect for every room</span> in all types of places.
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-light-blue-background flex p-4 my-8">
                <img className="h-[24px]" src="./images/icon-percentage.png" alt=""/>
                <div className="ml-4">
                  Save <span className="text-blue-highlight">53%</span> and get <span className="text-blue-highlight">6 extra Clarifision</span> for
                  only <span className="text-blue-highlight">$14 Each</span>.
                </div>
              </div>

              <div
                className="bg-green-claim rounded-full h-[59px] flex items-center justify-center text-white uppercase hover:cursor-pointer">
                <div className="font-bold text-[20px]">
                  Yes - Claim my discount
                </div>
                <img className="ml-3 w-[16px]" src="./images/icon-arrow.svg" alt=""/>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
