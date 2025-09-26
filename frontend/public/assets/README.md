# SVG Assets Guide

## 📁 Where to Upload Your SVG Files

Upload your three SVG files to the following location:

```
frontend/public/assets/
├── logo.svg      (Bell logo for top-left)
├── coffee.svg    (Curvy coffee stream/vector)
└── cup.svg       (Coffee cup)
```

## 🎨 Design Specifications

### Logo (logo.svg)
- **Position**: Top-left corner
- **Size**: 40px × 40px (will be scaled automatically)
- **Color**: Dark red (#8B0000 or similar)
- **Features**: Bell icon with small leaf/feather element

### Coffee Stream (coffee.svg)
- **Position**: Upper-left to center-right area
- **Size**: ~300px width (responsive)
- **Color**: Dark red (#8B0000) with golden-yellow outline (#FFD700)
- **Animation**: Gentle swaying motion (3s cycle)
- **Features**: Curvilinear flowing shape

### Coffee Cup (cup.svg)
- **Position**: Bottom-right area
- **Size**: ~200px width (responsive)
- **Color**: Dark red (#8B0000) with golden-yellow outline (#FFD700)
- **Animation**: Subtle tilting motion (3s cycle)
- **Features**: Wide-mouthed cup with handle

## 🎯 Color Palette Used

- **Background**: Light cream (#F5F5DC)
- **Text/Navigation**: Dark green (#2D5016)
- **SVG Elements**: Dark red (#8B0000)
- **SVG Outlines**: Golden yellow (#FFD700)

## 📱 Responsive Behavior

The SVGs will automatically scale and reposition on different screen sizes:
- **Desktop**: Full size and positioning
- **Tablet**: 20% smaller, adjusted positioning
- **Mobile**: 40% smaller, optimized positioning

## 🚀 Next Steps

1. Upload your three SVG files to `frontend/public/assets/`
2. Refresh your browser to see the changes
3. The animations will start automatically
4. Test on different screen sizes for responsiveness

## 🔧 Customization

If you need to adjust the animations or positioning, modify the CSS in `frontend/src/App.css`:
- `@keyframes pourCoffee` - Controls coffee stream animation
- `@keyframes cupTilt` - Controls cup tilting animation
- `.coffee-stream` and `.coffee-cup` - Control positioning and sizing
