document.getElementById('form-lead').addEventListener('submit', e=>{
e.preventDefault();
const f = new FormData(e.target);
const nome = f.get('0') || document.querySelector('input[placeholder="Seu nome"]').value;
const email = document.querySelector('input[type="email"]').value;
const msg = `Olá! Quero a avaliação gratuita.\nNome: ${nome}\nEmail: ${email}\nObjetivo: ${f.get('2')}\nModalidade: ${f.get('3')}`;
const url = `https://wa.me/5511977777777?text=${encodeURIComponent(msg)}`;
window.open(url,'_blank');
e.target.reset();
alert('Abrindo WhatsApp com seu pedido de avaliação!');
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click',e=>{
const id=a.getAttribute('href');
if(id.length>1){e.preventDefault();document.querySelector(id)?.scrollIntoView({behavior:'smooth'});}
});
});
