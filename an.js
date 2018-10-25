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
        let panel = this.nextElementSibling.style;
        if (panel.display === "block") panel.display = "none"; else panel.display = "block"
    })
function openNav() {
    mySidenav.style.width = "250px"; main.style.marginLeft = "250px";
    body.style.backgroundColor = 'rgba(0,0,0,.4)'
}
function closeNav() {
    mySidenav.style.width = 0; main.style.marginLeft= 0;
    body.style.backgroundColor = "white";
}
with (Math) {
countDownDate = new Date("Jan 1, 2028").getTime();
x = setInterval(function() {
    let now = new Date().getTime(); let distance = countDownDate - now; let months=floor(distance/(3600*24e3*28))
    let weeks=floor(distance/(3600*24e3*7)); let y=floor(distance/(3600*24e3*28*12))
    let days = floor(distance / (3600*24e3)); let hours = floor((distance % (3600*24e3)) / 36e5);
    let minutes = floor((distance % 36e5) / 6e4); let seconds = floor((distance % 6e4) / 1e3)
    mytime.innerHTML ='About '+y+' years or '+months+' months or '+weeks+' weeks; Exactly is '+ days + " days " + hours + " hours "+
        minutes + " minutes " + seconds + " seconds "
}, 1000)
birthday=new Date('May 22, 2018').getTime()
setInterval(function(){
    let n=new Date().getTime(); let d=n-birthday; let mo=floor(d/(3600*24e3*28)); let w=floor(d/(3600*24e3*7))
    let da=floor(d/(3600*24e3)); let h=floor((d%(3600*24e3))/36e5)
    let m=floor((d%36e5)/6e4); let s=floor((d%6e4)/1e3)
    yearsold.innerHTML='About '+mo+' months or '+w+' weeks; Exactly is '+da+' days '+h+' hours '+m+' minutes '+s+' seconds'
}, 1000)}
}
