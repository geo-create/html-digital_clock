const time=document.getElementById('time');
const timeFormat=document.getElementById('timeFormat');

document.addEventListener("DOMContentLoaded",()=>{
  setInterval(showTime,1000);
});


const showTime=()=>{


  let hrs=new Date().getHours();
  let mins=new Date().getMinutes();
  let secs=new Date().getSeconds();
  
  hrs=hrs<10 ? `0${hrs}` : hrs;
  mins=mins<10? `0${mins}` : mins;
  secs=secs<10? `0${secs}` : secs;

  let hrss=hrs-12;
  hrs=hrs>12 ? `0${hrss}` : hrs;

  time.innerHTML = `${hrs} : ${mins}: ${secs}`;
}
