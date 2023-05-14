<script>

    let animes = [
		{ id: 0, name: 'Jujutsu no Kaisen', episodes: [
            {number: 1, url:'https://gogodownload.net/download.php?url=aHR0cHM6LyURASDGHUSRFSJGYfdsffsderFStewthsfSFtrfteAdeqwrwedffryretgsdFrsftrsvfsfsrsdf83dXNsZnV3ZzYzLmdvY2RuYW5pLmNvbS91c2VyMTM0Mi9mMTM1MGFiMGRlNzEyMTIyZDYzMmNlYWI4ODE5N2ExOS9FUC4xLnYwLjE2ODA2MjkxMTMuNDgwcC5tcDQ/dG9rZW49XzRkSTgyeFBDcm8zOWJSZE5mYXRWQSZleHBpcmVzPTE2ODMwNjQyOTgmaWQ9MjAyMTg5'},
            {number: 2, url:'https://gogodownload.net/download.php?url=aHR0cHM6LyURASDGHUSRFSJGYfdsffsderFStewthsfSFtrfteAdeqwrwedffryretgsdFrsftrsvfsfsrsdf83dXNsZnV3ZzYzLmdvY2RuYW5pLmNvbS91c2VyMTM0Mi9mMTM1MGFiMGRlNzEyMTIyZDYzMmNlYWI4ODE5N2ExOS9FUC4xLnYwLjE2ODA2MjkxMTMuNDgwcC5tcDQ/dG9rZW49XzRkSTgyeFBDcm8zOWJSZE5mYXRWQSZleHBpcmVzPTE2ODMwNjQyOTgmaWQ9MjAyMTg5'} 
        ] },
		{ id: 1, name: 'Magi', episodes: [
            {number: 1, url:'https://gogodownload.net/download.php?url=aHR0cHM6LyURASDGHUSRFSJGYfdsffsderFStewthsfSFtrfteAdeqwrwedffryretgsdFrsftrsvfsfsrsdf83dXNsZnV3ZzYzLmdvY2RuYW5pLmNvbS91c2VyMTM0Mi9mMTM1MGFiMGRlNzEyMTIyZDYzMmNlYWI4ODE5N2ExOS9FUC4xLnYwLjE2ODA2MjkxMTMuNDgwcC5tcDQ/dG9rZW49XzRkSTgyeFBDcm8zOWJSZE5mYXRWQSZleHBpcmVzPTE2ODMwNjQyOTgmaWQ9MjAyMTg5'},
            {number: 2, url:'https://gogodownload.net/download.php?url=aHR0cHM6LyURASDGHUSRFSJGYfdsffsderFStewthsfSFtrfteAdeqwrwedffryretgsdFrsftrsvfsfsrsdf83dXNsZnV3ZzYzLmdvY2RuYW5pLmNvbS91c2VyMTM0Mi9mMTM1MGFiMGRlNzEyMTIyZDYzMmNlYWI4ODE5N2ExOS9FUC4xLnYwLjE2ODA2MjkxMTMuNDgwcC5tcDQ/dG9rZW49XzRkSTgyeFBDcm8zOWJSZE5mYXRWQSZleHBpcmVzPTE2ODMwNjQyOTgmaWQ9MjAyMTg5'} 
        ] }
	];

    var selectedAnime = animes[0];
    var selectedAnimeEpisode = selectedAnime.episodes[0];

    // var video = this.document.getElementById('video');
    // var source = this.document.createElement('source');

    // source.setAttribute('src', 'https://gogodownload.net/download.php?url=aHR0cHM6LyURASDGHUSRFSJGYfdsffsderFStewthsfSFtrfteAdeqwrwedffryretgsdFrsftrsvfsfsrsdf83dXNsZnV3ZzYzLmdvY2RuYW5pLmNvbS91c2VyMTM0Mi9mMTM1MGFiMGRlNzEyMTIyZDYzMmNlYWI4ODE5N2ExOS9FUC4xLnYwLjE2ODA2MjkxMTMuNDgwcC5tcDQ/dG9rZW49XzRkSTgyeFBDcm8zOWJSZE5mYXRWQSZleHBpcmVzPTE2ODMwNjQyOTgmaWQ9MjAyMTg5');
    // source.setAttribute('type', 'video/webm');

    // video.appendChild(source);

    // video.oncanplay = () => canPlay();
    // video.onplay = () => openFullscreen();
    // video.onended = () => exitFullscreen();



    // function canPlay(){
    //     video.play();
    //     openFullscreen();
    // }

    // function openFullscreen() {
    //     if (video.requestFullscreen) {
    //         video.requestFullscreen();
    //     } else if (video.webkitRequestFullscreen) { /* Safari */
    //         video.webkitRequestFullscreen();
    //     } else if (video.msRequestFullscreen) { /* IE11 */
    //         video.msRequestFullscreen();
    //     }
    // }

    // function exitFullscreen() {
    //     if(document.exitFullscreen) {
    //     document.exitFullscreen();
    //     } else if(document.mozCancelFullScreen) {
    //     document.mozCancelFullScreen();
    //     } else if(document.webkitExitFullscreen) {
    //     document.webkitExitFullscreen();
    //     }
    // }

</script>

<div>
    <p>{selectedAnime.name} : Episode {selectedAnimeEpisode.number}</p>
    <video controls id="video" type='video/webm' src={selectedAnimeEpisode.url} width="50%" height="50%">
        <track kind="captions">
    </video>
</div>


<ul>
	{#each animes as anime}
        <p>{anime.name}</p>
	    {#each anime.episodes as episode}
            <li>
                <video controls id="video" type='video/webm' src={episode.url} width="50%" height="50%">
                    <track kind="captions">
                </video>
            </li>
	    {/each}
	{/each}
</ul>