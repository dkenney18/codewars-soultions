function formatDuration (seconds) 
{
    console.log("Years: " + seconds/ 31557600)
    console.log("Days: " + seconds / 86400)
    console.log("Hours:" + seconds / 3600)
    console.log("Minutes: " + seconds / 60)
    console.log("Seconds: " + seconds)
}

formatDuration(1)
formatDuration(62)
formatDuration(120)
formatDuration(3600)
formatDuration(3662)

