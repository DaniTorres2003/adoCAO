const carrosel = document.getElementById('carrosel');
const image1 = document.getElementById('image_1');
const image2 = document.getElementById('image_2');
const image3 = document.getElementById('image_3');
const buttonRight = document.getElementById('button_right');
const buttonLeft = document.getElementById('button_left');
console.log(image2.style.padding)

let i = 2

buttonRight.addEventListener('click', () => {
  if(i == 2) {
    image3.style.transform = 'translateX(0)';
    image3.style.left = '20%';
    image3.style.zIndex = '2';

    image2.style.transform = 'translateX(-100%)';
    image2.style.left = '0';
    image2.style.zIndex = '1';

    image1.style.transform = 'translateX(100%)';
    image1.style.zIndex = '1';

    i = 3;
  } else if(i == 3) {
    image1.style.transform = 'translateX(0)';
    image1.style.left = '20%';
    image1.style.zIndex = '2';

    image3.style.transform = 'translateX(-100%)';
    image3.style.left = '0';
    image3.style.zIndex = '1';

    image2.style.transform = 'translateX(100%)';
    image2.style.zIndex = '1';

    i = 1;
  } else if(i == 1) {
    image2.style.transform = 'translateX(0)';
    image2.style.left = '20%';
    image2.style.zIndex = '2';

    image1.style.transform = 'translateX(-100%)';
    image1.style.left = '0';
    image1.style.zIndex = '1';

    image3.style.transform = 'translateX(100%)';
    image3.style.zIndex = '1';

    i = 2;
  }
});

buttonLeft.addEventListener('click', () => {
  if(i == 2) {
    image3.style.transform = 'translateX(0)';
    image3.style.left = '20%';
    image3.style.zIndex = '2';

    image2.style.transform = 'translateX(-100%)';
    image2.style.left = '0';
    image2.style.zIndex = '1';

    image1.style.transform = 'translateX(100%)';
    image1.style.zIndex = '1';

    i = 3;
  } else if(i == 3) {
    image1.style.transform = 'translateX(0)';
    image1.style.left = '20%';
    image1.style.zIndex = '2';

    image3.style.transform = 'translateX(-100%)';
    image3.style.left = '0';
    image3.style.zIndex = '1';

    image2.style.transform = 'translateX(100%)';
    image2.style.zIndex = '1';

    i = 1;
  } else if(i == 1) {
    image2.style.transform = 'translateX(0)';
    image2.style.left = '20%';
    image2.style.zIndex = '2';

    image1.style.transform = 'translateX(-100%)';
    image1.style.left = '0';
    image1.style.zIndex = '1';

    image3.style.transform = 'translateX(100%)';
    image3.style.zIndex = '1';

    i = 2;
  }
})
