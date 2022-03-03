var top = document.getElementById("top");

function pageScroll() {
    window.scrollBy(0,-window.innerHeight);
    scrolldelay = setTimeout("pageScroll()",100);
    if(document.documentElement.scrollTop==0) clearTimeout(scrolldelay);
}