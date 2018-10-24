with(document){
function o(evt, page) {
    tabcontent = getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) tabcontent[i].style.display = "none"
    tablinks = getElementsByClassName("tablinks")
    for (i = 0; i < tablinks.length; i++) tablinks[i].className = tablinks[i].className.replace(" active", "")
    page.style.display = "block";
    evt.currentTarget.className += " active";
}
j = 1; s(j); function p(n) {s(j += n)}; function cs(n) {s(j = n)}
function s(n) {
  m=getElementsByClassName('ms'); d=getElementsByClassName('d'); if (n > m.length) j = 1; if (n < 1) j = m.length
  for (i = 0; i < m.length; i++) m[i].style.display = "none"
  for (i = 0; i < d.length; i++) d[i].className = d[i].className.replace(" z", "")
  m[j-1].style.display = "block"
  d[j-1].className += " z"}
defaultOpen.click()
acc = getElementsByClassName("accordion");
for (i = 0; i < acc.length; i++)
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling.style;
        if (panel.display === "block") panel.display = "none"
        else panel.display = "block"
    })
function openNav() {
    mySidenav.style.width = "250px"; main.style.marginLeft = "250px";
    body.style.backgroundColor = 'rgba(0,0,0,.4)'
}
function closeNav() {
    mySidenav.style.width = "0"; main.style.marginLeft= "0";
    body.style.backgroundColor = "white";
}}
