const burger=document.querySelector('.burger'),nav=document.querySelector('.nav');
burger?.addEventListener('click',()=>{const open=nav.classList.toggle('open');burger.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
