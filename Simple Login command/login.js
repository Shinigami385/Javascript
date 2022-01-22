let user=prompt("Who is there? ");

if(user=="Admin") let password=prompt("Password");
    else if(user==null || user=='') alert("Cancelled");
    else alert("i don't know who you are.")

if(password=="TheMaster") alert("Welcome");
    else if (password==null || password=='') alert("Wrong Password");
    else alert("Cancelled");
