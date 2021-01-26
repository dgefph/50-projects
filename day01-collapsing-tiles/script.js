//Notes from udemy 50proj-50days
//Pseudo: all we are doing is adding the class of .active through JS

// querySelector would only allow for FIRST panel to be selected, whereas QSA allows for each .panel to be stored like an array
const panels = document.querySelectorAll('.panel')  

//.forEach method determines function application to every piece of the ARRAY not the declaration of panel

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}