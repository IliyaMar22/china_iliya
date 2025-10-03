#!/bin/bash

# Chinese EV Analyzer - Deploy to GitHub
echo "🚗 Chinese EV Analyzer - GitHub Upload Script"
echo "=============================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the chinese-ev-analyzer directory"
    exit 1
fi

echo "📁 Current directory: $(pwd)"
echo "📦 Project files ready for upload"

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "🔧 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: Chinese EV Analyzer with modern React UI"
fi

echo ""
echo "📋 Next steps:"
echo "1. Go to https://github.com/china_iliya/china_iliya"
echo "2. Click 'uploading an existing file'"
echo "3. Drag and drop all files from this directory"
echo "4. Add commit message: 'Initial commit: Chinese EV Analyzer'"
echo "5. Click 'Commit changes'"
echo ""
echo "🚀 Then deploy to Vercel:"
echo "1. Go to https://vercel.com"
echo "2. Sign in with GitHub"
echo "3. Import china_iliya/china_iliya"
echo "4. Click Deploy"
echo ""
echo "✅ Your Chinese EV Analyzer will be live at: https://china-iliya.vercel.app"
