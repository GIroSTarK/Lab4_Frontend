const fourthElement = document.getElementById('fourthElement');
const fifthElement = document.querySelector('#fifthElement');
let isActiveFourthElement = false;
let isActiveFifthElement = false;

const toggleColor = (element, isActive, backgroundColor, color) => {
  if (!window[isActive]) {
    element.style.backgroundColor = backgroundColor;
    element.style.color = color;
    window[isActive] = true;
  } else {
    const currentBackgroundColor = fourthElement.style.backgroundColor;
    const currentColor = fourthElement.style.color;
    fourthElement.style.backgroundColor = fifthElement.style.backgroundColor;
    fourthElement.style.color = fifthElement.style.color;
    fifthElement.style.backgroundColor = currentBackgroundColor;
    fifthElement.style.color = currentColor;
  }
};

fourthElement.addEventListener('click', () => {
  toggleColor(fourthElement, 'isActiveFourthElement', 'red', 'white');
});
fifthElement.addEventListener('click', () =>
  toggleColor(fifthElement, 'isActiveFifthElement', 'blue', 'white')
);

const imageBlock = document.getElementById('images');
const image = document.querySelector('.image');
image.style.width = '800px';
image.style.height = '600px';
const addButton = document.getElementById('addBtn');
const zoomInButton = document.getElementById('zoomInBtn');
const zoomOutButton = document.getElementById('zoomOutBtn');
const deleteButton = document.getElementById('deleteBtn');

addButton.addEventListener('click', () => {
  const newImage = image.cloneNode(true);
  imageBlock.appendChild(newImage);
});

zoomInButton.addEventListener('click', () => {
  const images = document.querySelectorAll('.image');

  for (const image of images) {
    const currentWidth = parseInt(image.style.width);
    const currentHeight = parseInt(image.style.height);
    image.style.width = currentWidth + 50 + 'px';
    image.style.height = currentHeight + 50 + 'px';
  }
});

zoomOutButton.addEventListener('click', () => {
  const images = document.querySelectorAll('.image');

  for (const image of images) {
    const currentWidth = parseInt(image.style.width);
    const currentHeight = parseInt(image.style.height);
    image.style.width = currentWidth - 50 + 'px';
    image.style.height = currentHeight - 50 + 'px';
  }
});

deleteButton.addEventListener('click', () => {
  const images = imageBlock.querySelectorAll('.image');
  if (images.length > 0) {
    imageBlock.removeChild(images[images.length - 1]);
  }
});
