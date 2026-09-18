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
