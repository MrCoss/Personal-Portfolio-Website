
-----

# Personal Portfolio Website

A fully responsive, single-page personal portfolio designed to showcase my skills and projects as a full-stack developer. This project serves as a central hub for my professional profile, built from the ground up using fundamental web technologies. The design is clean and modern, focusing on a straightforward and pleasant user experience for potential employers and collaborators.

-----

## Key Features ✨

This portfolio is packed with features designed to create a comprehensive and interactive professional summary.

  * **Modern "About Me" Layout**: The introduction section features a side-by-side layout created with **CSS Flexbox**, placing the profile avatar to the left and a detailed biography to the right for a clean, readable introduction.

  * **Dynamic Skills Grid**: The skills section uses a **CSS Grid** layout to responsively display a collection of technical abilities. Each skill is presented in a "card" with its corresponding icon and years of experience.

  * **Detailed Project Showcase**: Lists key projects with descriptions of the technologies used and the problems solved, giving a clear insight into my development experience.

  * **Interactive Recommendation Form**: A standout feature of this portfolio.

      * Visitors can fill out a form to leave a recommendation.
      * Upon submission, the form data is captured using **vanilla JavaScript**.
      * A new recommendation card is dynamically created and appended to the recommendations section in real-time, without requiring a page reload. This is achieved through direct **DOM manipulation**.

  * **Fully Responsive Design**: The entire layout is fluid and adapts seamlessly to any screen size, from small mobile devices to large desktop monitors, ensuring a consistent and accessible experience for all users.

  * **Enhanced User Experience**: Includes user-friendly features like smooth scrolling for internal navigation links and a "Back to Top" button that appears on longer scrolls.

-----

## Technologies & Tools 🛠️

This project was built using core web technologies without reliance on external libraries or frameworks like jQuery or React.

  * **HTML5**: Used for structuring the content with semantic tags for better accessibility and SEO.
  * **CSS3**: Heavily utilized for all styling, layout, and responsiveness.
      * **Flexbox** and **Grid** are used to create complex, modern, and responsive layouts.
      * **Transitions** are applied for smooth hover effects and other subtle animations.
  * **Vanilla JavaScript (ES6+)**: Powers the client-side interactivity.
      * **Event Listeners** are used to handle form submissions and other user interactions.
      * **DOM Manipulation** is used to dynamically create and add new recommendation elements to the page.
  * **Google Fonts**: Integrated for custom typography (`Poppins`) to enhance the visual design.

-----

## Setup and Installation ⚙️

To run this project on your local machine, please follow these steps:

1.  **Prerequisites**:

      * A modern web browser (e.g., Google Chrome, Firefox, Microsoft Edge).
      * Git installed on your system (optional, for cloning).

2.  **Clone the Repository**:
    Open your terminal or command prompt and run the following command:

    ```bash
    git clone https://github.com/your-username/your-repo-name.git
    ```

    Alternatively, you can download the project as a ZIP file and extract it.

3.  **Navigate to the Project Directory**:

    ```bash
    cd your-repo-name
    ```

4.  **Open in Browser**:
    Simply open the `index.html` file in your web browser. No build steps or dependencies are required.

-----

## File Structure 🌳

The project directory is organized as follows to maintain a clean separation of concerns.

```
/
├── assets/                 # Assets
│   ├── profile-icon.png
│   ├── html-icon.png
│   ├── css-icon.png
│   └── (and so on...)
│
├── index.html              # Main HTML document 
├── style.css               # stylesheet 
├── script.js               # JavaScript interactive 
├── .gitignore
├── requirements.txt
└── README.md               # Detailed project 
```
