$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: 'http://localhost/admin-panel/data/data.json',
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            console.log(error);
        }
    });
});