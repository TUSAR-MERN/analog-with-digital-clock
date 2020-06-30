// Initialize Some Variable
const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

// Analog Clock Handler
setInterval(() => {
    let time = new Date();
    let hh = time.getHours() * 30;
    let mm = time.getMinutes() * deg;
    let ss = time.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;    
});

// Digital Clock Handler
setInterval(() => {
    let hour = document.querySelector('#hour');
    let minutes = document.querySelector('#miniutes');
    let seconds = document.querySelector('#seconds');
    let ampm = document.querySelector('#ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = "AM";

    h = (h < 10) ? '0'+ h : h;
    m = (m < 10) ? '0'+ m : m;
    s = (s < 10) ? '0'+ s : s;

    if (h > 12) {
        h = ((h = h - 12) == 0) ? 12 : (h = h - 12);
        am = 'PM'
    } else {
        h = h;
        am = 'AM'
    }

    hour.innerHTML = h + ':';
    minutes.innerHTML = m + ':';
    seconds.innerHTML = s + '&nbsp';   
    ampm.innerHTML = am;
});
