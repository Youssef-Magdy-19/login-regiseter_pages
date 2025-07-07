const container = document.querySelector(".container")
const SignUpBtn = document.querySelector('.SignUp')
const SignInBtn = document.querySelector('.SignIn')

SignUpBtn.addEventListener('click', () => {
    container.classList.add('active')
})
SignInBtn.addEventListener('click', () => {
    container.classList.remove('active')
})




const register = () => {
    let users = JSON.parse(localStorage.getItem('users')) ?? []
    const name = document.querySelector('.name-signUp').value.trim()
    const email = document.querySelector('.email-signUp').value.trim()
    const password = document.querySelector('.password-signUp').value.trim()
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.[A-Z]).{6,}$/;

    if (!name || !email || !password) {
        return alert('Please fill all fields')
    }
    if (!emailRegex.test(email)) {
        return alert('Please enter a valid email address')
    }
    if (!passwordRegex.test(password)) {
        return alert('Password must be at least 6 characters, include a number and a capital letter.')
    }
    if (users.some(u => u.email === email)) {
        return alert('Email already exists!')
    }
    users.push({ name: name, email: email, password: password })
    localStorage.setItem('users', JSON.stringify(users))
    alert('Registered successfully!')
    container.classList.remove('active')
    document.querySelector('.name-signUp').value.trim() = ''
    document.querySelector('.email-signUp').value.trim() = ''
    document.querySelector('.password-signUp').value.trim() = ''
}

const login = () => {
    let users = JSON.parse(localStorage.getItem('users')) ?? []
    console.log(users)
    const email = document.querySelector('.email-signIn').value.trim()
    const password = document.querySelector('.password-signIn').value.trim()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.[A-Z]).{6,}$/;

    if (!email || !password) {
        return alert('Please fill all fields')
    }
    if (!emailRegex.test(email)) {
        return alert('Please enter a valid email address')
    }
    if (!passwordRegex.test(password)) {
        return alert('Password must be at least 6 characters, include a number and a capital letter.')
    }
    const user = users.find(u => u.email == email  &&  u.password == password )
    console.log(user)
    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.href = 'https://youssef-magdy-19.github.io/login-regiseter_pages/profile.html'
        
        
    } else {
        // document.getElementById("message").style.color = "red";
        return alert("Invalid email or password");
    }

}
