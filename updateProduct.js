const updateProduktoElementas = document.querySelector("#produktas-update");
const updateAprasymoElementas = document.querySelector("#aprasymas-update");
const updateKainosElementas = document.querySelector("#kaina-update");
const updateNuolaidosElementas = document.querySelector("#nuolaida-update");
const updateLikucioElementas = document.querySelector("#likutis-update");
const updateBrandoElementas = document.querySelector("#brand-update");
const updateKategorijosElementas = document.querySelector("#category-update");

const dialog = document.querySelector("#modal");

function openModal(index) {
  nowUpdatingProductIndex = index;
  dialog.showModal();
  fillUpdateInputsWithData();
}

function closeModal() {
  dialog.close();
}

function fillUpdateInputsWithData() {
  const product = produktai[nowUpdatingProductIndex];

  updateProduktoElementas.value = product.title;
  updateAprasymoElementas.value = product.description;
  updateKainosElementas.value = product.price;
  updateNuolaidosElementas.value = product.discount;
  updateLikucioElementas.value = product.stock;
  updateBrandoElementas.value = product.brand;
  updateKategorijosElementas.value = product.category;
}

function updateProduct() {
  const produktas = {
    title: updateProduktoElementas.value,
    description: updateAprasymoElementas.value,
    price: +updateKainosElementas.value,
    discount: +updateNuolaidosElementas.value,
    stock: +updateLikucioElementas.value,
    brand: updateBrandoElementas.value,
    category: updateKategorijosElementas.value,
  };

  produktai[nowUpdatingProductIndex] = produktas;
  localStorage.setItem("produktai", JSON.stringify(produktai));
  closeModal();
  updateHtmlTable();
  nowUpdatingProductIndex = undefined;
}
