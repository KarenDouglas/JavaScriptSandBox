// // dates & times

// const now1 = new Date();
// const before1 = new Date(' May 15 2009 1:30:55');

// // console.log(now1);
// // console.log(now1.getFullYear);


// //timestamps

// console.log('timestamp:'+ now1.getTime());

// // comparing timestamps

// //console.log('timestamp:'+ now.getTime(), before.getTime());

// const diff = now1.getTime() - before1.getTime();
// console.log(diff)


// Building a Digital Clock

const clock = document.querySelector('.clock');

const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();
    
    const html = `
    <span>${h > 12 ? h - 12: h}</span> :
    <span>${m}</span> :
    <span>${s}</span>
    `;

    clock.innerHTML = html

};

setInterval(tick, 1000);