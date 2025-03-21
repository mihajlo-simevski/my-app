bun create expo@latest my-app --template blank
bun add --dev --exact @biomejs/biome
bunx biome init
bun add --dev @commitlint/cli @commitlint/config-conventional
echo "export default { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
