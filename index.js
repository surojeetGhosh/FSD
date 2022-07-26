document.querySelector(".fa-solid").addEventListener("mouseenter",() => {
    var a = document.querySelector(".nav-list");
    var b = document.querySelector(".login");

    a.classList.add("visible");
    b.classList.add("visible");
});

document.querySelector(".fa-solid").addEventListener("mouseleave",() => {
    var a = document.querySelector(".nav-list");
    var b = document.querySelector(".login");

    a.classList.remove("visible");
    b.classList.remove("visible");
});


