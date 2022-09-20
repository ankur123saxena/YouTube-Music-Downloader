const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bf3cf04552msh2972ad3072436adp1771d8jsn478315caba36',
		'X-RapidAPI-Host': 'youtube-music-downloader.p.rapidapi.com'
	}
};

fetch('https://youtube-music-downloader.p.rapidapi.com/mp3?url=https://music.youtube.com/watch?v=B4FZrrg7hZM', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));