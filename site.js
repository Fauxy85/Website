const banner=document.querySelector('.offer-banner');
if(banner){
  if(Date.now()>=Date.UTC(2026,10,1)){banner.remove();}
  else{
    const button=banner.querySelector('.offer-pause');
    button.hidden=false;
    button.addEventListener('click',()=>{
      const paused=banner.classList.toggle('is-paused');
      button.innerHTML=paused?"<svg class=\"banner-control-icon\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\"><path d=\"m8 4 12 8-12 8z\"/></svg>":"<svg class=\"banner-control-icon\" width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M6 4h4v16H6zM14 4h4v16h-4z\"/></svg>";
      button.setAttribute('aria-pressed',String(paused));
      button.setAttribute('aria-label',paused?'Play moving banner':'Pause moving banner');
    });
  }
}

// Reveal below-the-fold content once; keep navigation and focused content visible.
const motionPreference=window.matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window){
  const revealTargets=document.querySelectorAll('.section-heading, .service-choice, .detail-section > h2, .detail-pair article, .home-about > div, .contact > div');
  const show=element=>element.classList.remove('reveal-pending');
  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){show(entry.target);observer.unobserve(entry.target);}});
  },{threshold:0.08});
  if(!motionPreference.matches){
    revealTargets.forEach(element=>{
      if(element.getBoundingClientRect().top>window.innerHeight && !element.closest(':target')){
        element.classList.add('scroll-reveal','reveal-pending');observer.observe(element);
      }
    });
  }
  document.addEventListener('focusin',event=>{
    const element=event.target.closest('.reveal-pending');if(element)show(element);
  });
  const showDestination=()=>{
    const destination=document.getElementById(window.location.hash.slice(1));
    if(destination){show(destination);destination.querySelectorAll('.reveal-pending').forEach(show);}
  };
  window.addEventListener('hashchange',showDestination);
  motionPreference.addEventListener('change',event=>{
    if(event.matches){revealTargets.forEach(show);observer.disconnect();}
  });
}
