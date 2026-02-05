# Brothers Cafe - Setup Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation Steps

1. **Navigate to project directory:**
```bash
cd brothers-cafe
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
- The app will run on `http://localhost:5173`
- Click the URL in terminal or navigate manually

## 📁 Project Structure

```
brothers-cafe/
├── index.html              # Entry HTML file
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS config
├── postcss.config.js       # PostCSS config
├── requirements.txt        # Package list reference
├── README.md               # Project documentation
├── .gitignore              # Git ignore rules
│
└── src/
    ├── main.jsx            # React entry point
    ├── App.jsx             # Main app component
    ├── styles.css          # Global styles + Tailwind
    │
    └── components/
        ├── Navbar.jsx      # Navigation bar
        ├── Hero.jsx        # Hero section
        ├── About.jsx       # About/Story section
        ├── MenuPreview.jsx # Menu preview section
        ├── Gallery.jsx     # Gallery section
        ├── Contact.jsx     # Contact section
        ├── Footer.jsx      # Footer
        └── Chatbot.jsx     # AI chatbot
```

## 🎨 Customization Guide

### 1. Brand Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'neon-orange': '#FF6B35',  // Change main accent
  'dark-bg': '#0a0a0a',      // Change background
  'dark-card': '#1a1a1a',    // Change card background
}
```

### 2. Menu Items
Edit `src/components/MenuPreview.jsx`:
```javascript
const menuItems = [
  {
    icon: <Beef className="w-12 h-12" />,
    name: 'Your Item',
    description: 'Description',
    price: '₹99 onwards',
    color: 'from-red-500/20 to-orange-500/20',
    badge: 'Badge Text',
  },
  // Add more items
];
```

### 3. Contact Information
Edit `src/components/Contact.jsx`:
```javascript
const contactInfo = [
  {
    title: 'Call Us',
    info: '+91 YOUR NUMBER',
    link: 'tel:+91YOURNUMBER',
  },
  // Update other contact details
];
```

### 4. Google Maps
In `src/components/Contact.jsx`, replace the iframe src with your actual location:
```html
<iframe src="YOUR_GOOGLE_MAPS_EMBED_URL" />
```

### 5. Social Media Links
Update links in:
- `src/components/Navbar.jsx`
- `src/components/Footer.jsx`
- `src/components/Gallery.jsx`

### 6. About Story
Edit the story text in `src/components/About.jsx`

### 7. Chatbot Configuration
Edit system prompt in `src/components/Chatbot.jsx`:
```javascript
const systemPrompt = `Your chatbot personality and information...`;
```

## 🤖 Chatbot Setup

The chatbot uses the OpenAI API (GPT-3.5-turbo). Follow these steps to set it up:

1. **Get your OpenAI API Key:**
   - Go to https://platform.openai.com/api-keys
   - Create a new API key
   - Copy the key (starts with `sk-...`)

2. **Configure the API Key:**
   ```bash
   # Copy the example env file
   cp .env.example .env
   
   # Edit .env and add your API key
   VITE_OPENAI_API_KEY=sk-your-actual-key-here
   ```

3. **Important Notes:**
   - Never commit your `.env` file to git
   - The `.env` file is already in `.gitignore`
   - For production deployment, add the API key in your hosting platform's environment variables

**Features:**
- Bilingual (English & Marathi)
- Context-aware responses
- Menu information
- Location & timings
- Veg/Non-veg queries

## 📱 Responsive Design

The site is mobile-first and fully responsive:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎭 Animations

Powered by Framer Motion:
- Hero section: Staggered text animations
- Scroll animations: On all sections
- Hover effects: Cards, buttons, images
- Page transitions: Smooth and fluid

## 🚢 Production Build

1. **Build the project:**
```bash
npm run build
```

2. **Preview production build:**
```bash
npm run preview
```

3. **Deploy:**
- Upload `dist/` folder to your hosting
- Recommended: Vercel, Netlify, or any static host

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 5173
npx kill-port 5173
# Or use different port
npm run dev -- --port 3000
```

### Dependencies issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

## 📊 Performance Tips

1. **Optimize images**: Use WebP format
2. **Lazy loading**: Already implemented
3. **Code splitting**: Vite handles automatically
4. **Lighthouse score**: Aim for 90+

## 🔒 Security

- No API keys exposed in frontend
- All external links use `rel="noopener noreferrer"`
- Input sanitization in chatbot

## 📞 Support

For issues or questions:
- Email: hello@brotherscafe.com
- Phone: +91 98765 43210

## ✅ Pre-Launch Checklist

- [ ] Update all contact information
- [ ] Replace placeholder images
- [ ] Update Google Maps location
- [ ] Test chatbot responses
- [ ] Verify all links work
- [ ] Test on mobile devices
- [ ] Check all social media links
- [ ] Review meta tags in index.html
- [ ] Test form submissions
- [ ] Run Lighthouse audit

## 🎉 You're Ready!

The website is production-ready and optimized for Gen-Z audience. Good luck with your demo!
