# React Quiz Application
A modern, interactive quiz application built with React that allows users to test their knowledge with multiple-choice questions.
## ✨ Features
- **Interactive Quiz Experience**: Answer questions with immediate visual feedback
- **Multiple Choice Questions**: Select from various answer options for each question
- **Progress Tracking**: See your current position in the quiz journey
- **Results Summary**: Comprehensive breakdown of your performance after completion
- **Retry Functionality**: Option to restart the quiz after completion
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## ️ Technology Stack
- **Frontend**: React 18.2.0
- **Styling**: SCSS Modules
- **Build Tools**: Webpack 5.80.0, Babel
- **Package Management**: npm

## Getting Started
1. Clone the repository
2. Install dependencies:
``` bash
npm install
```
3. Run the development server:
``` bash
npm start
```
4. Build for production:
``` bash
npm run build
```
## Project Structure
The application follows a component-based architecture:
- **Components**:
    - `ActiveQuiz`: Displays the current question and possible answers
    - `AnswersList`: Renders interactive answer options
    - `FinishedQuiz`: Shows quiz results and retry option

- **Containers**:
    - `Quiz`: Core container managing quiz state and progression

## Scripts
- `npm start` - Start development server
- `npm run build` - Build for production

## Key Dependencies
- React 18.2.0
- React DOM 18.2.0
- Webpack 5.80.0
- Babel 7.21.8
- SASS 1.88.0

## Future Enhancements
- Add more quiz categories and questions
- Implement user authentication to save progress
- Create an admin interface for quiz creation
- Add timer functionality for timed quizzes
- Implement difficulty levels for questions

## License
This project is licensed under the MIT License - see the LICENSE file for details.
