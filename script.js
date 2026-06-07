// Dropdown
document.getElementById("course").addEventListener("change", function(){
    alert("Selected: " + this.value);
});

// Open Modal
document.getElementById("openBtn").addEventListener("click", function(){
    document.getElementById("modal").style.display = "block";
});

// Close Modal
document.getElementById("closeBtn").addEventListener("click", function(){
    document.getElementById("modal").style.display = "none";
});

// Form Validation
document.getElementById("myForm").addEventListener("submit", function(e){

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name === "" || email === ""){
        document.getElementById("message").innerHTML =
        "Please fill all fields!";
    }
    else{
        document.getElementById("message").innerHTML =
        "Form Submitted Successfully!";
    }
});