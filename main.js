const soat = new Date().getHours();

let ishSoati;

if (soat >= 8 && soat <= 23) {
  ishSoati = true;
} else {
  ishSoati = false;
}

// let byurtma = (time, work) => {
//   return new Promise((res, rej) => {
//     if (ishSoati) {
//       setTimeout(() => {
//         res(work());
//       }, time);
//     } else {
//       rej(console.log("Ish vaqti tugadi"));
//     }
//   });
// };

// byurtma(1000, () => console.log('Byurtma olindi'))
// .then(() =>{
//     return byurtma(1000, () => console.log('Musqaymoq idishga solindi'))
// })
// .then(() =>{
//     return byurtma(1000, () => console.log('Mevalar kesildi'))
// })
// .then(() =>{
//     return byurtma(1000, () => console.log('Musqaymoqni mevabilan bezatildi'))
// })
// .then(() =>{
//     return byurtma(1000, () => console.log('Mijozga berildi'))
// })

// Vazifa bajarish tartibi

let vazifa = (time, work) => {
  return new Promise((res, rej) => {
    if (soat > 3) {
      setTimeout(() => {
        res(work());
      }, time);
    } else {
      rej(console.log("Vazifa topshirish vaqti tugadi"));
    }
  });
};

vazifa(1000, () => console.log("Kampyuterni yoqdim"))
.then(() =>vazifa(1000, () => console.log('VS code ga kirdim')))
.then(() =>vazifa(1000, () => console.log('Kerakli Fayllarni ochdim')))
.then(() =>vazifa(1000, () => console.log('kerakli ko`dlarni yozdim')))
.then(() =>vazifa(1000, () => console.log('GitHupga joyladim')))
.then(() =>vazifa(1000, () => console.log('Vazifani jo`nattim')))
