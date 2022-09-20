//JS ADD TO CART
function addToCart(supermodelId, skuId) {
  cube.api
    .addToCart({
      supermodelId: supermodelId,
      skuId: skuId,
      quantity: 1,
      analytics: {},
    })
    .then((response) => {
      console.log(response);
    });
}

var addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (evn) => {
    evn.preventDefault();
    var model = button.getAttribute("data-model");
    var sku = button.getAttribute("data-sku");
    addToCart(model, sku);
    console.log("model/sku", model + "/" + sku);
  });
});
