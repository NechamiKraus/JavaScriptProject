const Picture = (imgId) => {
    $.ajax({
        url: "../../data/letters.json",
        success: (result) => {
        g(result,imgId);
        }
    });

}

