# 🚀 AnglePro Website Deployment Guide

## Quick Deploy to Vercel (Recommended)

The fastest way to get your AnglePro website live is through Vercel, which will handle all the technical setup automatically.

### Option 1: GitHub + Vercel (Easiest)

1. **Create GitHub Repository**
   - Go to [GitHub.com](https://github.com) and create a new repository
   - Upload all the project files to your repository

2. **Deploy with Vercel**
   - Go to [Vercel.com](https://vercel.com)
   - Sign up with your GitHub account
   - Click "Import Project" and select your AnglePro repository
   - Vercel will automatically detect it's a Next.js project
   - Click "Deploy" - your site will be live in 2-3 minutes!

### Option 2: Direct Upload to Vercel

1. **Install Vercel CLI** (requires Node.js)
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

## Local Development Setup

### Prerequisites

You'll need to install Node.js first:

#### On macOS:
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

#### On Windows:
- Download Node.js from [nodejs.org](https://nodejs.org)
- Run the installer

#### On Linux:
```bash
# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# CentOS/RHEL
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install nodejs npm
```

### Run Locally

Once Node.js is installed:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## Alternative Deployment Options

### Netlify
1. Drag and drop your project folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Netlify will automatically build and deploy your site

### AWS Amplify
1. Connect your GitHub repository to AWS Amplify
2. Amplify will automatically deploy on every push

### Traditional Web Hosting
For traditional web hosts, you'll need to:
1. Run `npm run build` locally
2. Upload the contents of the `.next` folder to your web server

## Environment Variables

If you need to add environment variables (like analytics tracking IDs):

1. Create a `.env.local` file in your project root
2. Add your variables:
   ```
   NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id
   ```

## Custom Domain

After deploying to Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., anglepro.com)
4. Follow the DNS configuration instructions

## Performance Optimization

Your website is already optimized for:
- ✅ Fast loading times
- ✅ Mobile responsiveness  
- ✅ SEO optimization
- ✅ Professional appearance

## Support

If you encounter any issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review the [Vercel deployment guide](https://vercel.com/docs)
3. Contact technical support

---

Your professional AnglePro website will be live and ready to impress investors within minutes! 