function addToBasket(toAdd) {
    let cartVal = document.getElementById('cartValue');
    cartVal.innerHTML = (parseFloat(cartVal.innerHTML) + parseFloat(toAdd)).toFixed(2);
    $('#liveToast').toast('show');
}