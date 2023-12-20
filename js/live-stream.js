// start live stream naviten click window time hide 
$('#add-livestream-form').hide();
$('#livestream-table').hide();
// end 

//  start add live stream button function
$('#add-livestream-btn').click(function (e) {
    e.preventDefault();
    $('#livestream-table').hide();
    $('#add-livestream-form').show();
    // $('#add-livestream-btn').hide();
});
// end add live stream button function

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

// livesream form table function
function livestreamtableform() {
    const liveStreamDataGet = localStorage.getItem('liveStreamData')
    if (liveStreamDataGet == null) {
        liveStreamArray = [];
    } else {
        liveStreamArray = JSON.parse(liveStreamDataGet)
    }

    var html = '';
    liveStreamArray.forEach((item, index) => {
        html += `
            <tr class="row">
            <td class="col-1">${index + 1}</td>
            <td class="col-2">${item.liveTile}</td>
            <td class="col-7 ">${item.liveUrl}</td>
            <td class="col-2">
                <button id="${index}" class="border-0 text-info fw-bold"  onclick="livestreameditbtn(this.id)">Edit</button>
                <button class="border-0 text-info fw-bold" id='${index}'  onclick="livestreamviewbtn(this.id)">View</button>
                <button id="${index}" class="border-0 text-info fw-bold" onclick="livestreamdetetebtn(this.id)">Delete</button>
            </td>
        </tr>`;
    });

    // let tableBody = document.getElementById('live-stream-tbody');
    if (liveStreamArray.length != 0) {
        $('#live-stream-tbody').html(html);
        // tableBody.innerHTML = html;
    } else {
        $('#live-stream-tbody').html('live stream 0');
    }
}


// delete button
function livestreamdetetebtn(index) {
    console.log(index)
    const liveStreamDataGet = localStorage.getItem('liveStreamData')
    if (liveStreamDataGet == null) {
        liveStreamArray = [];
    } else {
        liveStreamArray = JSON.parse(liveStreamDataGet)
    }
    liveStreamArray.splice(index, 1)
    localStorage.setItem('liveStreamData', JSON.stringify(liveStreamArray))
    livestreamtableform()
}

// view button
function livestreamviewbtn(index) {

    const liveStreamDataGet = localStorage.getItem('liveStreamData');
    if (liveStreamDataGet) {
        // Parse the JSON data
        liveStreamArray = JSON.parse(liveStreamDataGet);

        // Retrieve the selected live stream data
        const selectedLiveStream = liveStreamArray[index];

        // Get the video URL from the selected live stream
        const videoUrl = selectedLiveStream.liveUrl;

        // Display the video in a modal or another element on the page
        showVideoModal(videoUrl);
        console.log(videoUrl)
    }

}
function showVideoModal(videoUrl) {
    var videoelement = document.getElementById('my-video');
    var player = videojs(videoelement);

    player.src({
        type: "application/x-mpegURL",
        src: videoUrl
    });
}



function livestreamPageLoad() {
    // alert('live stream page')
    $('#livestream-table').show();
    livestreamtableform()
}

// edit button function start
function livestreameditbtn(index) {
    window.location.href = `edit-live-stream.html?id=${index}`;
}
function onEditPageLoad() {
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('id');

    // Check if the index is valid
    if (index !== null) {
        const liveStreamDataGet = localStorage.getItem('liveStreamData');
        if (liveStreamDataGet) {
            liveStreamArray = JSON.parse(liveStreamDataGet);
            // Set values in the form
            $('#edit-live-stream-title').val(liveStreamArray[index].liveTile);
            $('#edit-live-stream-description').val(liveStreamArray[index].liveDes);
            $('#edit-live-stream-url').val(liveStreamArray[index].liveUrl);
        }
        console.log(liveStreamArray);
    } else {
        console.error('Index not provided in the URL.');
    }
}



// Handle form submission for updating data edit button
$('#edit-livestream-form').submit(function (e) {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const index = urlParams.get('id');
    // Update the live stream data in the array
    const liveStreamDataGet = localStorage.getItem('liveStreamData');
    if (liveStreamDataGet) {
        liveStreamArray = JSON.parse(liveStreamDataGet);
        liveStreamArray[index].liveTile = $('#edit-live-stream-title').val();
        liveStreamArray[index].liveDes = $('#edit-live-stream-description').val();
        liveStreamArray[index].liveUrl = $('#edit-live-stream-url').val();
    }

    // Update the data in local storage
    localStorage.setItem('liveStreamData', JSON.stringify(liveStreamArray));
    // Hide the edit form
    console.log(liveStreamArray)
    // Update the live stream table on the page
    livestreamtableform();
   window.location.href='live-stream.html';
});
// end edit function