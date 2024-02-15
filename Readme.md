# YouTube Clone Backend

This is the backend implementation for a YouTube clone, providing essential features for user management, authentication, and video subscriptions. It utilizes JWT for secure sessions, supports file uploads for profile customization, and includes endpoints for user registration, login, and more.

## Features

- User authentication (JWT-based)
- User registration, login, logout
- Password change functionality
- User profile management (update, profile picture, cover)
- Subscription models for video content
- File upload support for profile customization

## Getting Started

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up your database and configure environment variables.
4. Run the server with `npm start`.

## API Endpoints

- `POST /api/auth/register`: User registration.
- `POST /api/auth/login`: User login.
- `POST /api/auth/logout`: User logout.
- `PUT /api/auth/update`: Update user details.
- `PUT /api/auth/update-profile-pic`: Update profile picture.
- `PUT /api/auth/update-cover-pic`: Update cover picture.
- ... (additional endpoints for subscriptions, video-related features)

## Contributing

Feel free to contribute by submitting issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
# YouTube-Clone-Backend
