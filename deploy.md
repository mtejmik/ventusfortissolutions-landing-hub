
# Netlify Deployment Guide

## Quick Deployment Steps

1. **Build the project locally** (optional, for testing):
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify**:
   - Option A: Connect your GitHub repository to Netlify for automatic deployments
   - Option B: Drag and drop the `dist` folder to Netlify's manual deploy area
   - Option C: Use Netlify CLI: `netlify deploy --prod --dir=dist`

## Build Settings for Netlify Dashboard

If connecting via Git:
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: `18` (set in Environment Variables)

## Environment Variables

If you need to add environment variables later:
1. Go to Site Settings > Build & Deploy > Environment Variables
2. Add variables with `VITE_` prefix (e.g., `VITE_API_URL`)

## Domain Configuration

After deployment:
1. Go to Site Settings > Domain Management
2. Add your custom domain if needed
3. SSL certificate will be automatically provisioned

## Features Included

✅ SPA routing with React Router
✅ Form handling for all three user types
✅ Responsive design with Tailwind CSS
✅ Toast notifications
✅ Policy pages (Privacy, Terms, Cookies)
✅ Optimized build with code splitting
✅ Security headers configured
✅ Proper redirects for SPA routing

## Post-Deployment Checklist

- [ ] Test all routes work correctly
- [ ] Verify forms submit properly
- [ ] Check mobile responsiveness
- [ ] Test policy page links
- [ ] Confirm toast notifications work
- [ ] Validate contact information displays correctly

Your project is now ready for Netlify deployment!
