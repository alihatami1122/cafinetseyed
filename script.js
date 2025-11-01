// سیستم ورود
function checkLogin() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      document.getElementById('login-modal').style.display = 'none';
      document.getElementById('main-content').style.display = 'block';
    } else {
      document.getElementById('login-modal').style.display = 'flex';
      document.getElementById('main-content').style.display = 'none';
      // اطمینان از خالی بودن فیلدها
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
    }
  }
  
  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // فقط نام کاربری و رمز عبور مشخص شده قابل قبول است
    if (username === '09029191722' && password === 'ali@44332211') {
      localStorage.setItem('isLoggedIn', 'true');
      checkLogin();
    } else {
      alert('نام کاربری یا رمز عبور اشتباه است!');
      // پاک کردن فیلدها پس از ورود ناموفق
      document.getElementById('username').value = '';
      document.getElementById('password').value = '';
    }
  }
  
  function logout() {
    localStorage.removeItem('isLoggedIn');
    checkLogin();
  }
  
  // نمایش زمان و تاریخ ایران
  function updateIranTime() {
    const now = new Date();
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      weekday: 'long'
    };
    
    const timeString = now.toLocaleTimeString('fa-IR');
    const dateString = now.toLocaleDateString('fa-IR', options);
    
    document.getElementById('time-date').innerHTML = 
      `<div>${dateString}</div><div>${timeString}</div>`;
  }
  
  // به‌روزرسانی زمان هر ثانیه
  setInterval(updateIranTime, 1000);
  updateIranTime();
  
  // باز کردن سرویس‌های خارجی
  function openService(url) {
    // باز کردن در تب جدید
    window.open(url, '_blank');
  }
  
  // مودال نظر سنجی
  function openSurvey(){
    document.getElementById('survey').style.display='flex';
    document.getElementById('survey').setAttribute('aria-hidden','false');
  }
  
  function closeSurvey(){
    document.getElementById('survey').style.display='none';
    document.getElementById('survey').setAttribute('aria-hidden','true');
  }
  
  function vote(choice){
    alert('نظر شما ثبت شد: ' + choice + '\nاز وقتی که گذاشتید متشکریم!');
    closeSurvey();
  }
  
  // مودال کلانتری
  function openPoliceModal(){
    document.getElementById('police-modal').style.display='flex';
    document.getElementById('police-modal').setAttribute('aria-hidden','false');
  }
  
  function closePoliceModal(){
    document.getElementById('police-modal').style.display='none';
    document.getElementById('police-modal').setAttribute('aria-hidden','true');
    // پاک کردن فرم
    document.getElementById('police-form').reset();
  }
  
  // مودال دهیاری
  function openDehyariModal(){
    document.getElementById('dehyari-modal').style.display='flex';
    document.getElementById('dehyari-modal').setAttribute('aria-hidden','false');
  }
  
  function closeDehyariModal(){
    document.getElementById('dehyari-modal').style.display='none';
    document.getElementById('dehyari-modal').setAttribute('aria-hidden','true');
    // پاک کردن فرم
    document.getElementById('dehyari-form').reset();
  }
  
  // مودال شورای شهر
  function openShoraModal(){
    document.getElementById('shora-modal').style.display='flex';
    document.getElementById('shora-modal').setAttribute('aria-hidden','false');
  }
  
  function closeShoraModal(){
    document.getElementById('shora-modal').style.display='none';
    document.getElementById('shora-modal').setAttribute('aria-hidden','true');
    // پاک کردن فرم
    document.getElementById('shora-form').reset();
  }
  
  // مودال اظهارنامه قضایی
  function openEzharModal(){
    document.getElementById('ezhar-modal').style.display='flex';
    document.getElementById('ezhar-modal').setAttribute('aria-hidden','false');
  }
  
  function closeEzharModal(){
    document.getElementById('ezhar-modal').style.display='none';
    document.getElementById('ezhar-modal').setAttribute('aria-hidden','true');
  }
  
  // مودال لایحه
  function openLayeheModal(){
    document.getElementById('layehe-modal').style.display='flex';
    document.getElementById('layehe-modal').setAttribute('aria-hidden','false');
  }
  
  function closeLayeheModal(){
    document.getElementById('layehe-modal').style.display='none';
    document.getElementById('layehe-modal').setAttribute('aria-hidden','true');
  }
  
  // مودال قرارداد
  function openContractModal(){
    document.getElementById('contract-modal').style.display='flex';
    document.getElementById('contract-modal').setAttribute('aria-hidden','false');
  }
  
  function closeContractModal(){
    document.getElementById('contract-modal').style.display='none';
    document.getElementById('contract-modal').setAttribute('aria-hidden','true');
  }
  
  // تکمیل خودکار تاریخ و زمان
  function fillDateTime(fieldId) {
    const now = new Date();
    const dateString = now.toLocaleDateString('fa-IR');
    const timeString = now.toLocaleTimeString('fa-IR');
    
    document.getElementById(fieldId).value = `${dateString} - ${timeString}`;
  }
  
  // تولید متن کامل توسط هوش مصنوعی برای کلانتری
  function generatePoliceRequest() {
    const name = document.getElementById('police-name').value;
    const requestNumber = document.getElementById('police-request-number').value;
    const subject = document.getElementById('police-subject').value;
    const details = document.getElementById('police-details').value;
    
    if (!name || !requestNumber || !subject) {
      alert('لطفاً فیلدهای ضروری (نام، شماره درخواست و موضوع) را پر کنید');
      return;
    }
    
    // متن کامل تولید شده توسط هوش مصنوعی
    const generatedText = `با درود و احترام،
  
  اینجانب ${name} با شماره درخواست ${requestNumber}، با کمال احترام و ادب به استحضار می‌رسانم که:
  
  موضوع درخواست/شکایت: ${subject}
  
  ${details ? `مشخصات طرف مقابل: ${details}` : ''}
 
با توجه به اهمیت موضوع مذکور و با تکیه بر تجربیات و درایت جناب عالی و همکاران محترم، استدعا دارد دستور فرمایید بررسی‌های لازم و کارشناسی در این خصوص به عمل آمده و اقدامات مقتضی جهت رفع مشکل و تأمین آرامش و امنیت شهروندان انجام پذیرد.

اینجانب آمادگی کامل جهت ارائه هرگونه مدرک، شاهد و توضیحات تکمیلی را اعلام می‌دارم.
امیدوارم با عنایت به حسن عملکرد و تعامل سازنده کلانتری محترم، این موضوع در اسرع وقت به صورت شایسته پیگیری و حل گردد.
  با سپاس و احترام فراوان
  
  ${name}
  تاریخ: ${new Date().toLocaleDateString('fa-IR')}`;
    
    document.getElementById('police-request-text').value = generatedText;
  }
  
  // تولید متن کامل توسط هوش مصنوعی برای دهیاری
  function generateDehyariRequest() {
    const name = document.getElementById('dehyari-name').value;
    const requestNumber = document.getElementById('dehyari-request-number').value;
    const subject = document.getElementById('dehyari-subject').value;
    const details = document.getElementById('dehyari-details').value;
    
    if (!name || !requestNumber || !subject) {
      alert('لطفاً فیلدهای ضروری (نام، شماره درخواست و موضوع) را پر کنید');
      return;
    }
    
    // متن کامل تولید شده توسط هوش مصنوعی
    const generatedText = `با درود و احترام،
  
  اینجانب ${name} با شماره درخواست ${requestNumber}، با کمال احترام و ادب به استحضار می‌رسانم که:
  
  موضوع درخواست: ${subject}
  
  ${details ? `مشخصات کامل: ${details}` : ''}
  
  به عنوان یکی از ساکنین محترم و دلسوز روستای سراوان، این درخواست را با توجه به قوانین و مقررات مربوط به شوراهای اسلامی روستا و دهیاری‌ها تقدیم حضور می‌نمایم.
  
  شرح کامل درخواست:
  با توجه به موقعیت جغرافیایی و شرایط خاص روستای سراوان، ${subject} که از اهمیت ویژه‌ای برای بهبود کیفیت زندگی ساکنین برخوردار است. این جانب پس از بررسی دقیق و مشورت با دیگر هم‌محلی‌های عزیز، نیاز به توجه و اقدام فوری در این زمینه را  خواستارم.
  
    درخواست اقدام فوری:
  با عنایت به وظایف محوله به دهیاری محترم طبق قوانین فوق، خواهشمند است دستور فرمایید اقدامات لازم در این خصوص صورت پذیرد

  پیشاپیش از همکاری و مساعدت جنابعالی کمال تشکر را دارم.
 امیدوارم با همکاری و مساعدت دهیاری محترم، گام مؤثری در جهت بهبود وضعیت و رفاه ساکنین روستا برداشته شود.
  
    با تشکر و سپاس فراوان
  ${name}
  تاریخ: ${new Date().toLocaleDateString('fa-IR')}`;
    
    document.getElementById('dehyari-request-text').value = generatedText;
  }
  
  // تولید متن کامل توسط هوش مصنوعی برای شورای شهر
  function generateShoraRequest() {
    const name = document.getElementById('shora-name').value;
    const requestNumber = document.getElementById('shora-request-number').value;
    const subject = document.getElementById('shora-subject').value;
    const details = document.getElementById('shora-details').value;
    
    if (!name || !requestNumber || !subject) {
      alert('لطفاً فیلدهای ضروری (نام، شماره درخواست و موضوع) را پر کنید');
      return;
    }
    
    // متن کامل تولید شده توسط هوش مصنوعی
    const generatedText = `با درود و احترام،
  
  اینجانب ${name} با شماره درخواست ${requestNumber}، با کمال احترام و ادب به استحضار می‌رسانم که:
  
  موضوع درخواست: ${subject}
  
  ${details ? `مشخصات کامل: ${details}` : ''}
  
  به عنوان یکی از شهروندان محترم و دلسوز، این درخواست را با توجه به قوانین و مقررات مربوط به شوراهای اسلامی شهر تقدیم حضور می‌نمایم.
  
  شرح کامل درخواست:
  با توجه به موقعیت و شرایط منطقه، ${subject} که از اهمیت ویژه‌ای برای شهروندان برخوردار است. این جانب پس از بررسی دقیق و مشورت با دیگر همشهریان عزیز، نیاز به توجه و اقدام فوری در این زمینه را  خواستارم.
  
 
  درخواست اقدام فوری:
  با عنایت به وظایف محوله به شورای محترم شهر طبق قوانین فوق، خواهشمند است دستور فرمایید اقدامات لازم در این خصوص صورت پذیرد

  پیشاپیش از همکاری و مساعدت جنابعالی کمال تشکر را دارم.  امیدوارم با همکاری و مساعدت شورای محترم شهر، گام مؤثری در جهت بهبود وضعیت و رفاه شهروندان برداشته شود.
    
  با تشکر و سپاس فراوان
  ${name}
  تاریخ: ${new Date().toLocaleDateString('fa-IR')}`;
    
    document.getElementById('shora-request-text').value = generatedText;
  }
  
  // پرینت فرم کلانتری
  function printPoliceForm() {
    const name = document.getElementById('police-name').value;
    const requestNumber = document.getElementById('police-request-number').value;
    const subject = document.getElementById('police-subject').value;
    const date = document.getElementById('police-date').value;
    const details = document.getElementById('police-details').value;
    const requestText = document.getElementById('police-request-text').value;
    
    if (!name || !requestNumber || !subject || !date || !requestText) {
      alert('لطفاً تمام فیلدهای ضروری را پر کنید');
      return;
    }
    
    const printContent = `
      <div style="font-family: 'Vazirmatn', Tahoma; direction: rtl; padding: 20px;">
        <h2 style="text-align: center; color: #c69f00;">فرم درخواست از کلانتری سراوان رشت</h2>
        <p><strong>نام و نام خانوادگی:</strong> ${name}</p>
        <p><strong>شماره درخواست:</strong> ${requestNumber}</p>
        <p><strong>موضوع درخواست/شکایت:</strong> ${subject}</p>
        <p><strong>تاریخ و ساعت:</strong> ${date}</p>
        ${details ? `<p><strong>مشخصات طرف مقابل:</strong> ${details}</p>` : ''}
        <div style="margin-top: 20px;">
          <p><strong>متن کامل درخواست/شکایت:</strong></p>
          <div style="border: 1px solid #ccc; padding: 15px; border-radius: 5px; background: #f9f9f9;">
            ${requestText.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div style="margin-top: 40px; text-align: left;">
          <p>امضا: _______________</p>
          <p>تاریخ: _______________</p>
        </div>
      </div>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>پرینت فرم کلانتری</title>
          <style>
            body { font-family: 'Vazirmatn', Tahoma; direction: rtl; }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }
  
  // پرینت فرم دهیاری
  function printDehyariForm() {
    const name = document.getElementById('dehyari-name').value;
    const requestNumber = document.getElementById('dehyari-request-number').value;
    const subject = document.getElementById('dehyari-subject').value;
    const date = document.getElementById('dehyari-date').value;
    const details = document.getElementById('dehyari-details').value;
    const requestText = document.getElementById('dehyari-request-text').value;
    
    if (!name || !requestNumber || !subject || !date || !requestText) {
      alert('لطفاً تمام فیلدهای ضروری را پر کنید');
      return;
    }
    
    const printContent = `
      <div style="font-family: 'Vazirmatn', Tahoma; direction: rtl; padding: 20px;">
        <h2 style="text-align: center; color: #c69f00;">فرم درخواست از دهیاری سراوان</h2>
        <p><strong>نام و نام خانوادگی:</strong> ${name}</p>
        <p><strong>شماره درخواست:</strong> ${requestNumber}</p>
        <p><strong>موضوع درخواست:</strong> ${subject}</p>
        <p><strong>تاریخ و ساعت:</strong> ${date}</p>
        ${details ? `<p><strong>مشخصات کامل:</strong> ${details}</p>` : ''}
        <div style="margin-top: 20px;">
          <p><strong>متن کامل درخواست:</strong></p>
          <div style="border: 1px solid #ccc; padding: 15px; border-radius: 5px; background: #f9f9f9;">
            ${requestText.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div style="margin-top: 40px; text-align: left;">
          <p>امضا: _______________</p>
          <p>تاریخ: _______________</p>
        </div>
      </div>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>پرینت فرم دهیاری</title>
          <style>
            body { font-family: 'Vazirmatn', Tahoma; direction: rtl; }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }
  
  // پرینت فرم شورای شهر
  function printShoraForm() {
    const name = document.getElementById('shora-name').value;
    const requestNumber = document.getElementById('shora-request-number').value;
    const subject = document.getElementById('shora-subject').value;
    const date = document.getElementById('shora-date').value;
    const details = document.getElementById('shora-details').value;
    const requestText = document.getElementById('shora-request-text').value;
    
    if (!name || !requestNumber || !subject || !date || !requestText) {
      alert('لطفاً تمام فیلدهای ضروری را پر کنید');
      return;
    }
    
    const printContent = `
      <div style="font-family: 'Vazirmatn', Tahoma; direction: rtl; padding: 20px;">
        <h2 style="text-align: center; color: #c69f00;">فرم درخواست از شورای شهر</h2>
        <p><strong>نام و نام خانوادگی:</strong> ${name}</p>
        <p><strong>شماره درخواست:</strong> ${requestNumber}</p>
        <p><strong>موضوع درخواست:</strong> ${subject}</p>
        <p><strong>تاریخ و ساعت:</strong> ${date}</p>
        ${details ? `<p><strong>مشخصات کامل:</strong> ${details}</p>` : ''}
        <div style="margin-top: 20px;">
          <p><strong>متن کامل درخواست:</strong></p>
          <div style="border: 1px solid #ccc; padding: 15px; border-radius: 5px; background: #f9f9f9;">
            ${requestText.replace(/\n/g, '<br>')}
          </div>
        </div>
        <div style="margin-top: 40px; text-align: left;">
          <p>امضا: _______________</p>
          <p>تاریخ: _______________</p>
        </div>
      </div>
    `;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>پرینت فرم شورای شهر</title>
          <style>
            body { font-family: 'Vazirmatn', Tahoma; direction: rtl; }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }
  
  // پرینت فرم اظهارنامه
  function printEzharForm() {
    const printContent = document.getElementById('ezhar-content').innerHTML;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>پرینت اظهارنامه قضایی</title>
          <style>
            body { font-family: 'Vazirmatn', Tahoma; direction: rtl; padding: 20px; }
            .print-content { border: 1px solid #ccc; padding: 20px; }
            h3 { text-align: center; color: #c69f00; }
            p { margin-bottom: 10px; line-height: 1.8; }
            .text-area { margin: 15px 0; padding: 10px; border: 1px dashed #ccc; }
            .signature { margin-top: 30px; text-align: left; }
          </style>
        </head>
        <body>
          <div class="print-content">
            ${printContent}
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }
  
  // پرینت فرم لایحه
  function printLayeheForm() {
    const printContent = document.getElementById('layehe-content').innerHTML;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>پرینت لایحه</title>
          <style>
            body { font-family: 'Vazirmatn', Tahoma; direction: rtl; padding: 20px; }
            .print-content { border: 1px solid #ccc; padding: 20px; }
            h3 { text-align: center; color: #c69f00; }
            p { margin-bottom: 10px; line-height: 1.8; }
            .text-area { margin: 15px 0; padding: 10px; border: 1px dashed #ccc; }
            .signature { margin-top: 30px; text-align: left; }
          </style>
        </head>
        <body>
          <div class="print-content">
            ${printContent}
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }
  
  // پرینت فرم قرارداد
  function printContractForm() {
    const printContent = document.getElementById('contract-content').innerHTML;
    
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>پرینت قرارداد خرید و فروش</title>
          <style>
            body { font-family: 'Vazirmatn', Tahoma; direction: rtl; padding: 20px; }
            .print-content { border: 1px solid #ccc; padding: 20px; }
            h3 { text-align: center; color: #c69f00; }
            p { margin-bottom: 10px; line-height: 1.8; }
            .text-area { margin: 15px 0; padding: 10px; border: 1px dashed #ccc; }
            .signature { margin-top: 30px; text-align: left; }
          </style>
        </head>
        <body>
          <div class="print-content">
            ${printContent}
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }
  
  // (اختیاری) smooth scroll برای منو
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href=this.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const t=document.querySelector(href);
        if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
      }
    });
  });
  
  // بررسی وضعیت ورود هنگام بارگذاری صفحه
  window.addEventListener('load', function() {
    checkLogin();
    console.log('کافی نت آنلاین — خوش آمدید!');
  });
  