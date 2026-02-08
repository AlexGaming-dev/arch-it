# Documentation: Arch-It

Welcome to the official technical documentation for Arch-It. This document provides in-depth information about the architecture, configuration, and advanced usage of the project.

---

## Architecture Overview
Arch-It is designed as a modular CLI tool to automate scaffolding and project structuring.

- **Core:** Handles the logic of parsing commands.
- **Engine:** Processes the `blueprint.json` files.
- **FileSystem:** Manages secure directory and file creation.

## Configuration (`blueprint.json`)
The heart of Arch-It is the blueprint configuration. Below is the specification for the JSON structure:

| Key | Type | Description |
| :--- | :--- | :--- |
| `name` | String | The identifier of the template. |
| `version` | String | Semantic versioning of the blueprint. |
| `structure` | Object | Defines the folders and files to be generated. |

### Example Structure:
```json
{
  "name": "basic-web-app",
  "structure": {
    "src": ["index.js", "styles.css"],
    "public": ["index.html"]
  }
}
```

## Advanced Commands
Beyond the basic setup, Arch-It supports the following advanced operations to streamline your workflow:

### 1. Dry Run Mode
Test the entire generation process without making any changes to your file system. This is perfect for verifying complex blueprints.
**Command: arch-it generate --dry-run**

### 2. Custom Output Directory
Specify exactly where the files should be generated. By default, it uses the current directory.
**Command: arch-it generate --output ./your-target-folder**

### 3. Verbose Logging
If you encounter issues during the process, use the verbose flag to see detailed logs of every file system operation.
**Command: arch-it --verbose**

---

## Contribution Guidelines
To maintain the high standards of Alex Gaming Studio, please adhere to the following rules when contributing:

* **Process:** All contributions must be submitted via a Pull Request (PR) from a forked repository.
* **Quality:** PRs will only be merged if all automated status checks (CI Workflows) are successful.
* **Legal:** As stated in our guidelines, cloning or copying the project or code for personal use is strictly prohibited. Contributions grant the studio the right to use the submitted code within this project.

---

## Developer Environment Setup
If you are part of the @maintainer team or a contributor, follow these steps to set up the project locally:

1. **npm install** – Install all necessary dependencies.
2. **npm run dev** – Start the compiler in watch mode for active development.
3. **npm test** – Run the test suite (required before any PR submission).
4. **npm link** – Link the CLI locally to test the commands in any terminal window.

---

## Troubleshooting & Support
If you encounter errors during the publish or build process:

* **Auth Issues:** Run **npm login** to refresh your Granular Access Token.
* **Access Denied:** Ensure you use **npm publish --access public** for scoped packages.
* **Version Conflicts:** Use **npm version patch** to increment the version before publishing.

---

*© 2026 Alex Gaming Studio. Professional Scaffolding Solutions.*
