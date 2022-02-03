const myFunction = () => {
  const warna = prompt("Ketikkan Warna Yang Kamu Inginkan ");
  if (warna != null) {
    let x = document.getElementsByTagName("body");
    x.item(0).style.backgroundColor = `${warna}`;
  }
};
