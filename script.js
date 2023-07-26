document.getElementById('save-button').addEventListener('click', function() {
    // Get input values
    var backgroundColor = document.getElementById('background-input').value;
    var fontFamily = document.getElementById('font-input').value;
    
    // Set styles
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.fontFamily = fontFamily;
    
    // Hardcoding links for now
    var links = ['Link 1', 'Link 2', 'Link 3'];
    
    // Clear existing links
    document.getElementById('links').innerHTML = '';
    
    // Add each link
    for (var i = 0; i < links.length; i++) {
        var link = document.createElement('a');
        link.href = '#';
        link.textContent = links[i];
        document.getElementById('links').appendChild(link);
    }
});
