with(document){
	bo=['t.jpg','t2.jpg','t3.jpg','t4.jpg','t5.jpg']
	for (i=0; i<bo.length; i++) {
		scp.innerHTML+='<div class="ms f"><div class=nt>'+(i+1)+'</div> <img src='+bo[i]+' width=100%> <div class=text>Lớp T/CVA 96-00 HP</div></div>'
		csd.innerHTML+='<span class=d onclick=cs('+(i+1)+')></span> '
	}
	j = 1; s(j); function p(n) {s(j += n)}; function cs(n) {s(j = n)}
	function s(n) {
	m=getElementsByClassName('ms'); d=getElementsByClassName('d'); if (n > m.length) j = 1; if (n < 1) j = m.length
	for (i = 0; i < m.length; i++) m[i].style.display = "none"
	for (i = 0; i < d.length; i++) d[i].className = d[i].className.replace(" z", "")
	m[j-1].style.display = "block"
	d[j-1].className += " z"}
}
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();