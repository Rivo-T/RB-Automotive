let Scrollbar = window.Scrollbar;

var options = {
'damping': 0.042,
}

Scrollbar.init(document.querySelector('body'), options);


const allHoverImages = document.querySelectorAll('.hover-container div img')
const imgContainer = document.querySelector('.img-container')

window.addEventListener('DOMContentLoaded', () => {
    allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
    image.addEventListener('mouseover' , () => {
    imgContainer.querySelector('img').src = image.src;
    })
})


//alleen de scripts zijn gedownload (logisch ook)