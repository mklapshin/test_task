function init() {
    let isVisible = true;
    let isVisible2 = true;
    open_menu.addEventListener('click', function(event) {

        if (isVisible) {
            isVisible = false;
            document.getElementById("open_menu").classList.add('open');
        } else {
            isVisible = true;
            document.getElementById("open_menu").classList.remove('open');
        }
    })

    open_menu2.addEventListener('click', function(event) {

        if (isVisible2) {
            isVisible2 = false;
            document.getElementById("open_menu2").classList.add('open');
        } else {
            isVisible2 = true;
            document.getElementById("open_menu2").classList.remove('open');
        }
    })

    variant1.addEventListener('click', function(event) {
        document.getElementById("changeText2").innerHTML = "£27";
    })

    variant2.addEventListener('click', function(event) {
        document.getElementById("changeText2").innerHTML = "£43";
    })

    variant3.addEventListener('click', function(event) {
        document.getElementById("changeText2").innerHTML = "£35";
    })

    variant4.addEventListener('click', function(event) {
        document.getElementById("changeText2").innerHTML = "£63";
    })

    variant5.addEventListener('click', function(event) {
        document.getElementById("changeText2").innerHTML = "£43";
    })

    variant6.addEventListener('click', function(event) {
        document.getElementById("changeText2").innerHTML = "£71";
    })

    variant12.addEventListener('click', function(event) {
        document.getElementById("mainLanguage").innerHTML = "BY";
    })

    variant22.addEventListener('click', function(event) {
        document.getElementById("mainLanguage").innerHTML = "RUS";
    })

    variant32.addEventListener('click', function(event) {
        document.getElementById("mainLanguage").innerHTML = "GBP";
    })


}

window.addEventListener('load', init);