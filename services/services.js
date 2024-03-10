
const getAllProducts = (drawProducts = () => { }) => {
    $.ajax({
        url: "../../data/letters.json",
        success: (result) => {
            drawProducts(result);
        }
    });
}







