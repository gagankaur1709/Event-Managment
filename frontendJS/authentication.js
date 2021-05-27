// listen for auth changes
firebase.auth().onAuthStateChanged(user=>{
    if(user)
    {
        console.log("User logged in")
        
    }
    else{
        console.log("User logged out")
    }
})


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
            location.assign('../html/login.html')
            
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
            if(email == "admin@gmail.com" && password == "admin123")
            {
                alert("Successfully logged in as admin")
                location.assign('../html/adminDashboard.html')
            }
            else
            {
                alert("You have been successfully logged in!")
                location.assign('../html/orgTeamDashboard.html')
            }
            
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