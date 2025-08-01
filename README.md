# Personal Portfolio Website

A fully responsive, single-page personal portfolio designed to showcase my skills and projects as a full-stack developer. This project serves as a central hub for my professional profile, built from the ground up using fundamental web technologies. The design is clean and modern, focusing on a straightforward and pleasant user experience for potential employers and collaborators.

-----

## 📖 Table of Contents

  - [1. Project Vision & Objective](https://www.google.com/search?q=%231-project-vision--objective)
  - [2. Core Features & Functionality](https://www.google.com/search?q=%232-core-features--functionality)
  - [3. Technical Stack & Implementation](https://www.google.com/search?q=%233-technical-stack--implementation)
  - [4. Project Structure Explained](https://www.google.com/search?q=%234-project-structure-explained)
  - [5. Local Setup & Usage Guide](https://www.google.com/search?q=%235-local-setup--usage-guide)
  - [6. Author & License](https://www.google.com/search?q=%236-author--license)

-----

## 1\. Project Vision & Objective

The goal of this project was to create a clean, modern, and performant digital resume that serves as a central hub for my professional identity. By deliberately avoiding external libraries and frameworks like jQuery or React, the project showcases a strong command of **core web technologies**.

The primary objective is to present a comprehensive summary of my skills, projects, and experience in a single, accessible, and fully responsive page. The focus is on a high-quality user experience, demonstrating proficiency in **HTML5, CSS3, and Vanilla JavaScript**.

-----

## 2\. Core Features & Functionality ✨

This portfolio is packed with features designed to create an interactive and professional summary.

  - **Modern "About Me" Layout**: The introduction section features a side-by-side layout created with **CSS Flexbox**, placing the profile avatar to the left and a detailed biography to the right for a clean, readable introduction.

  - **Dynamic Skills Grid**: The skills section uses a **CSS Grid** layout to responsively display a collection of technical abilities. Each skill is presented in a "card" with its corresponding icon and years of experience.

  - **Detailed Project Showcase**: Lists key projects with descriptions of the technologies used and the problems solved, giving a clear insight into my development experience.

  - **Interactive Recommendation Form**: A standout feature of this portfolio.

      - Visitors can fill out a form to leave a recommendation.
      - Upon submission, the form data is captured using **vanilla JavaScript**.
      - A new recommendation card is dynamically created and appended to the recommendations section in real-time, without requiring a page reload. This is achieved through direct **DOM manipulation**.

  - **Fully Responsive Design**: The entire layout is fluid and adapts seamlessly to any screen size, from small mobile devices to large desktop monitors, ensuring a consistent and accessible experience for all users.

  - **Enhanced User Experience**: Includes user-friendly features like smooth scrolling for internal navigation links and a "Back to Top" button that appears on longer scrolls.

-----

## 3\. Technical Stack & Implementation 🛠️

This project was intentionally built using core web technologies to demonstrate foundational strength.

  - **HTML5**: Used for structuring the content with **semantic tags** for better accessibility and SEO.
  - **CSS3**: Heavily utilized for all styling, layout, and responsiveness.
      - **Flexbox** and **Grid** are used to create complex, modern, and responsive layouts.
      - **Media Queries** are implemented to handle different screen sizes.
      - **Transitions** are applied for smooth hover effects and other subtle animations.
  - **Vanilla JavaScript (ES6+)**: Powers all client-side interactivity without any external libraries.
      - **Event Listeners** are used to handle form submissions and other user interactions.
      - **DOM Manipulation** is used to dynamically create and add new recommendation elements to the page in real-time.
  - **Google Fonts**: Integrated for custom typography (`Poppins`) to enhance the visual design.

-----

## 4\. Project Structure Explained 🌳

The project directory is organized as follows to maintain a clean separation of concerns.

```
/
├── assets/                 # Contains all static assets like images and icons.
│   ├── profile-icon.png
│   └── ...                 # Other skill and project icons.
│
├── index.html              # The main HTML document containing the page structure.
├── style.css               # The main stylesheet for all visual styling.
├── script.js               # The JavaScript file for all interactivity.
├── .gitignore              # Specifies files for Git to ignore.
└── README.md               # This detailed project documentation.
```

-----

## 5\. Local Setup & Usage Guide ⚙️

To run this project on your local machine, please follow these simple steps.

1.  **Prerequisites**:

      - A modern web browser (e.g., Google Chrome, Firefox, Microsoft Edge).
      - Git installed on your system (optional, for cloning).

2.  **Clone the Repository**:
    Open your terminal or command prompt and run the following command:

    ```bash
    git clone https://github.com/MrCoss/personal-portfolio.git
    cd personal-portfolio
    ```

    Alternatively, you can download the project as a ZIP file and extract it.

3.  **Open in Browser**:
    Simply open the `index.html` file in your web browser. No build steps or dependencies are required.

-----

## 6\. Author & License

  - **Author:** Costas Antony Pinto
  - **GitHub:** [MrCoss](https://github.com/MrCoss)
  - **License:** This project is open-source and available under the MIT License.
