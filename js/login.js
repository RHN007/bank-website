//step 1: add click event handler for 

document.getElementById('btn-submit').addEventListener('click', function(){
//step 2:  Get the email address: 

//always remember to use.value. 
   const emailField= document.getElementById('user-email'); 
        const email = emailField.value; 

    const passWordField = document.getElementById('password'); 
    const password = passWordField.value; 
   

    //DO NOT VERIFY EMAIL PASSWORD ON thE CLIENT SITE 

//Step 4 : Verify Password ; 

if(email === 'nayon@gmail.com' && password === 'dhaka123'){
    window.location.href = 'bank.html'
}
else alert('Password or email not authorized')

        
})