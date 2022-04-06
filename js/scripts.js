/*!
* Start Bootstrap - Agency v7.0.10 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

window.onload(
    document.getElementById("doc-gen").style.display = "block",
    document.getElementById("tablinks2").classList.toggle("text-secondary"),
    document.getElementById("tablinks2").classList.toggle("text-selected")
);

function Documentation(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    var tab1, tab2, tab3
    tab1 = document.getElementById("tablinks1")
    tab2 = document.getElementById("tablinks2")
    tab3 = document.getElementById("tablinks3")

    // Get all elements with class="tablinks" and remove the class "active"
    if (cityName == "doc-app" && !tab1.classList.contains("text-selected") || (cityName != "doc-app" && tab1.classList.contains("text-selected"))) {
        tab1.classList.toggle("text-secondary")
        tab1.classList.toggle("text-selected")
    }
    if (cityName == "doc-gen" && !tab2.classList.contains("text-selected") || (cityName != "doc-gen" && tab2.classList.contains("text-selected"))) {
        tab2.classList.toggle("text-secondary")
        tab2.classList.toggle("text-selected")
    }
    if (cityName == "doc-fot" && !tab3.classList.contains("text-selected") || (cityName != "doc-fot" && tab3.classList.contains("text-selected"))) {
        tab3.classList.toggle("text-secondary")
        tab3.classList.toggle("text-selected")
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
};