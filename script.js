const start = document.getElementById('YES');

start.addEventListener('click', () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
      }, 1000);
})

/*
onload = () => {
   
  };*/