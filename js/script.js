let h = document.querySelector('.h')
let m = document.querySelector('.m')
let s = document.querySelector('.s')

let hours = document.querySelector('.hours')
let minutes = document.querySelector('.minutes')

// console.log(h,m,s,hours,minutes);

// let x = 0;

// function rec() {
//     console.log(x);
//     let = 0;

//     if (x == 60) {
//         clearInterval(a)
//     }else if (x < 1000) {
//         x++;
//         a =setTimeout(() => {
//             rec()
//         }, 100);
//     }
//   }
//   rec()

function clock() {
    const time = new Date();

    let hourArrow = time.getHours()
    let minArrow = time.getMinutes()
    let secArrow = time.getSeconds()

    h.style.transform = `rotate(${hourArrow * 30}deg)`
    h.style.transform = `rotate(${minArrow * 6}deg)`
    h.style.transform = `rotate(${secArrow * 6}deg)`

    setTimeout(() => {
        clock()
    }, 1000);

    hours.innerHTML = hourArrow < 10 ? '0' + hourArrow : hourArrow
    minutes.innerHTML = minArrow < 10 ? '0' + minArrow : minArrow

}
clock()


let tabsItem = document.querySelectorAll('.tabsItem')
let tabsContentItem = document.querySelectorAll('.tabsContentItem')


for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        // tabsItem[i].classList.add('active')
        
        for (let k = 0; k < tabsItem.length; k++) {
            tabsItem[k].classList.remove('active')  
            tabsContentItem[k].classList.remove('active')  
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    
    })
}


let hour = document.querySelector('.stopwatch__hours')
let min = document.querySelector('.stopwatch__minutes')
let sec = document.querySelector('.stopwatch__seconds')

let btn = document.querySelector('.stopwatch__btn')
let lamp = document.querySelector('.tabsLink__span')
let timer

btn.addEventListener('click', function () {
    if (btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        watch()
        lamp.classList.add('active')
    }else if (btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        lamp.classList.remove('active')
        lamp.classList.add('active_clear')
        clearInterval(timer)
    }else if (btn.innerHTML == 'clear') {
        btn.innerHTML = 'start'
        lamp.classList.remove('active_clear')
        hour.innerHTML = 0
        min.innerHTML = 0
        sec.innerHTML = 0
    }
  })


  function watch() {
      sec.innerHTML++
      if (sec.innerHTML > 59) {
          sec.innerHTML = 0 
          min.innerHTML++

          if ( min.innerHTML > 59) {
            min.innerHTML = 0
            hour.innerHTML++
          }
      }
    timer = setTimeout(() => {
        watch()
    }, 100);

  }


/* console.log(stopwatch__hours,stopwatch__minutes,stopwatch__seconds,stopwatch__btn); */


    




