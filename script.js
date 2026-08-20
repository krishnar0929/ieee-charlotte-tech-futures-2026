// September 12, 2026 at 9:00 AM Eastern Daylight Time (UTC-4)
const eventTime = new Date('2026-09-12T09:00:00-04:00').getTime();

const els = {
  days: document.getElementById('days'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
  title: document.getElementById('countdown-title')
};

function twoDigits(value) {
  return String(value).padStart(2, '0');
}

function updateCountdown() {
  const now = Date.now();
  let distance = eventTime - now;

  if (distance <= 0) {
    els.days.textContent = '00';
    els.hours.textContent = '00';
    els.minutes.textContent = '00';
    els.seconds.textContent = '00';
    els.title.textContent = 'The event is underway';
    return;
  }

  const day = 1000 * 60 * 60 * 24;
  const hour = 1000 * 60 * 60;
  const minute = 1000 * 60;

  const days = Math.floor(distance / day);
  distance %= day;
  const hours = Math.floor(distance / hour);
  distance %= hour;
  const minutes = Math.floor(distance / minute);
  distance %= minute;
  const seconds = Math.floor(distance / 1000);

  els.days.textContent = twoDigits(days);
  els.hours.textContent = twoDigits(hours);
  els.minutes.textContent = twoDigits(minutes);
  els.seconds.textContent = twoDigits(seconds);
}

updateCountdown();
setInterval(updateCountdown, 1000);
