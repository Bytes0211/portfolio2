# Portfolio Unit Tests

This directory contains comprehensive unit tests for the portfolio static site, covering HTML content, project cards, and skill sections.

## Test Framework

The tests use **Vitest** with the **happy-dom** environment for fast DOM testing without requiring a browser.

### Dependencies
- `vitest` - Fast unit test framework
- `@vitest/ui` - Interactive UI for running tests
- `happy-dom` - Lightweight DOM implementation for testing
- `@testing-library/dom` - DOM testing utilities

## Running Tests

### Basic Commands

```bash
# Run all tests once
npm test

# Run tests in watch mode (re-runs on file changes)
npm run test:watch

# Run tests with interactive UI
npm run test:ui

# Run tests with coverage report
npm run test:coverage
```

## Test Coverage

### 1. AI Engineering Learning Project Card (`portfolio.test.js`)
Tests for the AI Engineering Learning Project card component (lines 210-232 in `index.html`):
- ✅ Renders with correct title
- ✅ Displays graduation cap icon (🎓)
- ✅ Contains comprehensive description
- ✅ Has correct GitHub link

### 2. Tech Stack Badges - AI Engineering Project
Validates all 5 technology badges are present and in correct order:
- ✅ OpenAI API
- ✅ Anthropic Claude
- ✅ Google Gemini
- ✅ Ollama
- ✅ Python

### 3. Project Features List - AI Engineering Project
Tests that all 4 features are correctly listed:
- ✅ AI web scraper/summarizer agent with customizable roles
- ✅ Multi-provider LLM integration (6+ providers)
- ✅ Prompt engineering & optimization techniques
- ✅ Production-ready code with comprehensive testing

### 4. About Section - AI Engineering Updates
Validates the About section (lines 372-376) includes:
- ✅ AI engineering mentions
- ✅ Production-ready LLM applications
- ✅ Multi-provider integration (OpenAI, Anthropic, Google Gemini)
- ✅ Intelligent chatbots and natural language data exploration
- ✅ Maintains existing data engineering focus

### 5. Tech Stack - AI & Analytics Section
Tests the AI & Analytics skill group (lines 424-434) contains all 7 skills:
- ✅ OpenAI API (GPT-4, GPT-3.5)
- ✅ Anthropic Claude
- ✅ Google Gemini
- ✅ Ollama (local LLMs)
- ✅ Prompt Engineering
- ✅ AI Agent Development
- ✅ Pandas

### 6. Integration Tests
Overall portfolio structure validation:
- ✅ AI section contains exactly 3 project cards
- ✅ About section exists with proper structure
- ✅ About section has all 6 skill groups
- ✅ Portfolio title includes "AI Integration Specialist"

## Test Statistics

- **Total Tests**: 36
- **Test Files**: 1
- **Test Suites**: 6
- **Execution Time**: ~600ms
- **Pass Rate**: 100%

## Test Structure

```
tests/
├── portfolio.test.js    # Main test suite
└── README.md           # This file
```

## How Tests Work

1. **Setup**: Each test loads `index.html` using `readFileSync` and parses it with DOMParser
2. **Query**: Tests use standard DOM methods (`querySelector`, `querySelectorAll`) to find elements
3. **Assert**: Vitest's `expect()` validates element presence, content, and attributes
4. **Isolation**: Each test suite uses `beforeEach()` to ensure fresh DOM state

## Example Test

```javascript
it('renders correctly with proper title', () => {
  const title = projectCard.querySelector('.project-card__title');
  expect(title).toBeTruthy();
  expect(title.textContent.trim()).toBe('AI Engineering Learning Project');
});
```

## Maintenance

When updating the portfolio HTML:
1. Run tests to ensure no regressions: `npm test`
2. Update tests if intentional changes were made
3. Run coverage to identify untested areas: `npm run test:coverage`

## CI/CD Integration

These tests can be integrated into GitHub Actions or other CI/CD pipelines:

```yaml
- name: Run Tests
  run: npm test
```

## Notes

- Tests validate HTML structure and content, not visual appearance
- Tests run against static HTML (no JavaScript execution)
- Network errors in console output are expected (CSS/font loading) and don't affect test results
- All tests pass with exit code 0
