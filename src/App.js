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

        <div className="bg-gray-200 p-8 rounded-xl">
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
            <div className="w-1/2 bg-blue-300 p-4">
              Right half
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
