import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="bg-gray-custom text-white h-[50px]">
        <div className="max-w-screen-xl flex justify-around mx-auto uppercase h-full text-[12px]">
          <div className="flex items-center">
            <img src="/images/nav-1.svg" alt="Description" className="mr-2"></img>
            <p>30-DAY SATISFACTION GUARANTEE</p>
          </div>
          <div className="flex items-center">
            <img src="/images/nav-2.svg" alt="Description" className="mr-2"></img>
            <p>Free delivery on orders over $40.00</p>
          </div>
          <div className="flex items-center">
            <img src="/images/nav-3.svg" alt="Description" className="mr-2"></img>
            <p>50.000+ HAPPY CUSTOMERS</p>
          </div>
          <div className="flex items-center">
            <img src="/images/nav-4.svg" alt="Description" className="mr-2"></img>
            <p>100% Money Back Guarantee</p>
          </div>

        </div>
      </nav>
    </div>
  );
}

export default App;
