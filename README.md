# MyPortfolio - Personal Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, featuring a futuristic cyberpunk aesthetic with glowing effects and smooth animations.

## 🚀 Features

- **Responsive Design**: Fully responsive across all devices
- **Modern UI/UX**: Cyberpunk-inspired design with neon glows and gradients
- **Smooth Animations**: Custom keyframe animations and transitions
- **Interactive Navigation**: Smooth scrolling between sections
- **Contact Form**: Functional contact form with form validation
- **Project Showcase**: Display your projects with images and descriptions
- **Social Media Integration**: Links to GitHub, LinkedIn, and other platforms

## 🛠️ Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Google Fonts** - Custom typography (Orbitron & Audiowide)

## 📁 Project Structure

```
MyPortfolio/
├── public/
│   ├── images/
│   │   ├── profile.jpg          # Your profile photo
│   │   ├── project1.jpg         # Project 1 image
│   │   ├── project2.jpg         # Project 2 image
│   │   └── project3.jpg         # Project 3 image
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Navigation component
│   │   ├── Hero.jsx             # Hero section component
│   │   ├── About.jsx            # About section component
│   │   ├── Projects.jsx         # Projects section component
│   │   ├── Contact.jsx          # Contact section component
│   │   └── Footer.jsx           # Footer component
│   ├── App.jsx                  # Main app component
│   ├── App.css                  # Empty file (keep empty)
│   ├── index.css                # Tailwind imports & custom styles
│   └── main.jsx                 # React entry point
├── tailwind.config.js           # Tailwind configuration
├── vite.config.js              # Vite configuration
└── package.json                # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/MyPortfolio.git
cd MyPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The build files will be generated in the `dist` folder.

## 🎨 Customization

### Adding Your Content

1. **Profile Image**: Replace `public/images/profile.jpg` with your photo
2. **Project Images**: Add your project images to `public/images/`
3. **Personal Information**: Update the content in each component:
   - `Hero.jsx` - Your name and title
   - `About.jsx` - Your bio and skills
   - `Projects.jsx` - Your projects and descriptions
   - `Contact.jsx` - Your contact information

### Styling

The project uses custom Tailwind utilities defined in `src/index.css`:

- `.text-gradient` - Cyan to magenta gradient text
- `.cyber-border` - Glowing cyan border effect
- `.retro-glow` - Neon text glow effect

### Animations

Custom animations are defined in `tailwind.config.js`:

- `glow` - Pulsing glow effect
- `float` - Floating animation for elements

## 📱 Sections

1. **Header** - Navigation with mobile menu
2. **Hero** - Introduction with animated call-to-action
3. **About** - Personal information and skills showcase
4. **Projects** - Portfolio projects with live demos and GitHub links
5. **Contact** - Contact form and social media links
6. **Footer** - Additional links and copyright

## 🌟 Key Features

- **Smooth Scrolling**: Navigate between sections seamlessly
- **Mobile Responsive**: Optimized for all screen sizes
- **Dark Theme**: Cyberpunk-inspired dark color scheme
- **Custom Scrollbar**: Styled scrollbar matching the theme
- **Hover Effects**: Interactive elements with smooth transitions
- **Form Validation**: Contact form with input validation

# Screenshots
<img width="1902" height="855" alt="image" src="https://github.com/user-attachments/assets/b401a254-2bdf-4964-86e3-dbd093107216" />
<img width="1905" height="860" alt="Screenshot 2025-07-15 022605" src="https://github.com/user-attachments/assets/497d814e-9b1e-4c0a-86c3-19b15242ace5" />


## 🎯 Performance

- Fast loading with Vite's optimized build
- Efficient CSS with Tailwind's utility classes
- Optimized images and fonts
- Minimal JavaScript bundle size


## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Lucide React](https://lucide.dev/) - For icons
- [Google Fonts](https://fonts.google.com/) - For typography
