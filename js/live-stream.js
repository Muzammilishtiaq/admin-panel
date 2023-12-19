
$(document).ready(function () {
    livestreamtableform()
    $('#add-livestream-form').hide();
});

$(document).ready(function () {
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

});
// livesream form table function
function livestreamtableform() {
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
                <button id="${index}" class="border-0 text-info fw-bold" id="live-stream-edit" onclick="livestreameditbtn(this.id)">Edit</button>
                <button class="border-0 text-info fw-bold" id='${index}' id="live-stream-view" onclick="livestreamviewbtn(this.id)">View</button>
                <button id="${index}" class="border-0 text-info fw-bold" id="live-stream-delete"  onclick="livestreamdetetebtn(this.id)">Delete</button>
            </td>
        </tr>`;
    });

    let tableBody = document.getElementById('live-stream-tbody');
    if (liveStreamArray.length != 0) {
        tableBody.innerHTML = html;
    } else {
        tableBody.innerHTML = 'Live stream 0'
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
        console.log(showVideoModal(videoUrl))
    }
}



// edit button
function livestreameditbtn(index) {
    const liveStreamDataGet = localStorage.getItem('liveStreamData')
    if (liveStreamDataGet) {
        // Parse the JSON data
        liveStreamArray = JSON.parse(liveStreamDataGet);

        // Set the form fields with the values from the selected live stream
        $('#live-stream-title').val(liveStreamArray[index].liveTile);
        $('#live-stream-description').val(liveStreamArray[index].liveDes);
        $('#live-stream-url').val(liveStreamArray[index].liveUrl);

        // Save the updated live stream data back to local storage
        localStorage.setItem('liveStreamData', JSON.stringify(liveStreamArray));
    }
    $('#add-livestream-form').show();
    $('#livestream-table').hide();
    $('#livebtn').val('update');
    $('#add-livestream-btn').hide();

}