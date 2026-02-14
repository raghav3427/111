# Love Proposal Website

A playful interactive website asking someone to be your Valentine and girlfriend. Features a dodging "No" button that moves away when you try to click it—ensuring only "Yes" can be selected! 💖

## Features

- **Love-Themed Design**: Beautiful pink gradient background with heart motifs
- **Interactive Dialog**: Asks "Will you be my Valentine and my girlfriend?"
- **Dodging No Button**: The No button moves away when the mouse approaches it
- **Congratulations Message**: Displays a first-person heartfelt message after clicking Yes
- **Responsive**: Works on desktop and mobile devices
- **Zero Dependencies**: Pure HTML, CSS, and vanilla JavaScript

## Files

- `index.html` - Main page structure with dialog and overlay
- `styles.css` - Love-themed styling with animations
- `script.js` - Interactive button behavior and dodge logic
- `vercel.json` - Vercel deployment configuration
- `package.json` - Project metadata and scripts

## Local Development

### Using Python
```bash
python -m http.server 3000
```

### Using Node.js
```bash
npx http-server -p 3000
```

Then open `http://localhost:3000` in your browser.

## Deployment to Vercel

### Quick Deploy
Click this button to deploy directly to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/love-proposal)

### Manual Deploy
1. Push your code to a GitHub repository
2. Visit [vercel.com](https://vercel.com)
3. Click **Add New Project**
4. Import your GitHub repository
5. Vercel will auto-detect it as a static site and deploy

### Using Vercel CLI
```bash
npm install -g vercel
vercel
```

## Customization

- **Change the Question**: Edit line 17 in `index.html`
- **Adjust Colors**: Modify CSS variables in `styles.css` (lines 1-6)
- **Customize Message**: Edit the congratulations text in `index.html` (lines 32-35)
- **Adjust Button Dodge Speed**: Modify the `threshold` value in `script.js` (line 43)

## Browser Support

Works on all modern browsers:
- Chrome/Edge (88+)
- Firefox (87+)
- Safari (14+)

## License

MIT - Feel free to use and customize!

## Notes

- The No button is positioned absolutely within the buttons container and moves randomly on mouse proximity
- All styling uses CSS variables for easy customization
- The overlay shows/hides based on the `hidden` attribute with CSS rule support

---

Made with ❤️ for that special someone!
