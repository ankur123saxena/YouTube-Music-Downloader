const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bf3cf04552msh2972ad3072436adp1771d8jsn478315caba36',
		'X-RapidAPI-Host': 'youtube-dl4.p.rapidapi.com'
	}
};

fetch('https://youtube-dl4.p.rapidapi.com/fc8c5416b9cfd8fc?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DBddP6PYo2gs%26list%3DRDdz3aCNEAVtk%26index%3D3%26ab_channel%3DSonyMusicIndia', options)
	.then(response => response.json())
	.then(response => console.log(response.formats[0].url))
	.catch(err => console.error(err));