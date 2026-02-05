# Brothers Cafe - Gen-Z Cafe Website

A premium, production-ready website for Brothers Cafe Nagpur - Nagpur's loudest Gen-Z hangout spot.

## 🚀 Features

- **Modern Gen-Z Design**: Dark theme with neon orange accents
- **Smooth Animations**: Framer Motion powered interactions
- **Fully Responsive**: Mobile-first design
- **AI Chatbot**: Bilingual support (English & Marathi)
- **Interactive Sections**:
  - Hero with animated taglines
  - About story with emotional narrative
  - Menu preview with hover effects
  - Gallery with image overlays
  - Contact with Google Maps
  - Social media integration

## 🛠️ Tech Stack

- **React 18** with Vite
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **OpenAI API** for chatbot (via Anthropic proxy)

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Configure OpenAI API (for chatbot):
```bash
cp .env.example .env
# Edit .env and add your OpenAI API key
```

3. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
- `neon-orange`: Main accent color
- `dark-bg`: Background color
- `dark-card`: Card background

### Content
- **Menu Items**: Edit `src/components/MenuPreview.jsx`
- **Gallery**: Update `src/components/Gallery.jsx`
- **Contact Info**: Modify `src/components/Contact.jsx`
- **About Story**: Change `src/components/About.jsx`

### Chatbot
The chatbot uses the Anthropic API. The system prompt is in `src/components/Chatbot.jsx`.

## 📱 Sections

1. **Hero** - Bold landing with animated text
2. **About** - Brothers' story with emotional copy
3. **Menu Preview** - Showcasing top items
4. **Gallery** - Visual showcase with hover effects
5. **Contact** - Location, timings, and contact info
6. **Footer** - Brand info and social links
7. **Chatbot** - AI-powered assistant (floating button)

## 🎯 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📄 License

All rights reserved - Brothers Cafe Nagpur

## 🤝 Contact

- Phone: +91 98765 43210
- Email: hello@brotherscafe.com
- Instagram: @brotherscafe

---

Built with ❤️ for Gen-Z in Nagpur
