# 🔗 URL Shortener

<div align="center">
  <img src="https://img.shields.io/badge/App-URL_Shortener-brightgreen" alt="URL Shortener">
  <img src="https://img.shields.io/badge/Framework-React-blue" alt="React">
  <img src="https://img.shields.io/badge/Language-JavaScript-yellow" alt="JavaScript">
  <img src="https://img.shields.io/badge/API-TinyURL-orange" alt="TinyURL API">
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="MIT License">
</div>

<div align="center">
  <h3>🌐 A modern URL shortener built with React and TinyURL API</h3>
  <p>Shorten long URLs instantly with a clean, responsive interface!</p>
</div>

---

## 📖 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [✨ Features](#-features)
- [🎯 How to Use](#-how-to-use)
- [🎮 Demo](#-demo)
- [📁 Project Structure](#-project-structure)
- [🛠️ Technical Details](#️-technical-details)
- [🎨 Styling](#-styling)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Customization](#-customization)
- [🛠 Known Issues](#-known-issues)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- Modern web browser

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   ```

2. **Navigate to project directory:**
   ```bash
   cd url-shortener
   ```

3. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser:**
   ```
   http://localhost:5173
   ```

---

## ✨ Features

<div align="center">

| Feature | Description |
|---------|-------------|
| 🎨 **Modern UI** | Clean dark theme with gradient backgrounds |
| ⚡ **Instant Shortening** | Real-time URL shortening using TinyURL API |
| 📋 **One-Click Copy** | Copy shortened URLs to clipboard instantly |
| 📱 **Responsive Design** | Works perfectly on mobile, tablet, and desktop |
| 🔄 **Real-time Feedback** | Loading states and error handling |
| 🎯 **Smart URL Validation** | Automatic protocol detection and validation |
| 🌐 **Cross-Browser Support** | Compatible with all modern browsers |

</div>

---

## 🎯 How to Use

### Basic Usage
1. **Paste your long URL** in the input field
2. **Click "Shorten"** button to generate short URL
3. **Copy the result** using the "Copy to clipboard" button
4. **Share your shortened URL** anywhere!

### URL Format Support
- ✅ `https://example.com/very/long/url`
- ✅ `http://example.com/path`
- ✅ `example.com` (automatically adds https://)
- ✅ `www.example.com`

---

## 🎮 Demo

### Interface Preview
```
┌─────────────────────────────────────────┐
│              URL Shortner               │
│   Paste your link below to and get a   │
│      shortened version instantly        │
│                                         │
│  ┌─────────────────────┬─────────────┐  │
│  │ Paste a Link to...  │   Shorten   │  │
│  └─────────────────────┴─────────────┘  │
│                                         │
│  ┌─────────────────────┬─────────────┐  │
│  │ https://tinyurl...  │    Copy     │  │
│  └─────────────────────┴─────────────┘  │
└─────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
url-shortener/
├── 📄 index.html              # Main HTML entry point
├── 📜 main.jsx               # React application entry
├── 📦 App.jsx                # Main application component
├── 🎨 App.css                # App-specific styles
├── 🎨 index.css              # Global styles and responsive design
├── 📁 src/
│   ├── 🔧 inputShortner.jsx   # URL input and shortening logic
│   ├── 📋 LinkResult.jsx      # Result display and copy functionality
│   └── 🌟 BackgroundAnimate.jsx # Animated background component
├── 📋 package.json           # Project dependencies
└── 📋 README.md             # This file
```

---

## 🛠️ Technical Details

### ⚙️ Core Technologies
| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | ^18.0.0 | Frontend framework |
| **Vite** | Latest | Build tool and dev server |
| **TinyURL API** | Public | URL shortening service |
| **JavaScript ES6+** | Latest | Modern JavaScript features |

### 🔄 Application Flow
1. **User Input** → Input component captures URL
2. **Validation** → Basic URL format validation
3. **API Request** → TinyURL API call for shortening
4. **Response Handling** → Display result or error
5. **Copy Feature** → Clipboard API integration

### 🧩 Component Architecture

#### **InputShortner Component**
```javascript
// Features:
- URL input handling
- Form validation
- State management
- User interaction
```

#### **LinkResult Component**
```javascript
// Features:
- API integration with TinyURL
- Loading states
- Error handling
- Clipboard functionality
- Custom copy hook (useCopyToClipboard)
```

#### **BackgroundAnimate Component**
```javascript
// Features:
- Animated grid pattern
- CSS-based animations
- Fixed positioning
```

### 🔗 API Integration
```javascript
// TinyURL API Endpoint
const response = await fetch(
  `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`
);
```

---

## 🎨 Styling

### 🎨 Color Palette
| Element | Color Code | Description |
|---------|------------|-------------|
| **Primary Background** | `#010409` | Main dark background |
| **Secondary Background** | `#0d1117` | Grid pattern overlay |
| **Cards/Inputs** | `#1F1F1F` | Input fields and containers |
| **Primary Action** | `#29903B` | Shorten button |
| **Secondary Action** | `#FF953E` | Copy button |
| **Text Primary** | `#DDF0FF` | Main text color |
| **Text Secondary** | `hsl(214, 12%, 40%)` | Subtitle text |

### 🎭 Typography
- **Main Heading**: Bungee (bold, modern)
- **Brand Accent**: Bitcount Grid Double (tech-inspired)
- **Body Text**: Roboto (clean, readable)

### 🌟 Visual Effects
- **Grid Pattern Background**: Animated geometric pattern
- **Gradient Overlays**: Smooth color transitions
- **Hover Effects**: Interactive button states
- **Focus States**: Accessibility-friendly indicators

---

## 📱 Responsive Design

### 📊 Breakpoint Strategy
| Device | Width Range | Adjustments |
|--------|-------------|-------------|
| **Desktop** | > 425px | Full layout with optimal spacing |
| **Tablet** | ≤ 425px | Adjusted container width, smaller fonts |
| **Mobile Large** | ≤ 375px | Compact layout, optimized touch targets |
| **Mobile Small** | ≤ 320px | Minimal layout, reduced font sizes |

### 📐 Layout Adaptations
```css
/* Key responsive features: */
- Flexible container widths
- Scalable font sizes (3.5rem → 2.5rem)
- Adaptive button sizing
- Optimized touch targets for mobile
- Consistent spacing across devices
```

---

## 🔧 Customization

### 🎨 Theme Customization
```css
/* Modify these variables in index.css */
:root {
  --primary-bg: #010409;
  --secondary-bg: #1F1F1F;
  --accent-green: #29903B;
  --accent-orange: #FF953E;
  --text-primary: #DDF0FF;
}
```

### ⚙️ API Configuration
```javascript
// Change API provider in LinkResult.jsx
const shortenUrl = async (url) => {
  // Replace with your preferred API
  const response = await fetch(`YOUR_API_ENDPOINT`);
}
```

### 🎭 Animation Settings
```css
/* Modify animation in App.css */
@keyframes move {
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
}
```

---

## 🛠 Known Issues

- ⚠️ **CORS Limitations**: TinyURL API may have CORS restrictions
- ⚠️ **Rate Limiting**: Public API may have usage limits
- ⚠️ **Error Handling**: Basic error messages (can be enhanced)
- ⚠️ **URL Validation**: Simple validation (could be more robust)

### 🔧 Potential Improvements
- Add custom domain support
- Implement URL analytics
- Add bulk URL shortening
- Include QR code generation
- Add URL expiration dates

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### 💡 Ideas for Contribution
- Add more URL shortening services
- Implement URL analytics dashboard
- Add bulk processing feature
- Create browser extension
- Add URL preview functionality
- Implement custom short URL aliases

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What does MIT License mean?
- ✅ **Commercial use allowed**
- ✅ **Modification allowed**
- ✅ **Distribution allowed**
- ✅ **Private use allowed**
- ⚠️ **Must include license and copyright**
- ❌ **No warranty provided**

---

<div align="center">
  <h3>🔗 Ready to Shorten URLs?</h3>
  <p>Clone the repository and start shortening URLs today!</p>
  
  ```bash
  git clone https://github.com/yourusername/url-shortener.git
  cd url-shortener
  npm install && npm run dev
  ```
  
  <p><strong>Happy Shortening! 🚀</strong></p>
</div>

---

## 🙏 Acknowledgments

- **TinyURL** for providing the shortening API
- **React Team** for the amazing framework
- **Vite** for the fast build tool
- **Google Fonts** for typography resources