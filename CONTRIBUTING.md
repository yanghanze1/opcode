# Welcome Contributors

We welcome contributions to enhance opcode's capabilities and improve its performance. To report bugs, create a [GitHub issue](https://github.com/getAsterisk/opcode/issues).

> Before contributing, read through the existing issues and pull requests to see if someone else is already working on something similar. That way you can avoid duplicating efforts.

To contribute, please follow these steps:

1. Fork the opcode repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that the code passes all tests.
4. Submit a pull request describing your changes and their benefits.

## Pull Request Guidelines

When submitting a pull request, please follow these guidelines:

1. **Title**: Please include following prefixes:
   - `Feature:` for new features
   - `Fix:` for bug fixes
   - `Docs:` for documentation changes
   - `Refactor:` for code refactoring
   - `Improve:` for performance improvements
   - `Other:` for other changes

   For example:
   - `Feature: added custom agent timeout configuration`
   - `Fix: resolved session list scrolling issue`

2. **Description**: Provide a clear and detailed description of your changes in the pull request. Explain the problem you are solving, the approach you took, and any potential side effects or limitations of your changes.

3. **Documentation**: Update the relevant documentation to reflect your changes. This includes the README file, code comments, and any other relevant documentation.

4. **Dependencies**: If your changes require new dependencies, ensure that they are properly documented and added to the `package.json` or `Cargo.toml` files.

5. If the pull request does not meet the above guidelines, it may be closed without merging.

**Note**: Please ensure that you have the latest version of the code before creating a pull request. If you have an existing fork, just sync your fork with the latest version of the opcode repository.

## Coding Standards

### Frontend (React/TypeScript)
- Use TypeScript for all new code
- Follow functional components with hooks
- Use Tailwind CSS for styling
- Add JSDoc comments for exported functions and components

### Backend (Rust)
- Follow Rust standard conventions
- Use `cargo fmt` for formatting
- Use `cargo clippy` for linting
- Handle all `Result` types explicitly
- Add comprehensive documentation with `///` comments

### Security Requirements
- Validate all inputs from the frontend
- Use prepared statements for database operations
- Never log sensitive data (tokens, passwords, etc.)
- Use secure defaults for all configurations

## Testing
- Add tests for new functionality
- Ensure all existing tests pass
- Run `cargo test` for Rust code
- Test the application manually before submitting

## Contributing Translations

We welcome translation contributions! opcode supports multiple languages and we'd love your help making it accessible to more users.

### How to Contribute Translations

1. **Read the Translation Guide**: See [docs/TRANSLATION_GUIDE.md](docs/TRANSLATION_GUIDE.md) for detailed instructions
2. **Add or Improve Translations**: Edit files in `src/locales/[language-code]/`
3. **Test Your Changes**: Run the app and verify translations appear correctly
4. **Submit a Pull Request**: Use the prefix `i18n:` in your PR title (e.g., `i18n: Add French translation`)

### Translation Guidelines

- **Preserve Technical Terms**: Keep terms like "Agent", "MCP Server", "Token", etc. in English
- **Be Consistent**: Use the same translation for the same term throughout
- **Professional Tone**: Maintain a professional, technical style
- **Test Thoroughly**: Check all modules and ensure UI layout isn't broken

For more details, see our [Translation Contribution Guide](docs/TRANSLATION_GUIDE.md).

Please adhere to the coding conventions, maintain clear documentation, and provide thorough testing for your contributions. 
