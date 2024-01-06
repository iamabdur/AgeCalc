import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Calc.css';
import './Images'

class Calc extends Component {
  constructor(props) {
    super(props);
    //  const { size, person } = this.props;
const size = this.props.size || 0;
    const person = this.props.person || { name: '', imageId: '' };
    this.state = {
      birthdate: '',
      age: null,
      size:size,
      person:person
    };

    this.handleBirthdateChange = this.handleBirthdateChange.bind(this);
    this.calculateAge = this.calculateAge.bind(this);
  }

  handleBirthdateChange(event) {
    this.setState({ birthdate: event.target.value });
  }
   

  handleClick = () => {
    toast.info('This is an info message!');
  };
  


  calculateAge() {
    const birthdate = new Date(this.state.birthdate);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();

    if (isNaN(age) || age < 0) {
      // Display a toast for invalid birthdate
      toast.error('Invalid birthdate. Please check your input.');
      this.setState({ age: null });
      return;
    }

    // Check if the birthday hasn't occurred yet this year
    if (
      today.getMonth() < birthdate.getMonth() ||
      (today.getMonth() === birthdate.getMonth() && today.getDate() < birthdate.getDate())
    ) {
      this.setState({ age: age });
    } else {
      this.setState({ age :age+1});
    }
  }

  render() {
    // const { size, person } = this.props;
    return (
      <div>
        <h1 className='ageCal'>Age Calculator</h1>
        <div className=''>
                  <img className='avatar'
            src={'https://cdn.gencraft.com/prod/user/a784d2ea-4351-4672-b2c1-a394219572c7/cc0bca5c-9764-4b89-9d31-e10003032ef7/image/image1_0.jpg?Expires=1704627890&Signature=eO-I3XntZkKc8wN~uW1yXl3P4sItJ7INwFYX4GP9jwl56A0EZjBsbeDkTfOwzRNZ~c64IPi9JAVZSMemIGY51~pILX0GSfEd4paNoVr4YTJFjc49waJ~PQWHlg4uL8sX3XcsiguCRrzQjUglzvvdUFTBAdeOFtTI-3GBYz3lLEixWMRRUJhi4byMIQMtLuG4lCxjE2Amwrg0QuGfAmhza8LhSO--VqZUx1yIkitdCjrMAwULfThZvTvBDT8Taaf-WrHUcHcnSZ9vpYfOURar1peXkMEQRifaRN5S9kjTmGO~GMoyBXNtl0nORk-NHDNQJk-buq-WelKYe3BqS1R4bA__&Key-Pair-Id=K3RDDB1TZ8BHT8'}
            alt={'Katsuko Saruhashi'}
            width={200}
            height={200}
          />
         <img className='avatar'
            src={'https://cdn.gencraft.com/prod/user/a784d2ea-4351-4672-b2c1-a394219572c7/902a6a3e-1f7c-49fa-a869-7fbf29ee11c0/image/image1_0.jpg?Expires=1704627854&Signature=VGdMurA~nSADIFhGhAvgpGBWWJheAI-pHDhNQ9g9RrgwFP8VTrFJJsqyANw9qfDttPzzjaTCxLF6FYgSMOlwVLDmL1OS2xr0fyjOSDESoknDQvvlo55VH72i2nS0s9NzGcE3iHxphAG-q6UHXf1vw1pHbAq3~Hb~gu8U71cKqARRqAnrNPBrfi3VkkInIiRlVJJokkc6v83TY7R0THMsBQDLQql5NBb9CSvsMr3cGEOMJGteUwA8VFte~Cij6qV8ulOiHBrPOCagZzlM-jjP91yJ374OW5hLpqNJ8BntIiJ~KH25p9bTEAplbJ08OSpTA4HDy9GdyBwHP6Ouo8f0ig__&Key-Pair-Id=K3RDDB1TZ8BHT8'}
            alt={'Lin Lanying'}
            width={200}
            height={200}
          />
   <img className='avatar'
            src={'https://cdn.gencraft.com/prod/user/a784d2ea-4351-4672-b2c1-a394219572c7/a424123e-985e-411e-a26d-2c31770b25dd/image/image0_0.jpg?Expires=1704627909&Signature=dlh9mF1vat7mmmCjOlOTlPjVsD-c-tJxApBxuza~ZfZ4e04462X2vqBvKFpynvN3rX9zwcQU~eyztCaNMq1FUuyTqtHO4ZENlOVXMTCu8aahUFyrSzzNiMa5ylzXHuHTheYVcn8mVG1a0gA4u-3qyMStJmjo7~7IwnGaSYu1~7L7Tm1tkP~tpRWNk11j6O7E9B3Wsamn5XI9PGfdvsAEuCNASrkLJwyC3syuLhyoQmxRppsTqMpgo2zocGrbUq5484P5lNsNYtrCvSi4HkG-Oq8k4W50waI5ZrJutIaDBUD9gBjKWUU~evLpZq8gVbVsMnCt86DxhSrZPTqKkW6u4A__&Key-Pair-Id=K3RDDB1TZ8BHT8'}
            alt={'Lin Lanying'}
            width={200}
            height={200}
          />


        </div>


        <label >
            <h6>
                <span className='h1El'> Enter your birthdate</span></h6>
         
          <input
          className='group inPutDes'
            type="date"
            value={this.state.birthdate}
            onChange={this.handleBirthdateChange}
          />
        </label>
        <button onClick={this.calculateAge}>Calculate Age</button>
        <div>
          {this.state.age !== null && (
            <p className='result'>Your age is: {this.state.age} years old.</p>
          )}
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Calc;

