// script.js  
document.addEventListener("DOMContentLoaded", function() {  
    const header = document.querySelector('header');  
    header.style.opacity = 0;  
    header.style.transition = 'opacity 1s';  
    setTimeout(() => {  
        header.style.opacity = 1;  
    }, 100);  

    // 为每个功能模块添加滚动动画  
    const features = document.querySelectorAll('.feature-item');  
    window.addEventListener('scroll', () => {  
        features.forEach(feature => {  
            const rect = feature.getBoundingClientRect();  
            if (rect.top < window.innerHeight && rect.bottom > 0) {  
                feature.classList.add('fade-in');  
            }  
        });  
    });  
});