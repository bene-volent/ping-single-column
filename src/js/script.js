const form = document.querySelector('form')
const submitButton = document.querySelector(".form__button")

form.sub.addEventListener("invalid", (even) => {
    event.preventDefault()
})

submitButton.addEventListener("mouseenter",()=>{
    if (!form.sub.validity.valid){
        submitButton.style.setProperty("cursor","not-allowed")
    }
    
})
submitButton.addEventListener("mouseleave",()=>{
    submitButton.style.setProperty("cursor","pointer")
})

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const email = form.sub.value
    const data = { email }
    // console.log(data)
    alert("Thank you for subscribing!\n We will contact you soon.")
})