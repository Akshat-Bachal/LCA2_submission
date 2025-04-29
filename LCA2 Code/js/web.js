const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleSidebar(){
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')

   closeAllSubMenus() 
}
function toggleSubMenu(button){

    if(!button.nextElementSibling.classList.contains('show'))

    closeAllSubMenus()

    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

    if(sidebar.classList.contains('close')){
        sidebar.classList.toggle('close')
        toggleButton.classList.toggle('rotate')

    }
}
function closeAllSubMenus(){
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul=> {
        ul.classList.remove('show')
        ul.previousElementSibling.classList.remove('rotate')
    })
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('close');
}

document.addEventListener('DOMContentLoaded', function() {
    let counter = 1;
    const totalSlides = 3;
    const intervalTime = 5000;
    let autoSlideInterval;
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            document.getElementById('radio' + counter).checked = true;
            counter = counter >= totalSlides ? 1 : counter + 1;
        }, intervalTime);
    }
    
    startAutoSlide();
    
    document.querySelectorAll('.manual-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            clearInterval(autoSlideInterval);
            counter = parseInt(btn.htmlFor.replace('radio', ''));
            setTimeout(startAutoSlide, intervalTime * 2);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileSearchBtn = document.querySelector('.mobile-search-btn');
    const searchForm = document.querySelector('.search-form');
  
    if (mobileSearchBtn && searchForm) {
      mobileSearchBtn.addEventListener('click', function(e) {
        e.stopPropagation(); 
        searchForm.classList.toggle('active');
      });
  
      
      document.addEventListener('click', function() {
        searchForm.classList.remove('active');
      });
  
      
      searchForm.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
  });