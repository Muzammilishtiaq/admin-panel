$(document).ready(function () {
    uploadvideotableform()
    $('#uploadvideo-form').hide();
});

$(document).ready(function () {


    // start add video upload function
    $('#add-video-btn').click(function (e) {
        e.preventDefault();
        $('#uploadvideo-table').hide();
        $('#uploadvideo-form').show();
    });
    // end add video upload function


    // start video upload function
    $('#uploadvideo-form').submit(function (e) {
        e.preventDefault();
        let uploadVideoObjectData = {
            uploadvideoTile: $('#video-upload-title').val(),
            uploadvideodescription: $('#video-upload-description').val(),
            uploadvideoUrl: $('#video-upload-url').val()
        }
        // console.log(uploadVideoObjectData)
        let videouploaddataget = localStorage.getItem('uploadvideosetdata')
        if (videouploaddataget == null) {
            videouploadArray = []
        } else {
            videouploadArray = JSON.parse(videouploaddataget)
        }
        videouploadArray.push(uploadVideoObjectData)
        localStorage.setItem('uploadvideosetdata', JSON.stringify(videouploadArray))
        // hide and show properity
        $('#uploadvideo-table').show();
        $('#uploadvideo-form').hide();
        // $('#uploadvideo-form').html().reset();
        document.getElementById('uploadvideo-form').reset()
        uploadvideotableform()
    });
    // end video upload function

});




// uploadvideo form table function
function uploadvideotableform() {
    let videouploaddataget = localStorage.getItem('uploadvideosetdata')
    if (videouploaddataget == null) {
        videouploadArray = []
    } else {
        videouploadArray = JSON.parse(videouploaddataget)
    }
    let html = '';
    videouploadArray.forEach((item, index) => {
        html += `
    <tr class="row">
    <td class="col-1">${index + 1}</td>
    <td class="col-2">${item.uploadvideoTile}</td>
    <td class="col-7">${item.uploadvideoUrl}</td>
    <td class="col-2">
        <button class="border-0 text-info fw-bold" id="live-stream-edit">Edit</button>
        <button class="border-0 text-info fw-bold" id="live-stream-view">View</button>
        <button id="${index}" class="border-0 text-info fw-bold" id="live-stream-delete" onclick="uploadvideodeletebtn(this.id)">Delete</button>
    </td>
</tr>`;
    });

    let uploadtableBody = document.getElementById('video-upload-tbody');
    if (videouploadArray.length != 0) {
        uploadtableBody.innerHTML = html;
    } else {
        uploadtableBody.innerHTML = 'upload video 0'
    }
}



function uploadvideodeletebtn(index) {
    console.log(index)
    let videouploaddataget = localStorage.getItem('uploadvideosetdata')
    if (videouploaddataget == null) {
        videouploadArray = []
    } else {
        videouploadArray = JSON.parse(videouploaddataget)
    }
    videouploadArray.splice(index, 1)
    localStorage.setItem('uploadvideosetdata', JSON.stringify(videouploadArray))
    uploadvideotableform()
}