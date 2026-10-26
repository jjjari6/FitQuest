# FitQuest Workspace Rules

## Naming Conventions

### React Components
- Use PascalCase for component names
- Example: `UserProfile.js`, `WorkoutCard.js`, `AvatarCustomizer.js`

### JavaScript Variables and Functions
- Use camelCase for variables and functions
- Example: `workoutData`, `calculateXP()`, `getUserProgress()`

### Constants
- Use UPPER_SNAKE_CASE for constants
- Example: `MAX_LEVEL`, `XP_MULTIPLIER`, `DEFAULT_WORKOUT_DURATION`

### Files
- Use kebab-case for file names (except React components)
- Example: `api-utils.js`, `workout-service.js`, `badge-config.js`

## Branching Strategy

### Branch Types
- **main**: Stable production-ready code
- **develop**: Integration branch for completed features
- **feature/***: Individual feature development branches

### Workflow
1. Create a new feature branch from `develop`
   - Naming: `feature/workout-tracking`, `feature/avatar-system`
2. Develop and test the feature on the feature branch
3. Merge feature branch into `develop` after review
4. Periodically merge `develop` into `main` for releases

### Branch Protection
- Do not commit directly to `main`
- Ensure `develop` is stable before merging to `main`
- Resolve merge conflicts before merging

## Commit Message Guidelines

### Format
Use short, descriptive messages with the following format:
```
<type>: <description>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `chore`: Maintenance tasks (dependencies, configuration)
- `refactor`: Code refactoring without functionality changes
- `test`: Adding or updating tests
- `style`: Code style changes (formatting, linting)

### Examples
```
feat: add workout tracking system
fix: correct XP calculation bug
docs: update PRD with new requirements
chore: update dependencies
refactor: simplify avatar state management
test: add workout validation tests
style: format component files
```

### Guidelines
- Keep messages under 72 characters
- Use imperative mood ("add" not "added")
- Explain what and why, not how
- Reference related issues if applicable

## Pull Request Rules

### Creating Pull Requests
- Feature work should be developed on feature branches
- PR title should follow commit message format
- PR description should explain:
  - What changes were made
  - Why the changes were made
  - How to test the changes
  - Any relevant screenshots or notes

### Review Process
- Changes should be reviewed before merging
- At least one approval required
- Address all review comments
- Resolve merge conflicts before merging

### Merging
- Merge to `develop` for feature branches
- Use squash merge to keep history clean
- Delete feature branch after merge
- Update local repository after merge

## Code Quality Rules

### Code Style
- Follow consistent formatting across the codebase
- Use meaningful variable and function names
- Keep functions focused and concise
- Add comments only when necessary for complex logic
- Avoid code duplication

### Security
- Never commit `.env` files
- Never commit API keys, passwords, or secrets
- Use environment variables for sensitive configuration
- Validate user input on both client and server
- Sanitize data before processing

### Best Practices
- Write modular, reusable code
- Use existing libraries and utilities before creating new ones
- Follow React best practices (hooks, component composition)
- Handle errors gracefully
- Log errors for debugging

### Testing
- Write tests for critical functionality
- Ensure tests pass before committing
- Fix failing tests before merging
- Maintain test coverage

## Development Workflow

### Before Starting Work
1. Pull latest changes from `develop`
2. Create feature branch from `develop`
3. Check documentation for related requirements

### During Development
1. Follow naming conventions
2. Write clean, readable code
3. Test changes locally
4. Commit frequently with descriptive messages

### Before Submitting PR
1. Ensure code follows workspace rules
2. Test thoroughly
3. Update documentation if needed
4. Clean up any debug code or comments

### After Merge
1. Delete feature branch
2. Pull latest changes from `develop`
3. Start next feature or task

## Git Configuration
- Ensure your Git user name and email are configured
- Use the same email across all commits
- Configure line endings to avoid conflicts (recommended: LF)
