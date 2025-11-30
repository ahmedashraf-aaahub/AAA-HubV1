/* --- 1. تهيئة مكتبة AOS (Animation On Scroll) --- */
document.addEventListener('DOMContentLoaded', () => {
    
    // تصحيح المشكلة: إعادة تشغيل AOS لضمان التفاعل في كل مرة
    AOS.init({
        duration: 1000,
        once: false, // تم التغيير إلى false لضمان التفاعل عند التمرير صعوداً ونزولاً
        offset: 50, 
    });

    // 2. تفعيل قائمة الهامبرغر في الجوال
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // إغلاق قائمة الجوال عند الضغط على رابط
    document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
            }
        });
    });

    // 3. شريط التنقل الثابت (Sticky Header)
    const header = document.getElementById('header');
    const logoImg = document.querySelector('.logo-img');
    
    // تصحيح المشكلة: جعل التغيير في الحجم أكثر سلاسة
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '5px 0';
            logoImg.style.height = '30px'; 
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '10px 0';
            logoImg.style.height = '40px'; 
            header.style.backgroundColor = 'white';
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
        }
    });

    // 4. Smooth Scrolling (التمرير السلس)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // 5. وظيفة إرسال النموذج عبر واتساب
    const whatsappNumber = '201002196772'; 
    const ctaWhatsapp = document.getElementById('cta-whatsapp-link'); // الزر في قسم CTA
    
    // ربط زر CTA بفتح محادثة واتساب
    ctaWhatsapp.addEventListener('click', function(e) {
        e.preventDefault();
        
        // رسالة مخصصة لطلب الاستفسار عن الاشتراك
        const whatsappMessage = `مرحباً، أود الاستفسار عن كورس العمل الحر الشامل بـ 12 مهارة والاشتراك مدى الحياة. أرجو تزويدي بالتفاصيل وطرق الدفع.`;
        
        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        
        window.open(whatsappURL, '_blank');
    });

});
