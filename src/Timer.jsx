import React from 'react'
import './Timer.css';

class Timer extends React.Component {
  
  constructor(props) {
    super(props)
    console.log(props.f)
    this.mainHeadline = props.formData.mainHeadline
    this.secondHeadline = props.formData.secondHeadline
    this.subText = props.formData.subText
    this.btnText = props.formData.btnText
    this.dateTime = props.formData.dateTime
    this.bckGround = props.formData.bckGround


    this.timerDays = '00'
    this.timerHours = '00'
    this.timerMinutes = '00'
    this.timerSeconds = '00'
    console.log( this.timerSeconds)
   
  }


  // componentDidMount() {
   
  //   setTimer()
  // }

  
  render() {
    let backGround
    (this.bckGround === "Two") ? backGround = './backGround2.jpg' : backGround = './backGround1.jpg'
   
   
   let dateTime, timerDays,timerHours,timerMinutes,timerSeconds
    dateTime = this.dateTime
   function setTimer() {
    let countdownDate = new Date(dateTime).getTime()
    let interval = setInterval( function() {
      let now = new Date().getTime();
      let distance = countdownDate - now;
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(interval)
      } else {
       
        timerDays = days
        timerHours = hours
        timerMinutes = minutes
        timerSeconds = seconds
       
      }
    }, 1000) 
   }
   setTimer()
   this.timerDays = timerDays
   this.timerHours = timerHours
   this.timerMinutes = timerMinutes
   this.timerSeconds = timerSeconds
    return (
    
      <div className="timer-container" style={{ backgroundImage: `url(${backGround})` }}>
        <section className="container" >
          <section className='Headings'>
            <div className='H1'> {this.mainHeadline} </div>
            <div className='H2'> {this.secondHeadline}  </div>
            <div className='H3'> {this.subText} </div>
          </section>
          <section className="Timer">
            <div className='Days'>
              <p>{this.timerDays}</p>
              <p><small>Days</small></p>
            </div>
            <div className='Hours'>
              <p>{this.timerHours}</p>
              <p><small>Hours</small></p>
            </div>
            <div className='Minutes'>
              <p>{this.timerMinutes}</p>
              <p><small>Minutes</small></p>
            </div>
            <div className='Seconds'>
              <p>{this.timerSeconds}</p>
              <p><small>Seconds</small></p>
            </div>

          </section>
          <button className="btn"> {this.btnText} </button>
        </section>

      </div>

    );
  }
}

export default Timer;