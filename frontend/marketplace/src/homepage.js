import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './navbar';
import './homepage.css'
import HotItems from './products';
import DiscountedItems from './discountproduct';
import Feedback from './feedback';

function Homepage() {
    return (
        <div >
            <div>
                <img style={{width: 1263, height: 500}} src="https://topcareer.id/wp-content/uploads/2019/10/cropped-Coffeeshop-Tips-Cover.jpg"></img>
                <h1 className='header'>Welcome to XOCoffee</h1>
                <h2 className='header'>Jl. XXX, Kelapa Gading, Jakarta, Indonesia</h2>
                <h3 className='header'>Weekdays: 9am-9pm, Weekend: 9am-10pm</h3>
            </div>
            <div className='contactus'>
                <h2 className='contactus'>Contact Us</h2>
                <div className='flex-container'>
                    <div>
                        <img style={{width: 80, height: 80}} src='https://cdn-icons-png.flaticon.com/512/597/597177.png'></img>
                        <p>(021)XXXXXX</p>
                    </div>
                    <div>
                        <img style={{width: 80, height: 80}} src='https://cdn-icons-png.flaticon.com/512/1384/1384031.png'></img>
                        <p>@xocoffee</p>
                    </div>
                    <div>
                        <img style={{width: 80, height: 80}} src='https://cdn-icons-png.flaticon.com/512/2111/2111774.png'></img>
                        <p>081XXXXXXX</p>
                    </div>
                    
                </div>
            </div>
            <>
                <div className='imglist'>
                    <h1>Hot Items!</h1>
                    <HotItems/>
                </div> 
                <div className='imglist'>
                    <h1>Discounted Items!</h1>
                    <DiscountedItems/>
                </div> 
                <div>
                    <Feedback/>
                </div>
            </>
        </div>
        
        
    )
}

export default Homepage;