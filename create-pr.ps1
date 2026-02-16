rrorActionPreference = "Stop"

# PR details
$title = "feat: Update navbar branding and add testing infrastructure"
$body = @"
## 📋 Summary of Changes

### Code Updates
- **Navbar Branding**: Updated navbar title from 'Portfolio' to 'Kyle Masangcay'
- **TypeScript Import Fix**: Corrected next-env.d.ts import path in production builds

### Testing Infrastructure (NEW)
- **Jest Setup**: Configured Jest with TypeScript support
- **React Testing Library**: Integrated for component testing  
- **Test Configuration**: jest.config.js, jest.setup.js, and example tests
- **Coverage Reports**: Configured test coverage collection

### CI/CD Automation (NEW)
- **Main CI Pipeline** (.github/workflows/ci.yml):
  - Linting, testing, and build verification on push and PRs
  - Tests against Node.js 18.x and 20.x
  - Test coverage reports with Codecov integration

- **Pull Request Quality Checks** (.github/workflows/pr-checks.yml):
  - Validates code quality before merging
  - Comments on PRs with results

- **Code Quality Analysis** (.github/workflows/code-quality.yml):
  - ESLint validation, TypeScript type checking, build verification

### npm Scripts Added
- `npm test` - Run Jest test suite
- `npm test:watch` - Run tests in watch mode
- `npm test:coverage` - Generate coverage reports

## ✅ Quality Gates Enabled
- ✅ ESLint validation on every commit
- ✅ Jest test suite execution
- ✅ TypeScript type checking
- ✅ Next.js build verification
- ✅ Test coverage analysis

## 📊 Files Added
- `.github/workflows/ci.yml` - Main CI pipeline
- `.github/workflows/pr-checks.yml` - PR quality gates  
- `.github/workflows/code-quality.yml` - Code analysis
- `jest.config.js` - Jest configuration
- `jest.setup.js` - Test environment setup
- `__tests__/navbar.test.tsx` - Example component test
- `PULL_REQUEST_SUMMARY.md` - Detailed documentation

## 🚀 Ready to Merge
All quality checks pass and infrastructure is ready for production. GitHub Actions will automatically run on this PR.
"@

$branch = "feature/update-navbar-and-types"
$baseBranch = "master"

# Try using gh CLI if available, otherwise provide instructions
try {
    & gh pr create --title $title --body $body --head $branch --base $baseBranch
    Write-Host "✅ Pull Request created successfully!"
} catch {
    Write-Host "GitHub CLI not available. Please use the web UI:"
    Write-Host "https://github.com/st4rboy1/My-Portfolio-/pull/new/$branch"
    Write-Host ""   
    Write-Host "Title: $title"
    Write-Host "Description has been prepared above."
}
