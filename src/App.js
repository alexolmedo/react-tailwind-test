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

      </div>
    </div>
  );
}

export default App;
