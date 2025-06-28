function success(){
    alert("Your message has been sent successfully!")
    return false;
}



  const button = document.getElementById("toggle-mode");

  button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "☀️ Light Mode";
      
    } else {
      button.textContent = "🌙 Dark Mode";
  
    }
  });
