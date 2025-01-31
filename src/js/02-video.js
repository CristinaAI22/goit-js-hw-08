import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);
player.on(
  'timeupdate',
  throttle(() => {
    player.getCurrentTime().then(seconds => {
      localStorage.setItem('videoplayer-current-time', seconds);
    });
  }, 1000)
);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  player.setCurrentTime(savedTime);
}
