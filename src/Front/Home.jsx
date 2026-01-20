import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineArrowLeft } from "react-icons/md";
import { MdOutlineArrowRight } from "react-icons/md";
const FrontPage = () => {
  return (
    <>
          <div className='frontpage'>

        <div className='logo'>
            <img src="./logo.jpg" alt="" />
            <h2>Swiggy</h2>
        </div>
        <div className='menu'>
            <ul>
                <li>Swiggy Corporate</li>
                <li>Partner with us</li>
               
            </ul>
            
                 <div className='app'>
                <h5>Get the App</h5>
                <MdArrowOutward style={{width:"30px"}} />
                </div>
           
             <div className='signin'>
                <h5>Sign in</h5>
                </div>
        </div>
        <div className='bag'>
        <img src="./veg.png" alt="" />
        </div>
        <div className='heading'>
            <h1>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
        </div>
        
       <select name="dropdown" id="drop">
       <img src="./location" alt="" />
        <option>   Enter your  delivery location</option>

       </select>
       <div className='searchbar'>
        <input  type="text" placeholder='Search for restaurant, item or more' />
        <IoIosSearch className='search' />

       </div>
            <div className='snacks'>
        <img src="./noodles.png" alt="" />
        </div>
       <div className='cards'>
            <div className='delivery'> 
                <br />
                <h2 style={{fontWeight:"bold", marginLeft:"20px"}}>FOOD DELIVERY</h2><br />
                <h3 style={{marginLeft:"20px", color:"gray"}}>FROM RESTAURANTS</h3> <br />
                <h4 style={{marginLeft:"20px", backgroundColor:"lightpink", borderRadius:"10px", width:"130px", padding:"6px", color:"orangered"}}>UPTO 60% OFF</h4>
                <FaArrowRight style={{color:"white", backgroundColor:"orangered", borderRadius:"50%", width:"30px", height:"30px", padding:"5px", marginLeft:"20px",marginTop:"40px"}}/>
                <img src="./brk.png" alt="" />
            </div>
            <div className='instamart'>
                 <br />
                <h2 style={{fontWeight:"bold", marginLeft:"20px"}}>INSTAMART</h2><br />
                <h3 style={{marginLeft:"20px", color:"gray"}}>INSTANT GROCERY</h3> <br />
                <h4 style={{marginLeft:"20px", backgroundColor:"lightpink", borderRadius:"10px", width:"130px", padding:"6px", color:"orangered"}}>UPTO 60% OFF</h4>
                <FaArrowRight style={{color:"white", backgroundColor:"orangered", borderRadius:"50%", width:"30px", height:"30px", padding:"5px", marginLeft:"20px",marginTop:"40px"}}/>
                <img src="./instasmart.png" alt="" />
            </div>
            <div className='dineout'>
                <br />
                <h2 style={{fontWeight:"bold", marginLeft:"20px"}}>DINE OUT</h2><br />
                <h3 style={{marginLeft:"20px", color:"gray"}}>EAT OUT & SAVE MORE</h3> <br />
                <h4 style={{marginLeft:"20px", backgroundColor:"lightpink", borderRadius:"10px", width:"130px", padding:"6px", color:"orangered"}}>UPTO 50% OFF</h4>
                <FaArrowRight style={{color:"white", backgroundColor:"orangered", borderRadius:"50%", width:"30px", height:"30px", padding:"5px", marginLeft:"20px",marginTop:"40px"}}/>
                <img src="./dineout.png" alt="" />
            </div>


       </div>
       <div className='lastline'>
        <MdOutlineArrowLeft />
            <MdOutlineArrowRight style={{marginLeft:"1040"}}/>
       </div>
       
      </div>
      <div className='middlepage'>
            <h2>Order our best food options</h2> <br />
        <div className='bestfood'>
        <div className='food'>
            <img src="./dosa.png" alt="" /> 
            <label htmlFor="">Dosa</label>
        </div>  
        <div className='food'>
            <img src="./idli.png" alt="" />
            <label htmlFor="">Idli</label>
        </div>    
        <div className='food'>
            <img src="./vada.png" alt="" />
            <label htmlFor="">Vada</label>
        </div>    
        <div className='food'>
            <img src="./poori.png" alt="" />
            <label htmlFor="">Poori</label>
        </div>    
        <div className='food'>
            <img src="./upma.png" alt="" />
            <label htmlFor="">Upma</label>
        </div>    
        <div className='food'>
            <img src="./biriyani.png" alt="" />
            <label htmlFor="">Biryani</label>
        </div>    
        <div className='food'>
            <img src="./paratha.png" alt="" />
            <label htmlFor="">Paratha</label>
        </div>    
        <div className='food'>
            <img src="./bonda.png" alt="" />
            <label htmlFor="">Bonda</label>
        </div>    
        <div className='food'>
            <img src="./juice.png" alt="" />
            <label htmlFor="">Juice</label>
        </div>    
        <div className='food'>
            <img src="./salad.png" alt="" />
            <label htmlFor="">Salad</label>
        </div>    
        <div className='food'>
            <img src="./chole.png" alt="" />
            <label htmlFor="">Chole Bhature</label>
        </div>    
        <div className='food'>
            <img src="./pesara.png" alt="" />
            <label htmlFor="">Pesarattu</label>
        </div>      
        
        </div>
      
    </div>
    </>
    
  )
}

export default FrontPage
