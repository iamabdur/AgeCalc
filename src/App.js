import React,{useState,useEffect} from 'react'
import Loader from './loader'
import Calc from './Components/Calc';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Components/Calc.css'


function App() {





  useEffect(() => {
    // Check if the code is running on the client side before triggering the toast
    if (typeof window !== 'undefined') {
      toast.info('Welcome! Enter your birthdate to calculate your age.');
    }
  }, [0]);
   const [isLoading, setIsLoading] = useState(true);

    
    setTimeout(() => {
        setIsLoading(false);
    },3000);
    return (
        <div
            style={{
                textAlign: "center",
                margin: "auto",
            }}
        >{
          isLoading ?
          <h1 style={{ color: "blue",
          transition: "font-size 1s ease-in-out"
          
          }}>
                👉😉Hey.. There.!😂🔥 "Welcome To Age Calculator"🎉 👇 
            </h1>:
            ''
        }
            
            {isLoading ? (
                <div
                    style={{
                        width: "100px",
                        margin: "auto",
                    }}
                >
                    <Loader />
                </div>
            ) : (
                <div>
                  
                  <h1 > 😎
                  <span className='Header'> Manipulate Your Age Dude</span>
                  😎  </h1>
                    <Calc/>
                </div>
            )}
        </div>
    );
}

export default App