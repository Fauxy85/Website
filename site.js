const banner=document.querySelector('.offer-banner');
if(banner){
  if(Date.now()>=Date.UTC(2026,10,1)){banner.remove();}
  else{
    const button=banner.querySelector('.offer-pause');
    button.hidden=false;
    button.addEventListener('click',()=>{
      const paused=banner.classList.toggle('is-paused');
      button.textContent=paused?'Play':'Pause';
      button.setAttribute('aria-pressed',String(paused));
      button.setAttribute('aria-label',paused?'Play moving banner':'Pause moving banner');
    });
  }
}
