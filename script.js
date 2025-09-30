(function(){
  // Smooth anchor scroll
  const links = document.querySelectorAll('a[href^="#"]');
  for(const a of links){
    a.addEventListener('click', (e)=>{
      const id = a.getAttribute('href');
      const el = document.querySelector(id);
      if(el){
        e.preventDefault();
        el.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    }, {passive:true});
  }

  // Reveal on scroll
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!prefersReduced){
    const obs = new IntersectionObserver((entries)=>{
      for(const it of entries){
        if(it.isIntersecting){
          it.target.classList.add('is-visible');
          obs.unobserve(it.target);
        }
      }
    }, {threshold: 0.12});
    document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
  }else{
    document.querySelectorAll('.reveal').forEach(el=>el.classList.add('is-visible'));
  }

  // Single-row marquee: duplicate content inside one track
  document.querySelectorAll('.marquee__track').forEach(track=>{
    const original = track.innerHTML.trim();
    track.innerHTML = original + original;
  });

  // Year
  const y = document.getElementById('year');
  if(y) y.textContent = new Date().getFullYear();
})();