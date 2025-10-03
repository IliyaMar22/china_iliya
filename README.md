# 🚗 Chinese EV Analyzer

An interactive web application for comparing and discovering Chinese electric vehicles. Built with Next.js, TypeScript, and Tailwind CSS.

## ✨ Features

- **Interactive Criteria Selection**: Choose from price ranges, battery capacity, and horsepower levels
- **Smart Recommendations**: Get personalized EV recommendations based on your preferences
- **Comprehensive Data**: Compare performance metrics, features, and specifications
- **Manufacturer Links**: Direct links to official manufacturer websites
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Real-time Filtering**: Instant results as you adjust your criteria

## 🎯 Criteria Options

### Price Ranges
- **Budget Friendly**: $0 - $65,000
- **Moderate Price**: $65,000 - $75,000  
- **Luxury Vehicle**: $75,000+

### Battery Capacity
- **Low**: 60-80 kWh
- **Medium**: 80-100 kWh
- **High**: 100+ kWh

### Horsepower
- **Low**: 400-500 HP
- **Medium**: 500-600 HP
- **High**: 600-800 HP
- **Extreme**: 800+ HP

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd chinese-ev-analyzer
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Built With

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 18** - Modern React with hooks

## 📱 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

The project includes a `vercel.json` configuration file for optimal deployment.

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Heroku

## 🎨 Customization

### Adding New EVs

Edit `src/data/evData.ts` to add new vehicles:

```typescript
{
  id: 'unique-id',
  name: 'Vehicle Name',
  manufacturer: 'Manufacturer',
  horsepower: 500,
  battery_capacity: 100,
  price: 65000,
  // ... other properties
}
```

### Styling

The app uses Tailwind CSS for styling. Custom styles can be added to `src/app/globals.css`.

## 📊 Data Sources

Vehicle data is sourced from:
- Official manufacturer websites
- CarNewsChina
- Manual research and verification

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions, please open an issue in the repository.

---

Made with ❤️ for the Chinese EV community