liveStreamtabledata()

// form register or login
$(document).ready(function () {
    // admin panel 

    // $('#dashboard').show();
    // $('#live-stream').addClass('hidden');
    // $('#videos').addClass('hidden');

    // $('#live-stream-link').click(function (e) {
    //     e.preventDefault();
    //     $('#live-stream').show();
    //     $('#dashboard').hide();
    //     $('#videos').hide();
    //     $('#livestream-table').show();
    //     $('#add-livestream-form').hide();
    // });
    // $('#video-link').click(function (e) {
    //     e.preventDefault();
    //     $('#live-stream').hide();
    //     $('#dashboard').hide();
    //     $('#videos').show();
    //     $('#uploadvideo-table').show();
    //     $('#uploadvideo-form').hide();
    // });
    // $('#dashboard-link').click(function (e) {
    //     e.preventDefault();
    //     $('#live-stream').hide();
    //     $('#dashboard').show();
    //     $('#videos').hide();
    // });
    // $('#logeout-link').click(function (e) {
    //     e.preventDefault();
    //     window.location.href = 'index.html'
    // });

    // $('#add-livestream-btn').click(function (e) {
    //     e.preventDefault();
    //     $('#livestream-table').hide();
    //     $('#add-livestream-form').show();
    // });

    // $('#add-video-btn').click(function (e) {
    //     e.preventDefault();
    //     $('#uploadvideo-table').hide();
    //     $('#uploadvideo-form').show();
    // });


    // add live stream function
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

        // <-------- looping-------->
        liveStreamtabledata()
        // let html = '';
        // liveStreamArray.forEach(item => {
        //     html += `
        //     <tr class="row">
        //     <th class="col-1">${item + 1}</th>
        //     <th class="col-2">${item.liveTile}</th>
        //     <th class="col-5 fs-6">${item.liveUrl}</th>
        //     <th class="col-2">
        //         <button class="border-0 text-info fw-bold" id="live-stream-edit">Edit</button>
        //         <button class="border-0 text-info fw-bold" id="live-stream-view">View</button>
        //         <button class="border-0 text-info fw-bold" id="live-stream-delete">Delete</button>
        //     </th>
        // </tr>`;
        // });

        // let tableBody = document.getElementById('live-stream-tbody');
        // if (liveStreamArray.length != 0) {
        //     tableBody.innerHTML = html;
        // }


    });

});


function liveStreamtabledata() {
    const liveStreamDataGet = localStorage.getItem('liveStreamData')
    if (liveStreamDataGet == null) {
        liveStreamArray = [];
    } else {
        liveStreamArray = JSON.parse(liveStreamDataGet)
    }
    let html = '';
    liveStreamArray.forEach(item, index => {
        html += `
        <tr class="row">
        <th class="col-1">${index + 1}</th>
        <th class="col-2">${item.liveTile}</th>
        <th class="col-5">${item.liveUrl}</th>
        <th class="col-2">
            <button class="border-0 text-info fw-bold" id="live-stream-edit">Edit</button>
            <button class="border-0 text-info fw-bold" id="live-stream-view">View</button>
            <button class="border-0 text-info fw-bold" id="live-stream-delete">Delete</button>
        </th>
    </tr>`;
    });

    let tableBody = document.getElementById('live-stream-tbody');
    if (liveStreamArray.length != 0) {
        tableBody.innerHTML = html;
    }
}







// //  video upload function <----------upload video function -------------> 
// $('#uploadvideo-form').submit(function (e) {
//     e.preventDefault();
//     let uploadVideoObjectData = {
//         uploadvideoTile: $('#video-upload-title').val(),
//         uploadvideodescription: $('#video-upload-description').val(),
//         uploadvideoUrl: $('#video-upload-url').val()
//     }
//     // console.log(uploadVideoObjectData)
//     let videouploaddataget = localStorage.getItem('uploadvideosetdata')
//     if (videouploaddataget == null) {
//         videouploadArray = []
//     } else {
//         videouploadArray = JSON.parse(videouploaddataget)
//     }
//     videouploadArray.push(uploadVideoObjectData)
//     localStorage.setItem('uploadvideosetdata', JSON.stringify(videouploadArray))
//     console.log(video)
// });