'use strict';

// タイマーのゴール（固定）
const endDate = new Date(2026, 7, 31, 0, 0, 0); // 仮：8/31 0:00（本番前に要設定）

function countdownTimer(){
  const now = new Date();
  let diff = endDate - now;

  if (diff >= 0) {

    // 日・時・分・秒・1/100秒
    const day = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= day * 1000 * 60 * 60 * 24;

    const hour = Math.floor(diff / (1000 * 60 * 60));
    diff -= hour * 1000 * 60 * 60;

    const minute = Math.floor(diff / (1000 * 60));
    diff -= minute * 1000 * 60;

    const second = Math.floor(diff / 1000);
    const hundredths = Math.floor((diff % 1000) / 10);

    const z = n => ('0' + n).slice(-2);

    const html =
      `<span class="time">
        終了<span class="s">まであと</span>
        <span class="jikan">
          ${day}日と
          ${z(hour)}時間
          ${z(minute)}分
          ${z(second)}秒
          ${z(hundredths)}
        </span>
      </span>`;

    document.getElementById('timer').innerHTML = html;

    setTimeout(countdownTimer, 10);

  } else {

    document.getElementById('timer').innerHTML =
      '<span class="owari">キャンペーンは終了しました</span>';

    // ボタン非表示
    document.querySelectorAll('.rp-annual-btn').forEach(btn => {
      btn.style.display = 'none';
    });
  }
}

countdownTimer();
