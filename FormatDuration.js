function formatDuration (seconds) 
{
    console.log("Years: " + Math.floor(seconds / 31557600))
    console.log("Days: " + Math.floor(seconds / 86400))
    console.log("Hours:" + Math.floor(seconds / 3600))
    console.log("Minutes: " + Math.floor(seconds / 60))
    console.log("Seconds: " + seconds)
}

formatDuration(1)
formatDuration(62)
formatDuration(120)
formatDuration(3600)
formatDuration(3662)

