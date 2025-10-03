# Upload Chinese EV Analyzer to GitHub

## Quick Setup Instructions

### 1. Create Personal Access Token
1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "Chinese EV Analyzer"
4. Select scope: `repo` (Full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again)

### 2. Upload via Command Line
Replace `YOUR_USERNAME` and `YOUR_TOKEN` with your actual values:

```bash
# Navigate to the project
cd /Users/bilyana/Downloads/.github-main/profile/chinese-ev-analyzer

# Set up remote with authentication
git remote set-url origin https://YOUR_USERNAME:YOUR_TOKEN@github.com/china_iliya/china_iliya.git

# Push to GitHub
git push -u origin main
```

### 3. Alternative: Upload via GitHub Web Interface
1. Go to https://github.com/china_iliya/china_iliya
2. Click "uploading an existing file"
3. Drag and drop all files from the `chinese-ev-analyzer` folder
4. Add commit message: "Initial commit: Chinese EV Analyzer"
5. Click "Commit changes"

## Deploy to Vercel

Once uploaded to GitHub:

1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import `china_iliya/china_iliya`
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"

The app will be live at: `https://china-iliya.vercel.app`

## Project Features

✅ Modern Next.js 14 with TypeScript
✅ Professional UI with Radix UI components
✅ Mobile-first responsive design
✅ Interactive dropdown menus
✅ EV comparison and recommendation system
✅ Ready for production deployment
