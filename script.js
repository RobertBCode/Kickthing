const streamList = document.getElementById("stream-list");
async function fetchStreams() {
    const response = await fetch("https://api.kick.com/streams"); // Replace with actual API endpoint
    const data = await response.json();
    displayStreams(data.streams);
}
function displayStreams(streams) {
    streamList.innerHTML = '';
    streams.forEach(stream => {
        const streamDiv = document.createElement('div');
        streamDiv.classList.add('stream');
        streamDiv.innerHTML = 
            <h3>${stream.title}</h3>
            <p>Streamer: ${stream.streamer}</p>
            <p>Viewers: ${stream.viewers}</p>
            <a href="${stream.url}" target="_blank">Watch Now</a>
        ;
        streamList.appendChild(streamDiv);
    });
}
// Add search functionality
document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const streams = document.querySelectorAll('.stream');
    
    streams.forEach(stream => {
        const title = stream.querySelector('h3').textContent.toLowerCase();
        const streamer = stream.querySelector('p').textContent.toLowerCase();
        stream.style.display = (title.includes(searchTerm) || streamer.includes(searchTerm)) ? 'block' : 'none';
    });
});
// Call the fetch function when the page loads
window.onload = fetchStreams;

            <h3>${stream.title}</h3>
            <p>Streamer: ${stream.streamer}</p>
            <p>Viewers: ${stream.viewers}</p>
            <a href="${stream.url}" target="_blank">Watch Now</a>
        
