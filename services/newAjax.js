
const cartProducts = (cart) => {
    if (cart !== null) {
        console.log("Calling products for cart:", cart);
        $.ajax({
            url: "../../data/letters.json",
            success: (result) => {
                showPicture(result, cart);
            }
        });
    }
}