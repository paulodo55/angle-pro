#!/bin/bash

echo "🚀 AnglePro Website Deployment"
echo "================================"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first:"
    echo "   macOS: brew install node"
    echo "   Windows: Download from nodejs.org"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the project
echo "🔨 Building project..."
npm run build

echo "✅ Build complete! Ready for deployment."
echo ""
echo "🌐 Deployment options:"
echo "   1. Vercel: npx vercel"
echo "   2. Local preview: npm start"
echo "" 