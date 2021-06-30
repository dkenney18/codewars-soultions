function domainName(url){
   console.log(url.split(/(http:\/\/|www\.|https:\/\/|www\.)/gm)[2].split(".")[0])
}


domainName("http://google.com")
domainName("http://google.co.jp")
domainName("www.xakep.ru")
domainName("https://youtube.com")