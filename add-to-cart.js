//OSMOSE
let formData = new FormData();
formData.append("add_product_id", 2234741);
formData.append("quantity", 2);

fetch(
  "/pt/AddToCart_addProduct/~add_product_id=2916883/~quantity=1/~_2916883_quantity=1/~redirectView=product2916883/~product_id=undefined",
  {
    method: "POST",
    credentials: "same-origin",
  }
);

const formData = new FormData();
formData.append("quantity", 2);
formData.append("productId", 2982980);

fetch(
  "/pt/ajax/rest/model/atg/commerce/order/purchase/CartModifierActor/addItemToOrder",
  {
    method: "POST",
    credentials: "same-origin",
    body: formData,
  }
);

//OSMOSE FINAL
fetch("/pt/AddToCart_addProduct/~add_product_id=2916883/~_2916883_quantity=1", {
  method: "POST",
  credentials: "same-origin",
}).then((response) => {
  console.log(response);
});

let data = { add_product_id: 2916883, _2916883_quantity: 1 };

fetch("/pt/AddToCart_addProduct/", {
  method: "POST",
  body: JSON.stringify(data),
}).then((res) => {
  console.log("Request complete! response:", res);
});

//CUBE
productID = document.getElementById("models-information").dataset.productId;
cube.api
  .addToCart({
    supermodelId: "138705",
    skuId: "2006405",
    quantity: 1,
    analytics: {},
  })
  .then((response) => {
    console.log(response);
  });
