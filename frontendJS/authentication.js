const signupForm = document.querySelector('#SignupForm');
if(signupForm)
{
    signupForm.addEventListener('submit' , (e) => {
        e.preventDefault();
    
        //get info
        const email = document.getElementById("sign-up-email").value
        const password = document.getElementById("sign-up-password").value
    
        console.log(email +" "+ password)
    
        //sign up the user
        firebase.auth().createUserWithEmailAndPassword(email,password).then( cred =>{
            console.log(cred)
            signupForm.reset()
            alert("You have been successfully signed up! Click log in.")
        })
    
    })
}

   

// Login the user
const loginForm = document.querySelector('#LoginForm');
if(loginForm)
{
    loginForm.addEventListener('submit', (e)=>{
        e. preventDefault();
        //get info
        const email = document.getElementById("login-email").value
        const password = document.getElementById("login-password").value
        console.log(email +" "+ password)
        firebase.auth().signInWithEmailAndPassword(email,password).then(cred => {
            console.log(cred.user)
            loginForm.reset()
            alert("You have been successfully logged in!")
        })
    })
}

//logout users
const logout = document.querySelector('#logout');
if(logout)
{
    logout.addEventListener('click', (e)=>{
        e.preventDefault();
        firebase.auth().signOut().then(()=>{
            console.log("User logged out")
            alert("You have been successfully logged out!")
        })
    })
}