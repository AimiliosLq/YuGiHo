document.addEventListener("DOMContentLoaded", function() {

   const checkbox = document.getElementById('checkbox');
   const menuButton = document.getElementById('toggle')
   const showmenu1 = document.getElementById('navbar')
   
   checkbox.addEventListener('change', ()=>{
       if (checkbox.checked) {
           document.documentElement.classList.remove("light")
           document.documentElement.classList.add("dark")
           window.localStorage.setItem('checkbox', 'dark');
       } else {
           document.documentElement.classList.remove("dark")
           document.documentElement.classList.add("light")
           window.localStorage.setItem('checkbox', 'light');
       }
   })
   
   menuButton.addEventListener('change', ()=>{
       if(menuButton.checked){
           showmenu1.style.display = "flex"
       }
       else{
           showmenu1.style.display = "none"
       }
   })
});

    