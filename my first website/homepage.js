const recipeButtons = document.querySelectorAll(".btn");
            recipeButtons.forEach(button => {
                button.addEventListener("mouseover", function() {
                    button.style.backgroundColor = "white";
                    button.style.color = "black";
                });

                button.addEventListener("mouseout", function() {
                    button.style.backgroundColor = "#1F253F"; 
                    button.style.color = "#fff"; 
                });
            });


 
        const popup = document.getElementById('popup');
        const closePopup = document.getElementById('close-popup');
    
        function showPopup() {
            popup.style.transform = 'translateX(0)';
        }
    
        function hidePopup() {
            popup.style.transform = 'translateX(100%)';
        }
    
        window.addEventListener('load', showPopup);
    
        closePopup.addEventListener('click', hidePopup);


        

        const showButton = document.getElementById('show-button');
        const hiddenInfo = document.getElementById('hidden-info');
        
        showButton.addEventListener('click', (event) => {
            event.preventDefault();
        
            if (hiddenInfo.style.display === 'none' || hiddenInfo.style.display === '') {
                hiddenInfo.style.display = 'block';
                showButton.textContent = 'Hide Information';
            } else {
                hiddenInfo.style.display = 'none';
                showButton.textContent = 'See more >';
            }
        });