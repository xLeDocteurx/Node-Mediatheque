let core_json;

function getJSON(fileURL) {

    var requestURL = fileURL;
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function () {
        // var diapo = request.response;
        core_json = request.response;
        // console.log(core_json);
    }
}

function getJSON() {

    core.tracks.map(x => {
        let id = (all_tracks.length === 0 ? 0 : all_tracks[all_tracks.length - 1].id + 1);
        let track = new Track(id, x.name, x.type, x.clips);
        all_tracks.push(track);
    });

    all_tracks = core.tracks;

    all_samplePacks = core.samplePacks;
    core.samplePacks.map(x => {
        all_samplePacks.push();
    });

    all_songs = core.songs;
}