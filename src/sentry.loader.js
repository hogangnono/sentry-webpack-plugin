module.exports = function sentryLoader(content, map, meta) {
  const { releasePromise } = this.query;
  const callback = this.async();
  releasePromise.then(version => {
    // Skip inject SENTRY_RELEASE code
    const sentryRelease = '';
    callback(null, sentryRelease, map, meta);
  });
};
