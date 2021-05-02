const fs= require('fs');
const ffmpeg= require('ffmpeg');

fs.stat('./uploads/3bb9d008-e57c-4175-819c-214254502954-TCPVC0.raw', function(err,stats){
    const mtime=stats.mtime;
    console.log(mtime);
    console.log(stats.t);
    console.log('hi');
})
// ffmpeg.ffprobe('./uploads/3bb9d008-e57c-4175-819c-214254502954-TCPVC0.raw', function(err,metadata){
    
//     console.log(metadata.format.duration);
// })