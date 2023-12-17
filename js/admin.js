$(document).ready(function () {
    livestreamtableform()
    uploadvideotableform()
});
$(document).ready(function () {
    $('#dashboard').show();
    $('#live-stream').addClass('hidden');
    $('#videos').addClass('hidden');

    // sidebar link function start
    $('#live-stream-link').click(function (e) {
        e.preventDefault();
        $('#live-stream').show();
        $('#dashboard').hide();
        $('#videos').hide();
        $('#livestream-table').show();
        $('#add-livestream-form').hide();
    });
    $('#video-link').click(function (e) {
        e.preventDefault();
        $('#live-stream').hide();
        $('#dashboard').hide();
        $('#videos').show();
        $('#uploadvideo-table').show();
        $('#uploadvideo-form').hide();
    });
    $('#dashboard-link').click(function (e) {
        e.preventDefault();
        $('#live-stream').hide();
        $('#dashboard').show();
        $('#videos').hide();
    });
    $('#logeout-link').click(function (e) {
        e.preventDefault();
        window.location.href = 'index.html'
    });
    //  start add live stream button function
    $('#add-livestream-btn').click(function (e) {
        e.preventDefault();
        $('#livestream-table').hide();
        $('#add-livestream-form').show();
    });
    // end add live stream button function
    // start add video upload function
    $('#add-video-btn').click(function (e) {
        e.preventDefault();
        $('#uploadvideo-table').hide();
        $('#uploadvideo-form').show();
    });
    // end add video upload function

    // start add live stream form function 
    $('#add-livestream-form').submit(function (e) {
        e.preventDefault();
        console.log('success')
        const liveStreamData = {
            liveTile: $('#live-stream-title').val(),
            liveDes: $('#live-stream-description').val(),
            liveUrl: $('#live-stream-url').val()
        }
        // start localstorage data set and get
        const liveStreamDataGet = localStorage.getItem('liveStreamData')
        if (liveStreamDataGet == null) {
            liveStreamArray = [];
        } else {
            liveStreamArray = JSON.parse(liveStreamDataGet)
        }
        liveStreamArray.push(liveStreamData)

        localStorage.setItem('liveStreamData', JSON.stringify(liveStreamArray))
        // end localstorage data set and get

        // data push array variable

        // input text reset properity
        document.getElementById('add-livestream-form').reset();
        // hide and show properity
        $('#livestream-table').show();
        $('#add-livestream-form').hide();
        livestreamtableform();
    });

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
        $('#uploadvideo-form').html().reset();
    });
    // end video upload function
});




// livesream form table function
function livestreamtableform (){
 const liveStreamDataGet = localStorage.getItem('liveStreamData')
        if (liveStreamDataGet == null) {
            liveStreamArray = [];
        } else {
            liveStreamArray = JSON.parse(liveStreamDataGet)
        }
         let html = '';
        liveStreamArray.forEach((item, index) => {
            html += `
            <tr class="row">
            <td class="col-1">${index + 1}</td>
            <td class="col-2">${item.liveTile}</td>
            <td class="col-7 ">${item.liveUrl}</td>
            <td class="col-2">
                <button class="border-0 text-info fw-bold" id="live-stream-edit">Edit</button>
                <button class="border-0 text-info fw-bold" id="live-stream-view">View</button>
                <button class="border-0 text-info fw-bold" id="live-stream-delete">Delete</button>
            </td>
        </tr>`;
        });

        let tableBody = document.getElementById('live-stream-tbody');
        if (liveStreamArray.length != 0) {
            tableBody.innerHTML = html;
        }else{
            tableBody.innerHTML = 'Live stream 0'
        }
}


// uploadvideo form table function
function uploadvideotableform(){
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
            <button class="border-0 text-info fw-bold" id="live-stream-delete">Delete</button>
        </td>
    </tr>`;
    });

    let uploadtableBody = document.getElementById('video-upload-tbody');
    if (videouploadArray.length != 0) {
        uploadtableBody.innerHTML = html;
    }else{
        uploadtableBody.innerHTML= 'upload video 0'
    }
}

