# Portfolio Website

This is a personal portfolio website built using **Next.js 14**, **Tailwind CSS**, **Framer Motion**, and **TypeScript**. It showcases my skills, projects, work experience, and allows visitors to get in touch with me.

## 🚀 Features
- **Responsive Design**: Fully responsive design for all screen sizes.
- **Carousel**: Image slider at the top using **react-slick**.
- **Animated Sections**: Framer Motion animations for smooth section transitions.
- **Projects Showcase**: Display personal projects with details.
- **About Section**: Short biography and background.
- **Experience Section**: Professional work experience with companies.
- **Skills Section**: Key technical and design skills with animation.
- **Contact Form**: Functional contact form using **React state**.
- **Dark Mode**: Optional dark mode support can be integrated.

## 🛠️ Technologies Used
- **Next.js 14** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (for animations)
- **react-slick** (for carousel slider)

## 📂 Project Structure
```
my-portfolio/
│
├── app/
│   └── page.tsx          // Main Home Page
│
├── components/
│   ├── Carousel.tsx      // Image slider
│   ├── Projects.tsx      // Projects section
│   ├── About.tsx         // About section
│   ├── Experience.tsx    // Experience section
│   ├── Skills.tsx        // Skills section
│   └── Contact.tsx       // Contact form section
│
├── public/
│   └── images/           // Static images (profile, icons, etc.)
│
├── styles/               // (Optional) Additional global styles
│
└── package.json          // Project dependencies
```

## 🖥️ Running the Project
### 1. Clone the Repository
```
git clone https://github.com/mayankkatyayan/my-portfolio.git
cd my-portfolio
```

### 2. Install Dependencies
```
npm install
# or
yarn install
```

### 3. Run the Development Server
```
npm run dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Contact Form Functionality
The contact form uses **React state management**. Submitting the form will console log the input data.

### To Integrate a Working Email Service:
1. **Formspree Integration** (Recommended for Static Portfolios):
```html
<form action="https://formspree.io/f/{your_form_id}" method="POST">
  <input type="email" name="email" required />
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```
2. **Nodemailer / Resend API** can be integrated in a Next.js API route.

## 🖼️ Screenshots
| Home Page | Projects Section |
| --------- | ---------------- |
| (Insert Screenshot) | (Insert Screenshot) |

## 📦 Dependencies
```json
"dependencies": {
  "framer-motion": "^10.x",
  "next": "14.x",
  "react": "^18.x",
  "react-dom": "^18.x",
  "react-slick": "^0.29.x",
  "slick-carousel": "^1.8.x",
  "tailwindcss": "^3.x"
}
```

## 🔥 Future Enhancements
- Add working email functionality via API.
- Implement light/dark mode toggle.
- More detailed project descriptions.
- Additional animations and interactive elements.

## 📧 Contact
Feel free to reach out via the [Contact Form](#contact-form-functionality) or connect on [LinkedIn](https://www.linkedin.com/in/mayankkat/).

## Reach Out

If you have any questions or want to collaborate, feel free to reach out to me at [mayankkatyayan@example.com].

Buy Me a Coffee

If you appreciate my work, feel free to support me by buying me a coffee via PayPal: [paypal.me/mayankkatyayan].

