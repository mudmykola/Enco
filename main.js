document.addEventListener('DOMContentLoaded', function () {
    const audioElements = document.querySelectorAll('audio');

    if (audioElements.length > 0) {
        audioElements.forEach(function (audio) {
            new MediaElementPlayer(audio, {
                alwaysShowControls: true,
                features: ['playpause', 'current', 'progress', 'duration', 'volume'],
                audioVolume: 'vertical',
                audioWidth: 445,
                audioHeight: 35
            });
        });
    }
});