import React, { useEffect, useRef } from 'react';
import { MapPin, Clock, Home, Phone } from 'lucide-react';

// --- COMPONENTS ---

// 1. Hero Section (Rewritten as requested)
const Hero = () => {
  return (
    <header className="relative w-full h-screen overflow-hidden bg-gray-900">
      {/* Background Image with Slow Zoom Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="hero..JPG" 
          alt="Hoa Phượng & Quang Duy" 
          className="w-full h-full object-cover object-center animate-slow-zoom"
        />
        {/* Cinematic Gradient Overlay: Darker at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/80 opacity-90"></div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col items-center justify-between py-12 px-4 text-white text-center z-10">
        
        {/* TOP: Elegant Badge */}
        <div className="animate-fade-in-up mt-6 opacity-0" style={{ animationDelay: '0.2s' }}>
          <div className="inline-block border border-white/30 px-5 py-2 rounded-full backdrop-blur-md bg-white/5">
            <p className="uppercase tracking-[0.3em] text-[10px] font-medium font-sans text-white/90">
              Wedding Invitation
            </p>
          </div>
        </div>

        {/* MIDDLE: Spacer to keep faces clear */}
        <div className="flex-grow"></div>

        {/* BOTTOM: Typography Layout */}
        <div className="flex flex-col items-center justify-end pb-12 w-full max-w-md animate-fade-in-up opacity-0" style={{ animationDelay: '0.6s' }}>
          
          {/* Decorative Line */}
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/60 mb-6"></div>

          {/* Names */}
          <div className="relative mb-6">
            <h1 className="font-serif text-[3.5rem] leading-[0.9] md:text-7xl font-normal tracking-wide drop-shadow-lg">
              Hoa Phượng
            </h1>
            <div className="font-serif text-3xl my-2 italic text-white/80 font-light drop-shadow-md">
              &
            </div>
            <h1 className="font-serif text-[3.5rem] leading-[0.9] md:text-7xl font-normal tracking-wide drop-shadow-lg">
              Quang Duy
            </h1>
          </div>

          {/* Date Badge */}
          <div className="border-t border-b border-white/30 py-3 px-8 mt-2 backdrop-blur-sm bg-black/10">
             <p className="font-sans text-sm tracking-[0.4em] font-light text-white/90">
              31 · 12 · 2025
            </p>
          </div>
          
        </div>
      </div>
    </header>
  );
};

// 2. Intro Section
const Intro = () => {
  return (
    <section className="bg-paper py-20 px-8 text-center relative">
      {/* Visual Trick: Paper Edge */}
      <div className="absolute top-0 left-0 w-full h-16 -mt-8 bg-gradient-to-t from-paper to-transparent opacity-100"></div>
      
      <FadeInSection>
        <h2 className="font-serif italic text-5xl text-sage mb-8">Wedding Day</h2>
        
        <div className="bg-[#fdfbf7] p-8 border-l-2 border-gold my-10 mx-auto max-w-sm shadow-sm">
          <p className="font-serif italic text-dark/80 text-xl leading-relaxed">
            "Trở thành khoảnh khắc chúng ta ghi nhớ.<br />
            Chúng tôi trân trọng mời bạn đến chung vui và chứng kiến khoảnh khắc hai chúng tôi chính thức về chung một hành trình."
          </p>
        </div>

        <div className="space-y-4 font-sans font-light text-dark">
          <p className="uppercase tracking-widest text-xs text-sage font-bold">Trân trọng kính mời</p>
          <p className="font-medium text-2xl font-serif text-dark">Gia đình và bạn bè thân yêu</p>
          <p className="text-sm text-gray-500 max-w-xs mx-auto leading-loose">
            Sự hiện diện của bạn là niềm vinh hạnh lớn trong ngày trọng đại của chúng tôi.
          </p>
        </div>
      </FadeInSection>
    </section>
  );
};

// 3. Venue Section
const Venue = () => {
  return (
    <section className="bg-sand py-16 px-6">
      <FadeInSection>
        <div className="text-center mb-10 relative">
          <h3 className="font-serif text-4xl text-sage uppercase tracking-wide">Lễ Cưới & Tiệc</h3>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6"></div>
        </div>

        <div className="bg-white p-3 rounded-xl shadow-card mb-10 rotate-1 transform transition-transform duration-700 hover:rotate-0 hover:scale-[1.02]">
          <div className="overflow-hidden rounded-lg aspect-[4/3]">
            <img 
              src="venue.jpg" 
              alt="Aloha Beach Club" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>

        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="text-xs uppercase tracking-widest text-sage font-bold">Địa điểm</span>
          </div>
          
          <h2 className="font-serif text-4xl text-sage mb-2">Aloha Beach Club</h2>
          <p className="text-gray-600 mb-10 font-light tracking-wide">Novaworld Phan Thiết</p>

          <div className="grid grid-cols-2 gap-8 max-w-xs mx-auto relative">
             {/* Divider Line */}
            <div className="absolute top-1/2 left-1/2 w-[1px] h-12 bg-gray-300 -translate-x-1/2 -translate-y-1/2"></div>

            <div className="text-center group">
              <span className="block text-[10px] uppercase tracking-widest text-gold mb-2 font-bold group-hover:text-sage transition-colors">Lễ Cưới</span>
              <div className="font-serif text-3xl text-dark">16:00</div>
            </div>
            <div className="text-center group">
              <span className="block text-[10px] uppercase tracking-widest text-gold mb-2 font-bold group-hover:text-sage transition-colors">Tiệc Cưới</span>
              <div className="font-serif text-3xl text-dark">17:30</div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

// 4. Timeline Section
const Timeline = () => {
  return (
    <section className="bg-white py-20 px-6">
      <FadeInSection>
        <div className="text-center mb-12">
          <h3 className="font-serif text-4xl text-sage uppercase tracking-wide">Chương Trình</h3>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6 mb-8"></div>
          
          <div className="bg-sand/50 p-6 rounded-lg inline-block text-sm text-gray-600 leading-relaxed max-w-xs border border-sand">
            <span className="font-bold block mb-2 text-sage uppercase tracking-wider text-xs">Điểm tập trung</span>
            96 Võ Thành Trang, P. Bảy Hiền,<br/>TP. Hồ Chí Minh
            <div className="mt-4 pt-4 border-t border-gray-200 text-xs text-gray-500 flex items-center justify-center gap-2">
                <Clock className="w-3 h-3" />
                <span className="font-medium">Xuất phát: 7:30 Sáng</span>
            </div>
          </div>
        </div>

        <div className="max-w-sm mx-auto pl-4">
          {/* Day 1 */}
          <div className="relative border-l border-gold/30 ml-2">
            <div className="bg-sage text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 inline-block mb-10 -ml-6 shadow-md rounded-r-full">
              Ngày 31/12/2025
            </div>

            <TimelineItem time="08:00" title="Xuất phát đi Phan Thiết" />
            <TimelineItem time="12:00" title="Tập trung tại Phan Thiết" />
            <TimelineItem time="12:30" title="Ăn trưa" />
            <TimelineItem time="14:00" title="Nhận phòng & Nghỉ ngơi" />
            <TimelineItem time="15:30" title="Đón khách" />
            <TimelineItem time="16:00 - 17:00" title="LỄ CƯỚI" highlight />
            <TimelineItem time="17:30" title="TIỆC CƯỚI" highlight />
          </div>

          {/* Day 2 */}
          <div className="relative border-l border-gold/30 ml-2 mt-10">
             <div className="bg-gold text-white text-[10px] font-bold uppercase tracking-widest py-1.5 px-4 inline-block mb-10 -ml-6 shadow-md rounded-r-full">
              Ngày hôm sau
            </div>

            <TimelineItem time="07:30" title="Ăn sáng" />
            <TimelineItem time="10:00" title="Check-out" />
            <TimelineItem time="13:30" title="Trở về TP.HCM" />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

const TimelineItem = ({ time, title, highlight = false }: { time: string, title: string, highlight?: boolean }) => (
  <div className="relative pl-8 pb-10 last:pb-0 group">
    <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full border-2 z-10 -translate-x-[7px] transition-all duration-300 group-hover:scale-125 ${highlight ? 'bg-sage border-sage' : 'bg-white border-gold'}`}></div>
    <div className={`${highlight ? 'text-sage font-bold' : 'text-gray-400 font-medium'} text-xs mb-1 font-sans tracking-wider`}>{time}</div>
    <div className={`font-serif text-xl ${highlight ? 'text-sage font-semibold scale-105 origin-left' : 'text-dark'} transition-transform duration-300`}>{title}</div>
  </div>
);

// 5. Accommodation Section
const Accommodation = () => {
  return (
    <section className="bg-sand py-20 px-6">
      <FadeInSection>
        {/* Card */}
        <div className="bg-white p-10 rounded-lg shadow-soft border border-gray-100 text-center mb-12 relative overflow-hidden group hover:shadow-card transition-shadow duration-500">
            <div className="absolute top-0 left-0 w-full h-1 bg-sage"></div>
            <div className="flex justify-center mb-6 text-gold group-hover:scale-110 transition-transform duration-500">
                <Home className="w-8 h-8" />
            </div>
          <h3 className="font-serif text-3xl text-sage mb-4">Lưu Trú</h3>
          <p className="font-bold text-xl text-sage mb-2">Villa LFP</p>
          <p className="text-gray-600 font-light">Khu Biệt thự Florida<br />Novaworld Phan Thiết</p>
        </div>

        {/* Notes */}
        <div>
          <h4 className="text-center font-sans text-[10px] uppercase tracking-[0.25em] mb-8 text-gray-500 font-bold">Lưu Ý Nhỏ</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <NoteItem icon="👗" text="Trang phục thoải mái" />
            <NoteItem icon="👡" text="Ưu tiên giày thấp/sandal" />
            <NoteItem icon="❌" text="Không yêu cầu Dress Code" />
            <NoteItem icon="🛺" text="Xe điện: 08:00 - 18:00" />
          </div>
        </div>
      </FadeInSection>
    </section>
  );
};

const NoteItem = ({ icon, text }: { icon: string, text: string }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm text-center flex flex-col items-center justify-center gap-3 border border-transparent hover:border-gold/30 hover:shadow-md transition-all duration-300">
      <span className="text-2xl filter saturate-0 hover:saturate-100 transition-all">{icon}</span>
      <span className="text-xs font-medium text-gray-600">{text}</span>
  </div>
);

// 6. RSVP Section
const RSVP = () => {
  return (
    <section className="bg-white py-20 px-6">
      <FadeInSection>
        <div className="text-center mb-12">
          <h3 className="font-serif text-4xl text-sage uppercase tracking-wide">Xác Nhận Tham Dự</h3>
          <div className="w-12 h-[1px] bg-gold mx-auto mt-6"></div>
        </div>

        <form 
          action="https://formspree.io/f/xzznqdzo" 
          method="POST" 
          className="max-w-sm mx-auto space-y-6"
        >
          <InputGroup label="Họ và tên" name="Tên" required />
          <InputGroup label="Số điện thoại" name="SĐT" type="tel" required />
          <InputGroup label="Người đi cùng" name="Người đi cùng" />
          
          <div className="grid grid-cols-2 gap-5">
            <InputGroup label="Số người lớn" name="Số người lớn" type="number" />
            <InputGroup label="Số trẻ em" name="Số trẻ em" type="number" />
          </div>

          <div>
             <label className="block text-[10px] uppercase tracking-widest text-sage font-bold mb-2">
                Chiều cao & tuổi của trẻ em
            </label>
            <textarea 
                name="Chiều cao & tuổi trẻ em"
                placeholder="Ví dụ: Bé A – 110cm – 4 tuổi"
                className="w-full p-4 bg-sand border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm rounded-md h-28 resize-none placeholder:text-gray-400 placeholder:font-light"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-sage text-white font-bold tracking-[0.2em] text-sm uppercase hover:bg-sage/90 transition-all shadow-lg hover:shadow-xl rounded-sm mt-6 transform hover:-translate-y-1 active:translate-y-0"
          >
            Gửi Xác Nhận
          </button>
        </form>
      </FadeInSection>
    </section>
  );
};

const InputGroup = ({ label, name, type = "text", required = false }: { label: string, name: string, type?: string, required?: boolean }) => (
  <div>
    <label className="block text-[10px] uppercase tracking-widest text-sage font-bold mb-2">
      {label} {required && <span className="text-red-400">*</span>}
    </label>
    <input 
      type={type} 
      name={name} 
      required={required} 
      min={type === 'number' ? 0 : undefined}
      className="w-full p-4 bg-sand border border-gray-200 focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-all text-sm rounded-md" 
    />
  </div>
);

// 7. Footer Section
const Footer = () => {
  return (
    <footer className="bg-sage text-white py-20 px-6 text-center relative overflow-hidden">
        {/* Texture Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/noise-lines.png')] opacity-10"></div>
        
      <FadeInSection>
        <h2 className="font-serif text-5xl mb-8 tracking-wide">Thank You</h2>
        <p className="text-white/80 font-light mb-12 max-w-xs mx-auto leading-relaxed">
          Một ngày trọng đại sẽ không trọn vẹn nếu thiếu sự hiện diện của bạn.
        </p>
        
        <div className="border-t border-white/20 pt-10 max-w-xs mx-auto mb-12">
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-70 mb-3">Liên hệ hỗ trợ</p>
          <p className="text-2xl font-serif font-medium mb-6">Ms Hân</p>
          <a 
            href="tel:0896108138" 
            className="inline-flex items-center gap-3 px-8 py-3 border border-white/40 text-sm hover:bg-white hover:text-sage transition-all rounded-full hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            <Phone className="w-4 h-4" />
            <span className="tracking-wider">0896 108 138</span>
          </a>
        </div>

        <p className="font-serif italic text-xl opacity-60">
          Hoa Phượng & Quang Duy
        </p>
      </FadeInSection>
    </footer>
  );
};

// --- UTILITIES ---

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  const domRef = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {children}
    </div>
  );
};

// --- MAIN APP ---

const App = () => {
  return (
    <div className="max-w-[480px] mx-auto bg-sand shadow-2xl overflow-hidden min-h-screen relative font-sans">
      <Hero />
      <Intro />
      <Venue />
      <Timeline />
      <Accommodation />
      <RSVP />
      <Footer />
    </div>
  );
};

export default App;