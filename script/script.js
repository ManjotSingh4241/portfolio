//////////////////////////////////////////////////////////////////////////////////////////////Scroll///////////////
// Function to check if an element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle the scroll event
function handleScroll() {
    var elements = document.querySelectorAll('#pro, #pro3, #pro2, #pro4, #pro5, form-container');

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        if (isInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    }
}


// // Add scroll event listener
window.addEventListener('scroll', handleScroll); 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////