function showSection(section) {
    document.getElementById('home').classList.add('hidden');
    document.getElementById('love-notes').classList.add('hidden');
    document.getElementById('heart-gallery').classList.add('hidden');
    
    document.getElementById(section).classList.remove('hidden');
}
