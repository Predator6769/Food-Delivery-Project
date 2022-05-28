import './App.css';
import DetCard from './Components/DetCard';
import NavBar from './Components/NavBar';
import reslogo from './Components/restaurenticon.png'
import payicon from './Components/paybycardicon.png'
import delic from './Components/deliveryicon.png'
import { useEffect, useState } from 'react';
import ProductCard from './Components/ProductCard';
// import imma from './Components/burgerimg.jpg'
// import pizza from './Components/pizza.JPG'
import Specials from './Components/Specials';
import spl1 from './Components/spl1.JPG'
import spl2 from './Components/spl2.JPG'
import spl3 from './Components/spl3.JPG'
import spl4 from './Components/spl4.JPG'
import spl5 from './Components/spl5.JPG'
import spl6 from './Components/spl6.JPG'
import spl7 from './Components/spl7.JPG'
import spl8 from './Components/spl8.JPG'
import spl9 from './Components/spl9.JPG'
import pro from './Components/product1.JPG'
import Footer from './Components/Footer';
import res2 from './Components/res2.JPG'
import res3 from './Components/res3.JPG'
import dish1 from './Components/dish1.JPG'
import dish2 from './Components/dish2.JPG'
import Signup from './Components/Signup';
import Login from './Components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FoodCart from './Components/FoodCart';
function App() {
  const [sliderstyle, setslidersyle] = useState({
    borderBottom: "5px solid gold",
    width: "15vw",
    position: "absolute",
    left: "0",
    top: "-0.2vw",
    zIndex: "2"
  });
  // const [prosinone, setprosinone] = useState(3);
  const prosinone = 3;
  const dets = [{ image: reslogo, maincap: "Choose a Restaurant", secap: "We have more than 10s of menus" }, { image: payicon, maincap: "Pay by Card or Cash", secap: "its quick ,easy and totally secure" }, { image: delic, maincap: "Delivery or Takeaway ", secap: "Are u lazy? No problem ,we have the best delivery service" }]
  function catbutclick(e) {
    var t = e * 15.5;
    setslidersyle({
      borderBottom: "5px solid gold",
      width: "15vw",
      position: "absolute",
      left: (t.toString() + "vw"),
      top: "-0.2vw",
      transition: "left 0.3s",
      zIndex: "2"
    });



  }
  const [width, setwidth] = useState(window.innerWidth);
  const sizch = () => {
    setwidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', sizch);
    return () => {
      window.removeEventListener('resize', sizch);
    }
  }, [width]);


  const restaurants = [{
    title: "CHENNAI WOODLANDS - Since 1963", image: pro, desc: "North Indian ,South Indian", rating: 3.9, deltime: "34 mins", price: 600, dishes: [["Recommended", { dishtitle: "Medu Vada(1 Pc)(serves with SAMBHAR , CHUTNEY )", dishprice: 50, nums: "serves 1", veg: true, image: dish1 },
      { dishtitle: "Ghee Roast", dishprice: 100, num: "Served with madras sambar and 2 chutney", veg: true, image: dish2 }], ["South Indian", { dishtitle: "Medu Vada(1 Pc)(serves with SAMBHAR , CHUTNEY )", dishprice: 50, nums: "serves 1", veg: true, image: dish1 }]]
  }, { title: "SS HYDERABADI SPECIAL BRIYANI", image: res2, desc: "Briyani,North Indian ,Chinese", rating: 4.3, deltime: "36 mins", price: 300 }, { title: "TASTY KITCHEN", image: res3, desc: "Briyani ,North Indian, Chinese ,South Indian", rating: 4.2, deltime: "42 mins", price: 300 }, { title: "CHENNAI WOODLANDS - Since 1963", image: pro, desc: "North Indian ,South Indian", rating: 3.9, deltime: "34 mins", price: 600 }, { title: "CHENNAI WOODLANDS - Since 1963", image: pro, desc: "North Indian ,South Indian", rating: 3.9, deltime: "34 mins", price: 600 }, { title: "CHENNAI WOODLANDS - Since 1963", image: pro, desc: "North Indian ,South Indian", rating: 3.9, deltime: "34 mins", price: 600 }];


  var restseg = [];
  for (let i = 1; i <= restaurants.length; i++)
    if (i % prosinone === 0)
      restseg.push(restaurants.slice(i - prosinone, i));

  if (restaurants.length % prosinone === 1)
    restseg.push(restaurants.slice(restaurants.length - 1, restaurants.length))
  else if (restaurants.length % prosinone === 2)
    restseg.push(restaurants.slice(restaurants.length - 2, restaurants.length))
  const offers = [{ image: spl1 }, { image: spl2 }, { image: spl3 }, { image: spl4 }, { image: spl5 }, { image: spl6 }, { image: spl7 }, { image: spl8 }, { image: spl9 }]
  // const [chosenres2, setchosenres2] = useState(false);

  // function resdishes(rt) {
  //   console.log(rt);
  //   for (let i = 0; i < restaurants.length; i++)
  //     if (restaurants[i].title === rt) { setchosenres2(i); localStorage.setItem('chosenres', i); break; }
  // }
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<>
            <NavBar />
            <p className='stt'>How it works</p>
            <div className='workingdets'>
              {
                dets.map((d, i) => (
                  <DetCard num={i + 1} img={d.image} maincap={d.maincap} secap={d.secap} />
                ))
              }
            </div>
            <Specials data={offers} />
            <p className='stt'>Our Restaurants</p>
            <div className='fder'>
              <button className='hgfe' type='button' onClick={() => catbutclick(0)}>All</button>
              <button className='hgfe' type='button' onClick={() => catbutclick(1)}>Rating</button>
              <button className='hgfe' type='button' onClick={() => catbutclick(2)}>Cost:Low to high</button>
              <button className='hgfe' type='button' onClick={() => catbutclick(3)}>Cost:High to Low</button>
              <button className='hgfe' type='button' onClick={() => catbutclick(4)}>Delivery Time</button>
            </div>
            <div className='menuwidth'><div className='botl' style={sliderstyle}></div></div>
            <div className='eatpro'>
              {
                restseg.map((e) => (
                  <ProductCard data={e} />
                ))
              }
            </div>
            <Footer /></>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/cart" element={<FoodCart/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
