import '../CSS/Projects.css';

const Projects = () => {
    return (
        <section id="Projects">
            <h2 className="projects-heading">Projects</h2>
            <div className="projects-container">
                <div className="project-card">
                    <h3>Price Comparison for Fashion Products</h3>
                    <p><strong>Duration:</strong> Nov 2023 - Dec 2023</p>
                    <p><strong>Description:</strong> A web app where users paste a fashion product URL (e.g., from Amazon), and the system fetches the same product’s price from different platforms.</p>
                    <p><strong>Features:</strong></p>
                    <ul>
                        <li>Scraping product details using Selenium</li>
                        <li>Dynamic product search & price comparison</li>
                        <li>User dashboard with saved comparisons</li>
                        <li>Notifications when price drops</li>
                    </ul>
                    <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB, Selenium</p>
                </div>

                <div className="project-card">
                    <h3>Blogging Platform</h3>
                    <p><strong>Duration:</strong> June 2023 - July 2023</p>
                    <p><strong>Description:</strong> Developed a full-stack blogging website that allows users to write, publish, and interact with blog posts.</p>
                    <p><strong>Features:</strong></p>
                    <ul>
                        <li>CRUD Operations – Create, update, delete, and view blog posts</li>
                        <li>User Profiles – View author profiles and their posts</li>
                    </ul>
                    <p><strong>Tech Stack:</strong> React, Node.js, Express, MongoDB</p>
                </div>

                <div className="project-card">
                    <h3>Groceries Price Comparison Website</h3>
                    <p><strong>Duration:</strong> Aug 2024</p>
                    <p><strong>Description:</strong> Developed a web application that allows users to compare grocery prices from multiple e-commerce platforms (Amazon Pantry, JioMart, BigBasket, etc.). The system fetches real-time product details using web scraping techniques and displays the best price.</p>
                    <p><strong>Features:</strong></p>
                    <ul>
                        <li>Product Search & Scraping – Users can search for grocery items, and the system fetches prices from different websites.</li>
                        <li>Cart Price Comparison – Users can add multiple items to a cart, and the system calculates the total cost across different platforms.</li>
                    </ul>
                    <p><strong>Tech Stack:</strong> React.js, Node.js, Express.js, MongoDB, Selenium</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
