const search = (t) => {
    $.ajax({
        url: "../../data/letters.json",
        success: (result) => {
            s(result,t);
        }
    });
}
