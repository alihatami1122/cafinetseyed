/* --- PIN Protection Modal (by ChatGPT, fixed 2025) --- */
(function() {
    const REQUIRED_PIN = '1122'; // 🔒 رمز ثابت
    let lastAction = null;
    const bypassFlag = '__pinVerified';
    window[bypassFlag] = false;
  
    // --- ساخت استایل و مودال ---
    const style = document.createElement('style');
    style.textContent = `
      #pin-modal-overlay {
        position: fixed; inset: 0;
        background: rgba(0,0,0,0.85);
        display: none; align-items: center; justify-content: center;
        z-index: 99999;
      }
      #pin-modal {
        background: #fff; direction: rtl;
        width: min(420px, 90%);
        border-radius: 12px; box-shadow: 0 8px 30px rgba(0,0,0,0.4);
        padding: 20px; text-align: center; font-family: sans-serif;
      }
      #pin-modal h3 { margin: 8px 0 6px; font-size: 18px; }
      #pin-input {
        font-size: 20px; padding: 10px 12px;
        width: 100%; box-sizing: border-box;
        border-radius: 8px; border: 1px solid #ccc;
        text-align: center; letter-spacing: 6px; direction: ltr;
      }
      .pin-actions { display:flex; gap:10px; margin-top:12px; justify-content:center; }
      .pin-actions button {
        padding: 8px 12px; border-radius: 8px;
        border: none; cursor: pointer; min-width: 110px; font-size: 14px;
      }
      .pin-btn-ok { background:#2E8B57; color:#fff; }
      .pin-btn-cancel { background:#eee; color:#333; }
      #pin-error { color: #c00; margin-top:8px; font-size:13px; min-height:18px; }
      @media (prefers-color-scheme: dark) {
        #pin-modal { background: #111; color: #eee; border: 1px solid rgba(255,255,255,0.06); }
        .pin-btn-cancel { background:#222; color:#eee; }
      }
    `;
    document.head.appendChild(style);
  
    // --- HTML مودال ---
    const overlay = document.createElement('div');
    overlay.id = 'pin-modal-overlay';
    overlay.innerHTML = `
      <div id="pin-modal" role="dialog" aria-label="رمز ورود">
        <h3>ورود امن</h3>
        <p>لطفاً رمز ۴ رقمی را وارد کنید</p>
        <input id="pin-input" type="password" inputmode="numeric" maxlength="4" placeholder="••••">
        <div id="pin-error"></div>
        <div class="pin-actions">
          <button id="pin-ok" class="pin-btn-ok" disabled>تأیید</button>
          <button id="pin-cancel" class="pin-btn-cancel">انصراف</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
  
    const pinInput = document.getElementById('pin-input');
    const pinOk = document.getElementById('pin-ok');
    const pinCancel = document.getElementById('pin-cancel');
    const pinError = document.getElementById('pin-error');
  
    function showModal(callback) {
      lastAction = callback;
      overlay.style.display = 'flex';
      pinInput.value = '';
      pinError.textContent = '';
      pinOk.disabled = true;
      pinInput.focus();
    }
  
    function hideModal() {
      overlay.style.display = 'none';
      pinInput.value = '';
      pinError.textContent = '';
    }
  
    pinInput.addEventListener('input', () => {
      const v = pinInput.value.replace(/\D/g, '');
      pinInput.value = v;
      pinOk.disabled = (v.length !== 4);
      pinError.textContent = '';
    });
  
    pinCancel.onclick = hideModal;
  
    pinOk.onclick = () => {
      const code = pinInput.value.trim();
      if (code === REQUIRED_PIN) {
        window[bypassFlag] = true;
        hideModal();
        if (typeof lastAction === 'function') lastAction();
        lastAction = null;
      } else {
        pinError.textContent = 'رمز اشتباه است!';
        pinInput.value = '';
        pinOk.disabled = true;
        pinInput.focus();
      }
    };
  
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.style.display === 'flex') hideModal();
    });
  
    // --- رهگیری کلیک‌ها ---
    document.addEventListener('click', (e) => {
      if (window[bypassFlag]) return; // اگر قبلاً رمز وارد شده، نادیده بگیر
      const el = e.target.closest('a, button, input[type="submit"], input[type="button"], [role="button"]');
      if (!el || el.closest('#pin-modal')) return;
  
      e.preventDefault();
      e.stopPropagation();
  
      // بعد از تأیید رمز، عمل واقعی انجام می‌شود:
      showModal(() => {
        // simulate real click
        if (el.tagName === 'A' && el.href) {
          const target = el.getAttribute('target');
          if (target === '_blank') window.open(el.href, '_blank');
          else window.location.href = el.href;
        } else if (typeof el.click === 'function') {
          el.dataset.pinBypass = 'true'; // جلوگیری از حلقه
          el.click();
          delete el.dataset.pinBypass;
        }
      });
    }, true);
  })();
  