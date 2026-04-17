## 📚 Library API

📌 Project Description

This is a simple backend application built using Express.js and Sequelize.
It manages Authors and Books with a one-to-many relationship:
- One Author can have many Books  
- Each Book belongs to one Author
The project demonstrates CRUD operations and database relationships.

-------------------------------------------
 ⚙️ Technologies Used
- Node.js
- Express.js
- Sequelize ORM
- MySQL
- Docker

-------------------------------------------
🚀 Setup Instructions 

1. Clone the repository
 git clone https://github.com/majedhanini/library-api.git
  cd library-api

2. Install dependencies
 npm install

3. Run database with Docker
 docker compose up -d

4. Run migrations
 npx sequelize-cli db:migrate

5. Start the server
 npm run dev
 -Server runs on:
  http://localhost:5000


-------------------------------------------
📡 API Endpoints 

-👤 Authors

| Method | Endpoint           | Description      |
| ------ | ------------------ | ---------------- |
| POST   | `/api/authors`     | Create author    |
| GET    | `/api/authors`     | Get all authors  |
| GET    | `/api/authors/:id` | Get author by ID |
| PUT    | `/api/authors/:id` | Update author    |
| DELETE | `/api/authors/:id` | Delete author    |



-📖 Books

| Method | Endpoint         | Description    |
| ------ | ---------------- | -------------- |
| POST   | `/api/books`     | Create book    |
| GET    | `/api/books`     | Get all books  |
| GET    | `/api/books/:id` | Get book by ID |
| PUT    | `/api/books/:id` | Update book    |
| DELETE | `/api/books/:id` | Delete book    |

-------------------------------------------

🧪 Example Request

-Create Author

{
  "name": "Ahmad",
  "email": "ahmad@example.com",
  "bio": "Tech author"
}

-Create Book

{
  "title": "Node Basics",
  "description": "Learn Node.js",
  "price": 25,
  "authorId": 1
}

-------------------------------------------
✅ Features

- CRUD operations for Authors and Books  
- One-to-many relationship  
- Sequelize migrations  
- Organized structure (controllers & routes)  
- Docker support  
-------------------------------------------

📎 Notes

- Make sure MySQL container is running before starting the server  
- Use correct authorId when creating a book  



## 📬 Contact
Created by Majed Hanini
