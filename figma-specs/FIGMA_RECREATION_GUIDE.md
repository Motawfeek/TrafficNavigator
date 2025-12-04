# 🎨 TrafficNavigator - Figma Recreation Guide

## 📱 Frame Setup (iPhone 15 Pro)
```
Frame Size: 393 x 852 px
Corner Radius: 55px (device) / 47px (screen)
```

---

## 🎨 Design Tokens

### Colors (Create as Styles in Figma)

#### Primary Brand
| Name | Hex | Usage |
|------|-----|-------|
| Primary | `#6C63FF` | Main brand color |
| Primary Light | `#8B5CF6` | Gradient end, hover states |
| Primary Dark | `#5B52E0` | Pressed states |
| **Gradient** | `#6C63FF → #8B5CF6` | Buttons, splash, headers |

#### Traffic/Route Colors
| Name | Hex | Usage |
|------|-----|-------|
| Fast | `#10B981` | Fast routes, success |
| Fast Light | `#D1FAE5` | Fast route badges |
| Moderate | `#F59E0B` | Medium traffic |
| Moderate Light | `#FEF3C7` | Moderate badges |
| Heavy | `#EF4444` | Heavy traffic, errors |
| Heavy Light | `#FEE2E2` | Heavy badges |

#### Neutrals
| Name | Hex | Usage |
|------|-----|-------|
| White | `#FFFFFF` | Backgrounds |
| Background | `#F8FAFC` | App background |
| Border | `#E2E8F0` | Dividers, borders |
| Text Primary | `#0F172A` | Headlines |
| Text Secondary | `#64748B` | Body text |
| Text Tertiary | `#94A3B8` | Placeholders |
| Dark | `#1E293B` | Dark elements |

---

### Typography (SF Pro Display)

| Style | Size | Weight | Line Height |
|-------|------|--------|-------------|
| H1 | 32px | Bold (700) | 40px |
| H2 | 24px | SemiBold (600) | 32px |
| H3 | 20px | SemiBold (600) | 28px |
| Body Large | 16px | Regular (400) | 24px |
| Body | 14px | Regular (400) | 20px |
| Body Small | 12px | Regular (400) | 16px |
| Caption | 10px | Medium (500) | 14px |
| Button | 16px | SemiBold (600) | 24px |

---

### Spacing Scale
```
4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px
```

### Border Radius
```
Small: 8px
Medium: 12px
Large: 16px
XL: 20px
2XL: 24px
Full: 9999px (pills)
```

---

## 📱 Screens to Create (12 Total)

### Screen 1: Splash Screen
```
Background: Primary Gradient (135°, #6C63FF → #8B5CF6)

Components:
- Logo Container (90x90px, white, radius 28px)
  - Navigation icon inside (40px, primary color)
- App Name: "Traffic Navigator" (26px, white, bold)
- Tagline: "Navigate Smarter, Arrive Faster" (14px, white 80%)
- Loading dots (3 circles, 10px each, animated)
```

### Screen 2: Onboarding 1 - Welcome
```
Background: White

Components:
- Illustration circle (160px, primary gradient)
  - Map icon (64px, white)
- Title: "Smart Navigation" (24px, text-primary)
- Description: "Find the fastest routes with real-time traffic updates" (14px, text-secondary)
- Dots: 3 dots (8px, first active = 28px wide with gradient)
- Skip button (text, secondary)
- Next button (primary gradient, full width)
```

### Screen 3: Onboarding 2 - Traffic Colors
```
Background: White

Components:
- 3 Color Demo Cards:
  1. Green bar (8x40px) + "🏃 Fast Route" 
  2. Yellow bar + "🚗 Moderate Traffic"
  3. Red bar + "🚦 Heavy Traffic"
- Title: "Traffic Color Codes"
- Description: "Understand traffic at a glance..."
- Same navigation as Onboarding 1
```

### Screen 4: Onboarding 3 - Save Time
```
Background: White

Components:
- Illustration (160px, orange gradient)
  - Clock icon (64px, white)
- Title: "Save Time Daily"
- Description: "Choose optimal routes and save up to 30 minutes..."
- "Get Started" button
```

### Screen 5: Login
```
Background: White

Components:
- Small logo (70x70px, primary gradient, radius 20px)
- Title: "Welcome Back!" (26px)
- Subtitle: "Sign in to continue" (14px)
- Email input (56px height, icon left)
- Password input (56px height, eye icon right)
- "Forgot Password?" link (primary color, right aligned)
- Login button (primary gradient, full width)
- Divider with "or"
- Social buttons (3 icons: Apple, Google, Facebook)
- "Don't have account? Sign Up" footer
```

### Screen 6: Sign Up
```
Same structure as Login with:
- Full Name input
- Email input
- Password input
- Terms checkbox
- "Create Account" button
- "Already have account? Login" footer
```

### Screen 7: Home/Map Screen ⭐ (Main Screen)
```
Background: Map view

Components:
- Dynamic Island (126x34px, black, top center)
- Search bar (56px height, white, shadow, radius 20px)
  - Search icon left
  - "Where to?" placeholder
  - Mic button right (primary gradient)
- Current location badge (pill shape)
  - "📍 STEM School 6th October"
- Quick Places bar (bottom, white card)
  - Home icon (48x48, blue bg)
  - Work icon (48x48, green bg)  
  - Saved icon (48x48, orange bg)
- Bottom Navigation (85px height)
  - Map (active), Search, Routes, Profile
```

### Screen 8: Search Screen
```
Background: #F8FAFC

Components:
- Search header (white bg)
  - Current location input (green dot)
  - Destination input (red dot)
  - Swap button
- Recent searches section
- Popular destinations section
- Result items:
  - Icon (44x44px)
  - Name + Address
  - Time estimate (green text)
```

### Screen 9: Route Selection ⭐
```
Layout: Map (45%) + Panel (55%)

Map:
- Origin marker (STEM School)
- Destination marker
- 3 route lines (green, yellow, red)

Panel Components:
- Handle bar (40x4px, center)
- Destination: "Mall of Egypt" + "8.5 km away"
- 3 Route Cards:

Route Card 1 (Fast - Selected):
- Green color bar (4x60px)
- Badge: "⚡ Fastest" (green bg)
- Time: "18 min" (large)
- Info: "8.5 km • via Mehwar"
- Traffic bar (visual: 70% green, 20% yellow, 10% red)
- Go button (green, 48x48)

Route Card 2 (Moderate):
- Yellow color bar
- Badge: "🚗 Moderate"
- Time: "24 min"
- Traffic bar: mixed colors

Route Card 3 (Heavy):
- Red color bar
- Badge: "🚦 Heavy Traffic"
- Time: "35 min"
```

### Screen 10: Navigation Screen ⭐
```
Layout: Full map with overlays

Components:
- Direction Card (top, white, shadow)
  - Turn icon (56x56, green bg)
  - "In 200m"
  - "Turn right onto 26th July Corridor"
  - "Then continue for 2.3 km"
- Speed indicator (70x70, circle, left)
  - "65" (large)
  - "km/h" (small)
- Bottom Panel:
  - Stats: "18 min" | "8.5 km" | "10:42 AM"
  - Action buttons: Sound, Overview, Share
  - End Navigation button (red)
```

### Screen 11: Arrived Screen
```
Background: White, centered content

Components:
- Success animation (100x100, green circle with check)
- "You've Arrived!" (28px)
- "Mall of Egypt" (16px, secondary)
- Trip Summary (3 stats):
  - ⏱️ 18 min (Time)
  - 📍 8.5 km (Distance)  
  - ⚡ 5 min saved (highlighted green)
- "Start New Route" button (primary)
- "Rate this route" button (secondary)
```

### Screen 12: Profile Screen
```
Components:
- Header (primary gradient, curved bottom)
  - Settings button (top right)
  - Avatar (90x90, border)
  - Name: "Ahmed Hassan"
  - Email
- Stats cards (3, below header, overlapping)
  - 🛣️ 156 Trips
  - ⏱️ 48h Saved (highlighted)
  - 📍 1,234 km
- Menu items:
  - Saved Places (badge: 12)
  - Trip History
  - Notifications (red dot)
  - Settings
  - Help & Support
- Bottom nav
```

---

## 🧩 Components to Create in Figma

1. **Buttons**
   - Primary (gradient)
   - Secondary (outline)
   - Icon button (square)
   - Social button

2. **Inputs**
   - Text input with icon
   - Search bar
   - Password input with toggle

3. **Cards**
   - Route card
   - Place card
   - Menu item
   - Stat card

4. **Navigation**
   - Bottom nav bar
   - Top search bar

5. **Badges**
   - Route type badge (fast/moderate/heavy)
   - Count badge
   - Status dot

6. **Icons** (use SF Symbols or similar)
   - Navigation
   - Search
   - Location
   - Profile
   - Settings
   - Routes
   - Clock
   - Distance

---

## 📍 Cairo Locations (for Map mockups)

| Place | Coordinates | Distance |
|-------|-------------|----------|
| STEM School 6th October | 29.9792°N, 30.9467°E | Origin |
| Mall of Egypt | 29.9725°N, 30.9972°E | 8.5 km |
| Smart Village | 30.0716°N, 31.0169°E | 12 km |
| Arkan Plaza | 30.0184°N, 31.0052°E | 5 km |

---

## 🔗 UX Flow

```
Splash → Onboarding (3) → Login/Signup → Home
                                           ↓
                              Search → Routes → Navigation → Arrived
                                           ↓
                                        Profile → Settings
```

---

## 💡 Figma Tips

1. **Create Components** for all reusable elements
2. **Use Auto Layout** for responsive spacing
3. **Set up Color & Text Styles** first
4. **Name layers properly** (e.g., "Button/Primary/Default")
5. **Use Variants** for button/input states
6. **Add Prototyping** connections between screens

---

## 📦 Recommended Figma Plugins

1. **Iconify** - For SF Symbols-like icons
2. **Unsplash** - For avatar images
3. **Mapsicle** or **Map Maker** - For map backgrounds
4. **Auto Layout** - Built-in, use extensively
5. **Stark** - For accessibility checks

---

Created for: TrafficNavigator iOS App
Location: STEM School 6th October, Cairo
Date: December 2025
