const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bf3cf04552msh2972ad3072436adp1771d8jsn478315caba36',
		'X-RapidAPI-Host': 'youtube-dl4.p.rapidapi.com'
	}
};
fetch('https://youtube-dl4.p.rapidapi.com/fc8c5416b9cfd8fc?url=https://www.youtube.com/watch?v=vJQMhj6WYZA&list=RDvJQMhj6WYZA&start_radio=1&ab_channel=T-Series', options)
	.then(response => response.json())
	.then(response => console.log(response.formats[0].url))
	.catch(err => console.error(err));