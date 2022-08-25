var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  let mainEl = document.querySelector("main")

  mainEl.style.backgroundColor = "var(--mar-bg)";
  mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
  mainEl.classList.add("flex-ctr")

  let topMenuE1 = document.getElementById("top-menu")
  topMenuE1.style.height = "100%"
  topMenuE1.style.backgroundColor = "var(--top-menu-bg)";
  topMenuE1.classList.add("flex-around")

