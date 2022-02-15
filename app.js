const memoryCostText = document.getElementById("memory-cost");
const bestPriceText = document.getElementById("best-price");
const storageCostText = document.getElementById("storage-cost");
const deliveryCostText = document.getElementById("delivery-cost");
const totalPriceText = document.getElementById("total-price");

function updatePrice(btnID, wToChng, price) {
  document.getElementById(btnID).addEventListener("click", function () {
    wToChng.innerText = parseFloat(price);

    const totalPrice =
      parseFloat(bestPriceText.innerText) +
      parseFloat(memoryCostText.innerText) +
      parseFloat(storageCostText.innerText) +
      parseFloat(deliveryCostText.innerText);

    totalPriceText.innerText = totalPrice.toFixed(2);
  });
}

updatePrice("eightGB", memoryCostText, "0");
updatePrice("sixteenGB", memoryCostText, "200");
updatePrice("ssd1", storageCostText, "0");
updatePrice("ssd2", storageCostText, "400");
updatePrice("ssd3", storageCostText, "700");
updatePrice("free-delivery", deliveryCostText, "0");
updatePrice("paid-delivery", deliveryCostText, "30");

//add promo code part

const promoCode = "hardwork";

document.getElementById("apply-btn").addEventListener("click", function () {
  const promoInputText = document.getElementById("promo-input");
  const promoInput = promoInputText.value;
  if (promoInput === promoCode) {
    const prevTotalPrice = parseInt(document.getElementById("total-price").innerText);
    const discountPrice = (prevTotalPrice * 15) / 100;
    document.getElementById("total-price").innerText = prevTotalPrice - discountPrice;

    //disabling button after one successfull attempt
    document.getElementById("apply-btn").setAttribute("disabled", true);

    //successfull msg
    document.getElementById("applied").classList.remove("d-none");
    document.getElementById("notApplied").classList.add("d-none");
  } else {
    //unsuccessfull msg
    document.getElementById("notApplied").classList.remove("d-none");
    document.getElementById("applied").classList.add("d-none");
  }

  promoInputText.value = "";
});

//hardwork is promo code