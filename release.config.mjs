export default {
  branches: ['main', { name: 'alpha', prerelease: true }],
  tagFormat: 'workspace-v${version}',
  plugins: [['semantic-release-workspace', { python: { trustedPublishing: true }, changelog: true }], './acceptance-interruption.mjs'],
};
