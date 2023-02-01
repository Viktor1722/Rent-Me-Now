let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector("#nav-sidebar");
    let getSidebarUl = document.querySelector("#nav-sidebar ul");
    let getSidebarTitle = document.querySelector("#nav-sidebar span");
    let getSidebarLinks = document.querySelectorAll("#nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebar.style.visibility = "visible";
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "560px";
        getSidebarTitle.style.opacity = "0.5";

        let arrayLength = getSidebarLinks.length;
        for (let index = 0; index < arrayLength; index++) {
            getSidebarLinks[index].style.opacity = "1";

        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {

        getSidebar.style.width = "0px";
        getSidebarTitle.style.opacity = "0";

        let arrayLength = getSidebarLinks.length;
        for (let index = 0; index < arrayLength; index++) {
            getSidebarLinks[index].style.opacity = "0";

        }

        getSidebarUl.style.visibility = "hidden";
        getSidebar.style.visibility = "hidden";

        toggleNavStatus = false;
    }
}